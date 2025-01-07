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
  Typography,
  Paper,
} from "@mui/material";
import { userList } from "../../../../../api/user"; // API call for fetching users
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await userList(); // Your API call to fetch users
        setUsers(userResponse);
      } catch (error) {
        console.error("Error fetching users:", error);
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
      <Toolbar sx={{ justifyContent: "space-between", marginBottom: 2 }}>
        <Typography variant="h4">User List</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "10px 20px" }}
          onClick={() => navigate(`add/`)}
        >
          Add New User
        </Button>
      </Toolbar>

      <Box sx={{ display: "flex", justifyContent: "right", marginBottom: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search by Name..."
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
                  active={orderBy === "email"}
                  direction={orderBy === "email" ? order : "asc"}
                  onClick={() => handleSort("email")}
                >
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "role"}
                  direction={orderBy === "role" ? order : "asc"}
                  onClick={() => handleSort("role")}
                >
                  Role
                </TableSortLabel>
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData(users).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ marginRight: 1 }}
                    onClick={() => navigate(`edit/${user.id}`)}
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
        count={users.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  );
};

export default UserList;
