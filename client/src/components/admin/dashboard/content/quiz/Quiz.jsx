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
} from "@mui/material";
import { quizList, questionCount } from "../../../../../api/quiz";
import { useNavigate } from "react-router-dom";
import { itemCourseByid } from "../../../../../api/itemcourse";
import { author } from "../../../../../api/user";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]); // State for quizzes
  const [courses, setCourses] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizResponse = await quizList(); // Fetch quizzes instead of lessons
        setQuizzes(quizResponse);

        const coursePromises = quizResponse.map((quiz) =>
          itemCourseByid(quiz.id)
        );
        const quizResponses = await Promise.all(coursePromises);

        const courseData = quizResponses.map((response, index) => ({
          itemId: quizResponse[index].id,
          course: response,
        }));

        const Questions = quizResponse.map((quiz) => questionCount(quiz.id));
        const question = await Promise.all(Questions);

        const questionData = question.map((response, index) => ({
          itemId: quizResponse[index].id,
          count: response,
        }));

        setCourses(courseData);
        setQuestions(questionData);

        const authorPromises = quizResponse.map((course) =>
          author(course.author)
        );
        const authorResponses = await Promise.all(authorPromises);
        const coursesWithAuthors = quizResponse.map((course, index) => ({
          ...course,
          authorName: authorResponses[index].name,
        }));
        setQuizzes(coursesWithAuthors);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
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

  const getCourseName = (itemId) => {
    const course = courses.find((cat) => cat.itemId === itemId);
    return course ? course.course : "-";
  };
  const getQuestionCount = (itemId) => {
    const count = questions.find((cat) => cat.itemId === itemId);
    console.log(count);
    return count ? count.count.count : "-";
  };

  const filteredQuizzes = quizzes
    .filter((quiz) =>
      activeTab === "all"
        ? true
        : activeTab === "published"
        ? quiz.status === "published"
        : quiz.status === "draft"
    )
    .filter((quiz) =>
      quiz.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedQuizzes = filteredQuizzes.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedQuizzes = sortedQuizzes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
      <Toolbar sx={{ justifyContent: "space-between", marginBottom: 2 }}>
        <Typography variant="h4">Quizzes</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "10px 20px" }}
          onClick={() => navigate(`add/`)}
        >
          Add New Quiz
        </Button>
      </Toolbar>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{ marginBottom: 2 }}
      >
        <Tab label="All" value="all" />
        <Tab label="Published" value="published" />
        <Tab label="Draft" value="draft" />
      </Tabs>

      <Box sx={{ display: "flex", justifyContent: "right", marginBottom: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search quizzes..."
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
                  Quiz Name
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
              <TableCell>Course</TableCell>
              <TableCell>Questions</TableCell>
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
            {paginatedQuizzes.map((quiz, index) => (
              <TableRow key={index}>
                <TableCell>{quiz.name}</TableCell>
                <TableCell>{quiz.authorName || "Unknown Author"}</TableCell>
                <TableCell>{getCourseName(quiz.id)}</TableCell>
                <TableCell>{getQuestionCount(quiz.id)}</TableCell>
                <TableCell>
                  {quiz.createdAt
                    ? new Date(quiz.createdAt).toLocaleDateString("en-us", {
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
                    onClick={() => navigate(`edit/${quiz.id}`)}
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

      <TablePagination
        component="div"
        count={filteredQuizzes.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  );
};

export default Quiz;
