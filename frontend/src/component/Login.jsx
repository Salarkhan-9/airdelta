import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showCard, setShowCard] = useState(true);

  // Default admin credentials
  const defaultAdminUsername = "admin";
  const defaultAdminPassword = "admin123";

  useEffect(() => {
    if (loggedIn) {
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
        setShowCard(false);
      }, 1000);
    }
  }, [loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating authentication with default admin credentials
    if (
      username === defaultAdminUsername &&
      password === defaultAdminPassword
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container className="col-4">
      <br />
      <br />
      <br />
      {showCard && (
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <br />
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            {showWelcome && (
              <Alert variant="success" className="mt-3">
                Welcome!
              </Alert>
            )}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default LoginPage;
