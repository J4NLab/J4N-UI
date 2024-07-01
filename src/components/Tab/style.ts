import styled, { css, keyframes } from 'styled-components';
import { colorList } from "../../theme/color";

export const TabContainer = styled.div<{ justifyContent: string }>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  background-color: transparent;
`;

export const TabButton = styled.button<{ active?: boolean; shape?: 'capsule' | 'rectangle' }>`
  font-size: 16px;
  background-color: ${colorList.gray[100]};
  color: ${props => props.active ? colorList.primary[300] : colorList.gray[600]};
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
      borderBottom = props.active ? `3px solid ${colorList.primary[300]}` : `2px solid ${colorList.gray[600]}`;
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
    color: ${colorList.primary[300]};
    border-color: ${props => props.shape !== 'capsule' ? colorList.primary[300] : 'none'};
    border-radius: ${props => props.shape === 'capsule' ? '50px' : '0'};
  }

  &:disabled {
    color: ${colorList.gray[600]};
    border-color: ${colorList.gray[600]};
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
  background-color: ${colorList.gray[100]};
  border-radius: 0 5px 5px 5px;
  animation: ${props => props.isActive ? css`${slideFadeInOut} 0.5s ease-in-out` : 'none'};
`;

export const NotificationBadge = styled.span<{ active?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  min-width: 20px;
  max-width: 50px;
  height: 20px;
  background-color: ${props => props.active ? colorList.primary[100] : colorList.gray[300]};
  color: ${colorList.gray[900]};
  border-radius: 50%;
  font-size: 12px;
`;