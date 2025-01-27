import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Box,
  Toolbar,
  Tabs,
  Tab,
  Paper,
  Typography,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { questionList, quizName } from "../../../../../api/question";
import { useNavigate } from "react-router-dom";
import { author } from "../../../../../api/user";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [quizs, setquizs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const questionResponse = await questionList();
        setQuestions(questionResponse);

        const quizPromises = questionResponse.map((question) => quizName(question.id));
        const quizResponses = await Promise.all(quizPromises);

        const quizData = quizResponses.map((response, index) => ({
          itemId: questionResponse[index].id,
          quiz: response,
        }));
        setquizs(quizData);

        const authorPromises = questionResponse.map((course) => author(course.author));
        const authorResponses = await Promise.all(authorPromises);

        const coursesWithAuthors = questionResponse.map((course, index) => ({
          ...course,
          authorName: authorResponses[index].name,
        }));
        setQuestions(coursesWithAuthors);
      } catch (error) {
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSort = (property) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getquizName = (itemId) => {
    const quiz = quizs.find((cat) => cat.itemId === itemId);
    return Array.isArray(quiz.quiz) && quiz.quiz.length > 0 ? quiz.quiz : "Not yet assign";
  };

  const filteredQuestions = questions
    .filter((question) =>
      activeTab === "all"
        ? true
        : activeTab === "published"
        ? question.status === "published"
        : question.status === "draft"
    )
    .filter((question) =>
      question.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedQuestions = filteredQuestions.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedQuestions = sortedQuestions.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
      <Toolbar sx={{ justifyContent: "space-between", marginBottom: 2 }}>
        <Typography variant="h4">Questions</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "10px 20px" }}
          onClick={() => navigate(`add/`)}
        >
          Add New Question
        </Button>
      </Toolbar>

      <Tabs value={activeTab} onChange={handleTabChange} sx={{ marginBottom: 2 }}>
        <Tab label="All" value="all" />
        <Tab label="Published" value="published" />
        <Tab label="Draft" value="draft" />
      </Tabs>

      <Box sx={{ display: "flex", justifyContent: "right", marginBottom: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
          sx={{
            maxWidth: 400,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
            marginTop: 2,
          }}
        />
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Snackbar
          open={Boolean(error)}
          message={error}
          autoHideDuration={6000}
          onClose={() => setError("")}
        />
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleSort("name")}
                  >
                    Question Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "author"}
                    direction={orderBy === "author" ? order : "asc"}
                    onClick={() => handleSort("author")}
                  >
                    Author
                  </TableSortLabel>
                </TableCell>
                <TableCell>Quiz</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "date"}
                    direction={orderBy === "date" ? order : "asc"}
                    onClick={() => handleSort("date")}
                  >
                    Date
                  </TableSortLabel>
                </TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedQuestions.map((question, index) => (
                <TableRow key={index}>
                  <TableCell>{question.name}</TableCell>
                  <TableCell>{question.authorName || "Unknown Author"}</TableCell>
                  <TableCell>{getquizName(question.id)}</TableCell>
                  <TableCell>
                    {question.type
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
                  </TableCell>
                  <TableCell>
                    {question.createdAt
                      ? new Date(question.createdAt).toLocaleDateString("en-us", {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })
                      : "No Date Available"}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginRight: 1 }}
                      onClick={() => navigate(`edit/${question.id}`)}
                    >
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <TablePagination
        component="div"
        count={filteredQuestions.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  );
};

export default Question;
