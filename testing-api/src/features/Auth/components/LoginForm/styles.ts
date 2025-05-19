// Cria o contêiner principal do formulário, com estilo centralizado e sombra

import styled from "styled-components";


const Container = styled.div`
  max-width: 400px;                  /* Largura máxima */
  margin: 100px auto;                /* Centraliza o conteúdo vertical e horizontalmente */
  padding: 2rem;                     /* Espaçamento interno */
  border-radius: 8px;                /* Bordas arredondadas */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra leve */
`;

// Cria o estilo para os campos de input (email e senha)
const Input = styled.input`
  width: 100%;            /* Ocupa toda a largura */
  padding: 0.8rem;        /* Espaço interno */
  margin-bottom: 1rem;    /* Espaço entre os inputs */
  border: 1px solid #ccc; /* Borda cinza clara */
  border-radius: 4px;     /* Bordas arredondadas */
`;

// Cria o estilo da área onde será exibido o resultado da API
const Result = styled.pre`
  background: #eee;         /* Fundo cinza claro */
  padding: 1rem;            /* Espaço interno */
  border-radius: 4px;       /* Bordas arredondadas */
`;
