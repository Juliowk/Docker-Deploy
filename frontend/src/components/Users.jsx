import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Users() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL || "http://localhost:4000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição: " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row className="g-3 w-100">
        {data.all.map((item) => (
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
