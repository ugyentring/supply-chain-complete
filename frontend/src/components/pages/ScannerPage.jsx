import { Box, Paper, Typography, Button } from "@mui/material";
import bgImg from "../../img/bg.png";
import QrScanner from "../QrScanner";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { contractAddress as CONTRACT_ADDRESS } from "../../utils/constants";

const ScannerPage = () => {
  const [qrData, setQrData] = useState("");

  const { auth } = useAuth();
  const navigate = useNavigate();

  const passData = (data) => {
    setQrData(data);
    console.log("qrdata 1: ", qrData);
  };

  useEffect(() => {
    console.log("auth: ", auth);
    console.log("qrdata 2: ", qrData);

    const arr = qrData.split(",");
    const contractAddress = arr[0];

    if (contractAddress) {
      if (contractAddress === CONTRACT_ADDRESS) {
        if (auth.role === "supplier" || auth.role === "retailer") {
          navRole();
        } else {
          navUser();
        }
      } else {
        navFakeProduct();
      }
    }
  }, [qrData]);

  const navRole = () => {
    navigate("/update-product", { state: { qrData } });
  };

  const navUser = () => {
    navigate("/authentic-product", { state: { qrData } });
  };

  const navFakeProduct = () => {
    navigate("/fake-product");
  };

  const handleBack = () => {
    navigate(-1);
  };

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
          width: "400px",
          margin: "auto",
          marginTop: "10%",
          marginBottom: "10%",
          padding: "3%",
          backgroundColor: "#F2E6D0",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "5%",
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
            Scan QR Code
          </Typography>

          <QrScanner passData={passData} />

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
                marginTop: "5%",
                color: "#F1B749",
              }}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ScannerPage;
