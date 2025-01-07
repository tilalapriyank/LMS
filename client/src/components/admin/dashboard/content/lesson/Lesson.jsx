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
  CircularProgress, // Added import for the spinner
} from "@mui/material";
import { lessonList } from "../../../../../api/lesson";
import { useNavigate } from "react-router-dom";
import { itemCourseByid } from "../../../../../api/itemcourse";
import { author } from "../../../../../api/user";

const Lesson = () => {
  const [lessons, setLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true); // New loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        setLoading(true); // Start loading when fetching begins
        const lessonResponse = await lessonList();
        const coursePromises = lessonResponse.map((course) =>
          itemCourseByid(course.id)
        );
        const authorPromises = lessonResponse.map((course) =>
          author(course.author)
        );

        const [lessonResponses, authorResponses] = await Promise.all([
          Promise.all(coursePromises),
          Promise.all(authorPromises),
        ]);

        const coursesData = lessonResponse.map((lesson, index) => ({
          ...lesson,
          courseName: lessonResponses[index],
          authorName: authorResponses[index]?.name || "Unknown Author",
        }));

        setLessons(coursesData);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
      }
    };

    fetchLessons();
  }, []);

  const handleSort = (property) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handlePageChange = (event, newPage) => setPage(newPage);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  const filterAndSortLessons = () => {
    const filtered = lessons.filter((lesson) =>
      activeTab === "all"
        ? true
        : activeTab === "published"
        ? lesson.status === "published"
        : lesson.status === "draft"
    );

    const searched = filtered.filter((lesson) =>
      lesson.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return searched.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
      return 0;
    });
  };

  const paginatedLessons = filterAndSortLessons().slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
      <Toolbar sx={{ justifyContent: "space-between", marginBottom: 2 }}>
        <Typography variant="h4">Lessons</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "10px 20px" }}
          onClick={() => navigate(`add/`)}
        >
          Add New Lesson
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
          placeholder="Search lessons..."
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

      {/* Show loading spinner when fetching data */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <CircularProgress />
        </Box>
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
                    Lesson Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "authorName"}
                    direction={orderBy === "authorName" ? order : "asc"}
                    onClick={() => handleSort("authorName")}
                  >
                    Author
                  </TableSortLabel>
                </TableCell>
                <TableCell>Course</TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "createdAt"}
                    direction={orderBy === "createdAt" ? order : "asc"}
                    onClick={() => handleSort("createdAt")}
                  >
                    Date
                  </TableSortLabel>
                </TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedLessons.map((lesson, index) => (
                <TableRow key={index}>
                  <TableCell>{lesson.name}</TableCell>
                  <TableCell>{lesson.authorName}</TableCell>
                  <TableCell>{lesson.courseName || "-"}</TableCell>
                  <TableCell>
                    {lesson.createdAt
                      ? new Date(lesson.createdAt).toLocaleDateString("en-us", {
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
                      onClick={() => navigate(`edit/${lesson.id}`)}
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
        count={filterAndSortLessons().length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  );
};

export default Lesson;
