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
import { courseList, courseCategoryByCid } from "../../../../../api/course";
import { useNavigate } from "react-router-dom";
import { author } from "../../../../../api/user";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]); // State for storing category names
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
        const courseResponse = await courseList();
        setCourses(courseResponse);

        const categoryPromises = courseResponse.map((course) =>
          courseCategoryByCid(course.id)
        );
        const categoryResponses = await Promise.all(categoryPromises);
        const categoryData = categoryResponses.map((response, index) => ({
          courseId: courseResponse[index].id,
          category: response,
        }));
        setCategories(categoryData);

        const authorPromises = courseResponse.map(
          (course) => author(course.author)
        );
        const authorResponses = await Promise.all(authorPromises);
        const coursesWithAuthors = courseResponse.map((course, index) => ({
          ...course,
          authorName: authorResponses[index].name,
        }));
        setCourses(coursesWithAuthors);
      } catch (error) {
        console.error("Error fetching data:", error);
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

  const getCategoryName = (courseId) => {
    const category = categories.find((cat) => cat.courseId === courseId);
    return category ? category.category.join(", ") : "-";
  };

  const filteredCourses = courses
    .filter((course) =>
      activeTab === "all"
        ? true
        : activeTab === "published"
        ? course.status === "published"
        : course.status === "draft"
    )
    .filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedCourses = filteredCourses.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedCourses = sortedCourses.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  return (
    <Box>
      <Toolbar sx={{ justifyContent: "space-between", marginBottom: 2 }}>
        <Typography variant="h4">Courses</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "10px 20px" }}
          onClick={() => navigate(`add/`)}
        >
          Add New Course
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
          placeholder="Search courses..."
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
                  Course Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "category"}
                  direction={orderBy === "category" ? order : "asc"}
                  onClick={() => handleSort("category")}
                >
                  Category
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
              <TableCell>Content</TableCell>
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
            {paginatedCourses.map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course.name}</TableCell>
                <TableCell>{getCategoryName(course.id)}</TableCell>
                <TableCell>{course.authorName || "Unknown Author"}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>
                  {course.createdAt
                    ? new Date(course.createdAt).toLocaleDateString("en-us", {
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
                    onClick={() => navigate(`edit/${course.id}`)}
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
        count={filteredCourses.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  );
};

export default Course;
