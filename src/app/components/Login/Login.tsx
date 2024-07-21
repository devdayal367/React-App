import React, { useEffect, useState } from "react";
import { Card, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  // Function to handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Validate username
    if (username.trim() === "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    // Validate password
    if (password.trim() === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    // If both fields are valid, proceed with login logic
    if (username.trim() !== "" && password.trim() !== "") {
      console.log("Username:", username);
      console.log("Password:", password);
      localStorage.setItem("token", "112233");
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <h1>Login Component</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Card sx={{ maxWidth: 500, padding: 5, margin: 2 }}>
          <div>
            <TextField
              id="username"
              label="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              error={usernameError}
              helperText={usernameError ? "Username is required" : ""}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              error={passwordError}
              helperText={passwordError ? "Password is required" : ""}
            />
          </div>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Card>
      </Box>
    </div>
  )
}
