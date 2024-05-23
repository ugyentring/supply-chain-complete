import { Box, Paper, Typography } from "@mui/material";
import bgImg from "../../img/bg.png";
import axios from "axios";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageAccount = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/profileAll");
      setRows(response.data);
    } catch (error) {
      console.error("Failed to fetch profile data:", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = async (params) => {
    const updatedRow = { ...params.row };
    console.log(`Updating profile with data:`, updatedRow);
    try {
      await axios.put(
        `http://localhost:5000/profile/${updatedRow.username}`,
        updatedRow
      );
      fetchData();
    } catch (error) {
      console.error("Failed to update profile data:", error);
    }
  };

  const handleDelete = async (params) => {
    const { username } = params.row;
    console.log(`Deleting profile with username: ${username}`);
    try {
      await axios.delete(`http://localhost:5000/profile/${username}`);
      fetchData();
    } catch (error) {
      console.error("Failed to delete profile data:", error);
    }
  };

  const columns = [
    { field: "name", headerName: "Name", width: 120, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 300,
      editable: true,
    },
    { field: "username", headerName: "Username", width: 130, editable: true },
    { field: "website", headerName: "Website", width: 200, editable: true },
    { field: "location", headerName: "Location", width: 200, editable: true },
    { field: "role", headerName: "Role", width: 130, editable: true },
    { field: "image", headerName: "Image", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleEdit(params)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params)}
        />,
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "80vh",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "cover",
        zIndex: -2,
        overflowY: "scroll",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "80%",
          margin: "auto",
          height: "530px",
          marginTop: "5%",
          marginBottom: "5%",
          padding: "3%",
          backgroundColor: "#F2E6D0",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            marginBottom: "3%",
            fontFamily: "Gambetta",
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          Manage Account
        </Typography>
        <Paper sx={{ height: 400, width: "100%", backgroundColor: "#FFFFFF" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            processRowUpdate={(newRow, oldRow) => {
              handleEdit({ row: newRow });
              return newRow;
            }}
          />
        </Paper>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleBack}
            sx={{
              marginTop: "3%",
              color: "#F1B749",
            }}
          >
            Back
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ManageAccount;
