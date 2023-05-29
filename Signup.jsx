import React, { Component } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import bg from "./images/bg.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      place: "",
      age: "",
      email: "",
      education: "",
      contactDetails: "",
      phone: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      username,
      place,
      age,
      email,
      education,
      contactDetails,
      phone,
      password,
    } = this.state;
    console.log({
      firstName,
      username,
      place,
      age,
      email,
      education,
      contactDetails,
      phone,
      password,
    });
    fetch("http://localhost:9453/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName,
        username,
        place,
        age,
        email,
        education,
        contactDetails,
        phone,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.status=="ok"){
          alert("User Created Successfully")
          window.localStorage.setItem("token",data.data)
          window.location.href="/l"
        }
        if(data.status=="error"){
          alert("Please Provide a Valid E-mail or Username")
        }
        if(data.error=="User Exists"){
          alert("You have already an account")
        }
      });
  };

  render() {
    return (
      <div style={{ backgroundImage: `url(${bg})` }}>
        <br />
        <br />
        <br />
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.5)",
              height: "90vh",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Stack direction="column" alignItems="center" spacing={2}>
              <Grid item xs={12}>
                <LocalLibraryRoundedIcon style={{ color: "#ff6b08" }} />
                <Typography variant="h5" style={{ color: "black" }}>
                  Signup to explore.
                </Typography>
              </Grid>
              <form onSubmit={this.handleSubmit}>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      style={{ margin: 7 }}
                      required
                      id="Name"
                      label="Name"
                      variant="filled"
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ margin: 7 }}
                      required
                      id="place"
                      label="Place"
                      variant="filled"
                      onChange={(e) =>
                        this.setState({ place: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ margin: 7 }}
                      required
                      id="age"
                      label="Age"
                      variant="filled"
                      onChange={(e) => this.setState({ age: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ margin: 7 }}
                      required
                      id="email"
                      label="E-mail"
                      variant="filled"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ margin: 7, width: 220 }}
                      required
                      id="education"
                      label="Education"
                      variant="filled"
                      onChange={(e) =>
                        this.setState({ education: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ margin: 7 }}
                      required
                      id="contactDetails"
                      label="Contact Details"
                      variant="filled"
                      onChange={(e) =>
                        this.setState({ contactDetails: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ margin: 7 }}
                      required
                      id="phone"
                      label="Phone"
                      variant="filled"
                      onChange={(e) => this.setState({ phone: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ margin: 7 }}
                      required
                      id="username"
                      label="Username"
                      variant="filled"
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ margin: 7, width: 220 }}
                      required
                      id="password"
                      label="Password"
                      variant="filled"
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton></IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <br />
                  <Grid item xs={12}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox style={{ color: "black" }} />}
                        style={{ color: "black" }}
                        label="Terms and Conditions (if the book is not returned or damaged, a fine will be charged)"
                      />
                    </FormGroup>
                  </Grid>
                  <br />
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      style={{
                        backgroundColor: "#cf23cf",
                        color: "#ffffff",
                        marginBottom: "30px",
                      }}
                    >
                        Sign Up
                      {/*<Link to={"/hp"} style={{ textDecoration: "none", color: "inherit" }}>
                    </Link>*/}
                    </Button>
                    <Typography>
                      Have an account?
                      <Button variant="text">
                        <Link to={"/l"} style={{ textDecoration: "none" }}>
                          Login
                        </Link>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Stack>
          </Box>
        </Container>
      </div>
    );
  }
}

export default Signup;
