import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import background from './images/background.jpg';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log({
      username,
      password,
    });
    fetch('http://localhost:9453/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.status=="ok"){
          alert("Login Successful")
          window.localStorage.setItem("token",data.data)
          window.location.href="/hp"
        }
        else {
          alert("Please Check the Username or Password")
        }
      });
  };

  render() {
    return (
      <div style={{ padding: 80, backgroundImage: `url(${background})` }}>
        <br />
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <Container maxWidth="sm">
            <Box
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.5)',
                height: '70vh',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Stack direction="column" alignItems="center" spacing={1}>
                <br />
                <Typography variant="h4">
                  <LoginIcon style={{ color: '#f32170' }} />Login{' '}
                </Typography>
                <br />
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  onChange={(e) =>
                    this.setState({ username: e.target.value })
                  }
                />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  onChange={(e) =>
                    this.setState({ password: e.target.value })
                  }
                />
                <br />
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: '#f32170',
                    marginBottom: '100px',
                  }}
                  type="submit"
                >
                  Login
                </Button>
                <Typography>
                  Don't have an account?
                  <Button variant="text">
                    <Link to={'/s'}>Sign up</Link>
                  </Button>
                </Typography>
              </Stack>
            </Box>
          </Container>
        </form>
      </div>
    );
  }
}

export default Login;
