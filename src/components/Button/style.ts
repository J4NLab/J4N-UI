import { styled } from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.color.primary};

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }

  &:active {
    color: ${({ theme }) => theme.color.success};
  }

  &:focus {
    color: ${({ theme }) => theme.color.warning};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.danger};
  }
`;
