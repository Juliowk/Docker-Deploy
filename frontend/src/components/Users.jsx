import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Users({ data }) {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row className="g-3 w-100">
        {data.map((item) => (
          <Col key={item._id} xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <Button
              className="w-100"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.name}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Users;
