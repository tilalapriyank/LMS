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
import { courseList, courseCategoryByCid } from "../../../../../api/course";
import { useNavigate } from "react-router-dom";
import { author } from "../../../../../api/user";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const courseResponse = await courseList();
        const categoryPromises = courseResponse.map((course) =>
          courseCategoryByCid(course.id)
        );
        const categoryResponses = await Promise.all(categoryPromises);

        const categoriesData = categoryResponses.map((response, index) => ({
          courseId: courseResponse[index].id,
          category: response,
        }));
        setCategories(categoriesData);

        const authorPromises = courseResponse.map((course) =>
          author(course.author)
        );
        const authorResponses = await Promise.all(authorPromises);

        const enrichedCourses = courseResponse.map((course, index) => ({
          ...course,
          authorName: authorResponses[index]?.name || "Unknown Author",
        }));
        setCourses(enrichedCourses);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error);
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

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handlePageChange = (_, newPage) => setPage(newPage);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleTabChange = (_, newValue) => setActiveTab(newValue);

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

  const handleDelete = (courseId) => {
    // Add delete functionality here
    console.log(`Delete course with ID: ${courseId}`);
    // After deletion, show a confirmation message or update state
    setOpenSnackbar(true);
  };

  return (
    <Box>
      <Toolbar sx={{ justifyContent: "space-between", marginBottom: 2 }}>
        <Typography variant="h4">Courses</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "10px 20px" }}
          onClick={() => navigate("add/")}
        >
          Add New Course
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

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message={error}
        />
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                {["name", "category", "author", "date"].map((column) => (
                  <TableCell key={column}>
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? order : "asc"}
                      onClick={() => handleSort(column)}
                    >
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                ))}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{getCategoryName(course.id)}</TableCell>
                  <TableCell>{course.authorName}</TableCell>
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
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(course.id)}
                    >
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
