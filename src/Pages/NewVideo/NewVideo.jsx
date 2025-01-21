import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
} from "./NewVideo.styled";

const NewVideo = () => {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    img: "",
    video: "",
    descricao: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Função para tratar as mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função de submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Limpa o erro
    try {
      await addVideo(formData);  // Chama o contexto para adicionar o vídeo
      setSuccess(true);
      setFormData({
        titulo: "",
        categoria: "",
        img: "",
        video: "",
        descricao: "",
      }); // Limpa o formulário
    } catch (err) {
      setError("Erro ao adicionar vídeo. Tente novamente.");
      console.error("Erro ao adicionar vídeo", err);
    } finally {
      setLoading(false);
    }
  };

  // Função para limpar o formulário
  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descricao: "",
    });
    setSuccess(false);
    setError(null);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Adicionar Novo Vídeo</FormTitle>
      {success && <p style={{ color: 'green' }}>Vídeo adicionado com sucesso!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Input
        type="text"
        name="titulo"
        placeholder="Título"
        value={formData.titulo}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="categoria"
        placeholder="Categoria"
        value={formData.categoria}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="img"
        placeholder="URL da Imagem"
        value={formData.img}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="video"
        placeholder="URL do Vídeo"
        value={formData.video}
        onChange={handleChange}
        required
      />
      <Textarea
        name="descricao"
        placeholder="Descrição"
        value={formData.descricao}
        onChange={handleChange}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </Button>
      <Button type="button" onClick={handleReset}>
        Limpar
      </Button>
    </FormContainer>
  );
};

export default NewVideo;
