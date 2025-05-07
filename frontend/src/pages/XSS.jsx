import React, { useState } from "react";
import { Card, Container, Form, Button, Alert, ListGroup } from "react-bootstrap";

export default function XSS() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="text-center">Posts</Card.Title>

          {/* List of Posts */}
          <h5>Posts</h5>
          <ListGroup className="mb-3">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <ListGroup.Item key={index}>
                  {/* Rendering posts directly (stored XSS vulnerability) */}
                  <span dangerouslySetInnerHTML={{ __html: post }} />
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No posts available</ListGroup.Item>
            )}
          </ListGroup>

          {/* Add New Post */}
          <Form>
            <Form.Group className="mb-3" controlId="formNewPost">
              <Form.Control
                type="text"
                placeholder="Enter new post"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" onClick={handleAddPost}>
                Add Post
              </Button>
            </div>
          </Form>

          {/* Search Functionality */}
          <h5 className="mt-4">Search</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formSearchQuery">
              <Form.Control
                type="text"
                placeholder="Enter search query"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}