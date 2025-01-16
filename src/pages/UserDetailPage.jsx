import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Typography, CircularProgress, Container } from "@mui/material";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <CircularProgress />;
  if (!user) return <p>User not found</p>;

  return (
    <Container>
      <Typography variant="h4">{user.name}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Typography>Company: {user.company.name}</Typography>
      <Typography>Website: {user.website}</Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Back
      </Button>
    </Container>
  );
};

export default UserDetailPage;
