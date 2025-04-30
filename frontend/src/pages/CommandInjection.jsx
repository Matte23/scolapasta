import React, { useState } from "react";
import { Card, Container, Form, Button, Alert } from "react-bootstrap";

export default function CommandInjection() {
  const [ipAddress, setIpAddress] = useState("");
  const [output, setOutput] = useState("");
  const [command, setCommand] = useState("");
  const [showCommand, setShowCommand] = useState(false);
  const [status, setStatus] = useState(null);

  const handlePing = async () => {
    const res = await fetch("http://localhost:5000/api/ping", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip: ipAddress }),
    });
    const data = await res.json();
    setStatus(res.status);
    setOutput(data.output);
    setCommand(data.command);
  };

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="text-center">Ping Test</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formIpAddress">
              <Form.Control
                type="text"
                placeholder="Enter IP Address"
                onChange={(e) => setIpAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formShowCommand">
              <Form.Check
                type="checkbox"
                label="Show command"
                checked={showCommand}
                onChange={(e) => setShowCommand(e.target.checked)}
              />
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" onClick={handlePing}>
                Ping
              </Button>
            </div>
          </Form>
          {output && (
            <Alert
              className={`mt-3 ${
                status === 200 ? "alert-success" : "alert-warning"
              }`}
            >
              <strong>Output:</strong> {output}
            </Alert>
          )}
          {showCommand && command && (
            <Alert className="mt-3 info">
              <strong>Command:</strong> {command}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}