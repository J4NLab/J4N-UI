import styled from 'styled-components';

interface StyledButtonProps {
    current?: boolean;
   }

export const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${({ current }) => (current ? '#0056b3' : '#007bff')};
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
