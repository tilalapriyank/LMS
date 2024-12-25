import React, { useState } from "react";
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
  Typography
} from "@mui/material";

const coursesData = [
  {
    name: "React Basics",
    category: "Web Development",
    author: "John Doe",
    content: "Introduction to React",
    date: "2024-01-01",
    status: "published",
  },
  {
    name: "Advanced Angular",
    category: "Web Development",
    author: "Jane Smith",
    content: "Deep dive into Angular",
    date: "2024-01-15",
    status: "mine",
  },
  {
    name: "Data Science 101",
    category: "Data Science",
    author: "Alice Johnson",
    content: "Learn Data Science Basics",
    date: "2024-02-01",
    status: "published",
  },
];

const Course = () => {
  const [courses, setCourses] = useState(coursesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [activeTab, setActiveTab] = useState("all");

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

  const filteredCourses = courses
    .filter((course) =>
      activeTab === "all"
        ? true
        : activeTab === "published"
        ? course.status === "published"
        : course.status === "mine"
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
        <Button variant="contained" color="primary" sx={{ padding: "10px 20px" }}>
          Add New Course
        </Button>
      </Toolbar>

        <Tabs value={activeTab} onChange={handleTabChange} sx={{ marginBottom: 2 }}>
          <Tab label="All" value="all" />
          <Tab label="Published" value="published" />
          <Tab label="Mine" value="mine" />
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
                  <TableCell>{course.category}</TableCell>
                  <TableCell>{course.author}</TableCell>
                  <TableCell>{course.content}</TableCell>
                  <TableCell>{course.date}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary" sx={{ marginRight: 1 }}>
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
        />
    </Box>
  );
};

export default Course;
