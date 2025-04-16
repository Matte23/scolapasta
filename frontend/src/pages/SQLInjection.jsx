import React, { useState } from 'react';
import { Card, Container, Form, Button, Alert } from 'react-bootstrap';

export default function SQLInjection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const text = await res.text();
    setMsg(text);
  };

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="text-center">SQL Injection Demo</Card.Title>
          <Card.Text className="text-muted text-center">
            Try: <code>admin' --</code> as username
          </Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </Form>
          {msg && (
            <Alert className="mt-3" variant="info">
              {msg}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}