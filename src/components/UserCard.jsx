import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body1">{user.email}</Typography>
        <Typography variant="body2">{user.address.city}</Typography>
        <Button onClick={() => navigate(`/user/${user.id}`)}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
