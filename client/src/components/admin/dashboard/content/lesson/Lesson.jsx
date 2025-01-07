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
import { lessonList } from "../../../../../api/lesson";
import { useNavigate } from "react-router-dom";
import { itemCourseByid } from "../../../../../api/itemcourse";
import { author } from "../../../../../api/user";

const Lesson = () => {
  const [lessons, setLessons] = useState([]);
  const [courses, setCourses] = useState([]);
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
        const lessonResponse = await lessonList();
        setLessons(lessonResponse);

        const coursePromises = lessonResponse.map((course) =>
          itemCourseByid(course.id)
        );
        const lessonResponses = await Promise.all(coursePromises);

        const courseData = lessonResponses.map((response, index) => ({
          itemId: lessonResponse[index].id,
          course: response,
        }));
        setCourses(courseData);

        const authorPromises = lessonResponse.map((course) =>
          author(course.author)
        );
        const authorResponses = await Promise.all(authorPromises);
        const coursesWithAuthors = lessonResponse.map((course, index) => ({
          ...course,
          authorName: authorResponses[index].name,
        }));
        setLessons(coursesWithAuthors);
      } catch (error) {
        console.error("Error fetching lessons:", error);
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

  const filteredLessons = lessons
    .filter((lesson) =>
      activeTab === "all"
        ? true
        : activeTab === "published"
        ? lesson.status === "published"
        : lesson.status === "draft"
    )
    .filter((lesson) =>
      lesson.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedLessons = filteredLessons.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedLessons = sortedLessons.slice(
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
                  active={orderBy === "author"}
                  direction={orderBy === "author" ? order : "asc"}
                  onClick={() => handleSort("author")}
                >
                  Author
                </TableSortLabel>
              </TableCell>
              <TableCell>Course</TableCell>
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
            {paginatedLessons.map((lesson, index) => (
              <TableRow key={index}>
                <TableCell>{lesson.name}</TableCell>
                <TableCell>{lesson.authorName || "Unknown Author"}</TableCell>
                <TableCell>{getCourseName(lesson.id)}</TableCell>
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

      <TablePagination
        component="div"
        count={filteredLessons.length}
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
