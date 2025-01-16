import React, { useState, useEffect } from "react";
import {
  TextField,
  Container,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const searchResults = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(searchResults);
  }, [search, users]);

  const handleSort = (order) => {
    const sorted = [...filteredUsers].sort((a, b) =>
      order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setFilteredUsers(sorted);
  };

  const startIndex = (page - 1) * usersPerPage;
  const currentPageUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <TextField
        label="Search by Name"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="contained" onClick={() => handleSort("asc")}>
        Sort A-Z
      </Button>
      <Button
        variant="contained"
        onClick={() => handleSort("desc")}
        style={{ marginLeft: "10px" }}
      >
        Sort Z-A
      </Button>
      <Grid container spacing={3} marginTop={2}>
        {currentPageUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        total={filteredUsers.length}
        usersPerPage={usersPerPage}
        currentPage={page}
        onPageChange={setPage}
      />
    </Container>
  );
};

export default HomePage;
