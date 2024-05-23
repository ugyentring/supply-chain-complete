import { Box, Paper, Avatar, Typography, Button } from "@mui/material";
import bgImg from "../../img/bg.png";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [role, setRole] = useState([]);
  const [website, setWebsite] = useState([]);
  const [location, setLocation] = useState([]);
  const [image, setImage] = useState({
    file: [],
    filepreview: null,
  });

  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/profile/${auth.user}`);
      if (res.data && res.data.length > 0) {
        const userData = res.data[0];
        setName(userData.name || "");
        setDescription(userData.description || "");
        setRole(userData.role || "");
        setWebsite(userData.website || "");
        setLocation(userData.location || "");

        setImage({
          file: [],
          filepreview: userData.image
            ? `path/to/images/${userData.image}`
            : null,
        });
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "100vh",
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
          width: "400px",
          margin: "auto",
          marginTop: "10%",
          marginBottom: "10%",
          padding: "3%",
          backgroundColor: "#F2E6D0",
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            margin: "auto",
            marginBottom: "3%",
            backgroundColor: "#F1B749",
          }}
        >
          {name[0]}
        </Avatar>

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "5%",
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: "3%",
          }}
        >
          Description: {description}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: "3%",
          }}
        >
          Role: {role}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: "3%",
          }}
        >
          Website: {website}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: "3%",
          }}
        >
          Location: {location}
        </Typography>

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
              marginTop: "7%",
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

export default Profile;
