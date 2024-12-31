import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

const Input = ({ onInputSuccess }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

    if (!backendUrl) {
      console.error("A URL do backend não está configurada.");
      return;
    }

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: inputValue }),
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso!");
        setInputValue(""); // Limpa o campo após o envio bem-sucedido
        onInputSuccess(); // Chama a função passada via props
      } else {
        console.error("Erro ao enviar os dados:", response.statusText);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Digite um nome"
        aria-label="Digite um nome"
        aria-describedby="basic-addon2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
        Enviar
      </Button>
    </InputGroup>
  );
};

export default Input;
