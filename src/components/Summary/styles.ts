import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); //3 colunas de tamanhos iguais
  gap: 2rem;
  margin-top: -7rem;

  div { 
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header { 
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong { 
      display: block; //strong vem por padrão com display inline, e no display inline o margin-top nao funciona
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`;