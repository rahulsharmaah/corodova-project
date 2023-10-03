import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      toast.error("Please enter a valid email address.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

    // Handle login logic here (e.g., send data to a server)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: "20px", maxWidth: "300px", margin: "0 auto" }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Enter your credentials to log in.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // Apply email validation regex pattern
          inputProps={{
            pattern: "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$",
            title: "Invalid email address",
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          // eslint-disable-next-line
          style={{
            "&:hover": {
              color: "secondary",
            },
          }}
        >
          Login
        </Button>
      </form>
      <ToastContainer />
    </Paper>
  );
};

export default Login;
