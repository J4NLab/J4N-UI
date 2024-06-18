import styled, { css, keyframes } from 'styled-components';

export const TabContainer = styled.div<{ justifyContent: string }>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  background-color: transparent;
`;

export const TabButton = styled.button<{ active?: boolean; shape?: 'capsule' | 'rectangle' }>`
  font-size: 16px;
  background-color: #FFFFFF;
  color: ${props => props.active ? '#019CB0' : '#C8C8C8'};
  border: none;
  cursor: pointer;
  transition: color 0.3s ease, border-color 0.3s ease, border-radius 0.3s ease, margin 0.3s ease, transform 0.3s ease;
  margin-right: ${props => props.shape === 'capsule' ? '16px' : '0'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  white-space: nowrap;
  gap: 8px;

  ${props => {
    let borderBottom = 'none';
    if (props.shape === 'rectangle') {
      borderBottom = props.active ? '3px solid #019CB0' : '2px solid #C8C8C8';
    }
    return css`
      border-bottom: ${borderBottom};
    `;
  }}

  ${props => props.shape === 'capsule' && css`
    width: auto;
    height: 56px;
    border-radius: 50px;
  `}

  ${props => props.shape === 'rectangle' && css`
    width: auto;
    height: 56px;
  `}

  &:hover {
    color: #019CB0;
    border-color: ${props => props.shape !== 'capsule' ? '#019CB0' : 'none'};
    border-radius: ${props => props.shape === 'capsule' ? '50px' : '0'};
  }

  &:disabled {
    color: #C8C8C8;
    border-color: #C8C8C8;
    cursor: not-allowed;
  }
`;

const slideFadeInOut = keyframes`
  0% {
    transform: translateX(-10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const TabContent = styled.div<{ isActive: boolean }>`
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 0 5px 5px 5px;
  animation: ${props => props.isActive ? css`${slideFadeInOut} 0.5s ease-in-out` : 'none'};
`;

export const NotificationBadge = styled.span<{ active?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${props => props.active ? '#EAFCFF' : '#C8C8C8'};
  color: #252E3B;
  border-radius: 50%;
  font-size: 12px;
`;