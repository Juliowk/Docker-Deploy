import './App.css';
import Users from './components/Users';
import Input from './components/Input';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
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
  };

  // Carregar os dados ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  // Renderizar as mensagens de erro ou carregamento
  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <>
      <p>by: júlio Elias</p>
      <h2>API funcionando normalmente</h2>
      <Input onInputSuccess={fetchData} />
      {/* Passar os dados para o componente Users */}
      <Users data={data.all} />
    </>
  );
}

export default App;
