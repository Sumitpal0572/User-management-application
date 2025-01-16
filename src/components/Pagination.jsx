import React from "react";
import { Pagination as MUIPagination } from "@mui/material";

const Pagination = ({ total, usersPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / usersPerPage);

  return (
    <MUIPagination
      count={totalPages}
      page={currentPage}
      onChange={(_, page) => onPageChange(page)}
    />
  );
};

export default Pagination;
