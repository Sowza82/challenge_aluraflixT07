# Aluraflix

Aluraflix é uma aplicação desenvolvida em React que simula uma plataforma de vídeos, organizada por categorias, com funcionalidades completas de CRUD (Criar, Ler, Atualizar, Deletar) integradas ao json-server para gerenciamento de dados.

---

## 🛠️ Funcionalidades Principais

1. **Página Inicial**
   - Exibe seções de vídeos categorizados: `Frontend`, `Backend`, `Inovação` e `Gestão`.
   - Cards de vídeos com botões para editar e excluir.
   - Banner com destaque para vídeos principais.

2. **Modal de Edição**
   - Permite editar informações dos vídeos (título, categoria, imagem, vídeo e descrição).
   - Inclui botões de `Salvar` e `Limpar`.

3. **Página Novo Vídeo**
   - Formulário para adicionar novos vídeos.
   - Mesma estrutura do modal de edição.

4. **Integração com json-server**
   - Simulação de API para armazenamento e manipulação de dados.

---

## 🚀 Tecnologias Utilizadas

- **React**: Framework para construção da interface.
- **CSS**: Estilização dos componentes.
- **json-server**: Simulação de uma API RESTful.

---

## 📋 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:
- Node.js
- npm ou yarn
- json-server

### Passos

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd aluraflix
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor json-server:
   ```bash
   json-server --watch db.json
   ```

4. Execute a aplicação React:
   ```bash
   npm start
   ```


## 🌐 Integração com API

### Configuração do json-server

1. Instale o json-server globalmente:
   ```bash
   npm install -g json-server
   ```

2. Configure o arquivo `db.json`:
   ```json
   {
     "videos": []
   }
   ```

3. Inicie o servidor:
   ```bash
   json-server --watch db.json
   ```

### Endpoints Disponíveis

- **GET /videos**: Lista todos os vídeos.
- **POST /videos**: Cria um novo vídeo.
- **PUT /videos/:id**: Atualiza um vídeo existente.
- **DELETE /videos/:id**: Remove um vídeo.

---

## 📝 Detalhes das Funcionalidades

### Requisição `GET`
- Leitura de dados para exibição na página inicial.
- Organização por categorias.

### Requisição `POST`
- Formulário da página Novo Vídeo.
- Adiciona novos vídeos ao json-server.

### Requisição `PUT`
- Modal de edição.
- Atualiza informações de vídeos existentes.

### Requisição `DELETE`
- Botão de exclusão nos cards de vídeo.
- Remove vídeos diretamente na interface e no json-server.

---



## 📋 Licença

Este projeto foi desenvolvido para fins educacionais e não possui uma licença específica.
