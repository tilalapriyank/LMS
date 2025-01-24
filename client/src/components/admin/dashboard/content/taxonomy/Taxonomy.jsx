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
import {
  categoryList,
  tagList,
  questionCategoryList,
} from "../../../../../api/taxonomy";
import { useNavigate } from "react-router-dom";

const Taxonomy = () => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [questionCategories, setQuestionCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("categories");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await categoryList();
        setCategories(categoryResponse);

        const tagResponse = await tagList();
        setTags(tagResponse);

        const questionCategoryResponse = await questionCategoryList();
        setQuestionCategories(questionCategoryResponse);
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

  const filteredData = (data) =>
    data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedData = (data) =>
    data.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
      return 0;
    });

  const paginatedData = (data) =>
    sortedData(filteredData(data)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

  return (
    <Box>
      <Toolbar sx={{ marginBottom: 2 }}>
        <Typography variant="h4">Taxonomy</Typography>
      </Toolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{ marginBottom: 2 }}
        >
          <Tab label="Categories" value="categories" />
          <Tab label="Tags" value="tags" />
          <Tab label="Question Categories" value="questionCategories" />
        </Tabs>
        {activeTab === "categories" && (
          <Box
            sx={{ display: "flex", justifyContent: "right", marginBottom: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "10px 20px" }}
              onClick={() => navigate(`add/category`)}
            >
              Add New Category
            </Button>
          </Box>
        )}
        {activeTab === "tags" && (
          <Box
            sx={{ display: "flex", justifyContent: "right", marginBottom: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "10px 20px" }}
              onClick={() => navigate(`add/tag`)}
            >
              Add New Tag
            </Button>
          </Box>
        )}
        {activeTab === "questionCategories" && (
          <Box
            sx={{ display: "flex", justifyContent: "right", marginBottom: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "10px 20px" }}
              onClick={() => navigate(`add/question-category`)}
            >
              Add New Question Category
            </Button>
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "right", marginBottom: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
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
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "description"}
                  direction={orderBy === "description" ? order : "asc"}
                  onClick={() => handleSort("description")}
                >
                  Description
                </TableSortLabel>
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeTab === "categories" &&
              paginatedData(categories).map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                    {category.description || "No Description"}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginRight: 1 }}
                      onClick={() => navigate(`edit/category/${category.id}`)}
                    >
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

            {activeTab === "tags" &&
              paginatedData(tags).map((tag) => (
                <TableRow key={tag.id}>
                  <TableCell>{tag.name}</TableCell>
                  <TableCell>{tag.description || "No Description"}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginRight: 1 }}
                      onClick={() => navigate(`edit/tag/${tag.id}`)}
                    >
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

            {activeTab === "questionCategories" &&
              paginatedData(questionCategories).map((qCategory) => (
                <TableRow key={qCategory.id}>
                  <TableCell>{qCategory.name}</TableCell>
                  <TableCell>
                    {qCategory.description || "No Description"}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginRight: 1 }}
                      onClick={() =>
                        navigate(`edit/question-category/${qCategory.id}`)
                      }
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
        count={categories.length} // Adjust this based on the active tab
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  );
};

export default Taxonomy;
