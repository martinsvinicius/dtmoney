import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: var(--blue-light);
    height: 3rem;

    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 600;
    color: #FFF;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
