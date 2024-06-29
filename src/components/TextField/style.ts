import styled from 'styled-components';
import { colorList } from "../../theme/color";

export const TextFieldWrapper = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${props => props.width ? props.width : '343px'};
  position: relative;
`;

export const TextFieldLabel = styled.label<{ isFocused: boolean; error: boolean; disabled?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.disabled ? colorList.gray[900] : (props.error ? colorList.error[300] : colorList.gray[900])};
  transition: color 0.3s ease;
`;

export const StyledTextField = styled.input<{ error?: boolean; disabled?: boolean }>`
  width: 100%;
  height: 36px;
  padding: 10px 12px 10px 12px;
  font-size: 16px;
  border: 1px solid ${props => props.disabled ? colorList.gray[600] : props.error ? colorList.error[300] : colorList.gray[400]};
  border-radius: 4px;
  background-color: ${props => props.disabled ? colorList.gray[300] : colorList.gray[100]};
  color: ${props => props.disabled ? colorList.gray[700] : colorList.gray[900]};
  transition: border-color 0.3s ease;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};

  &:focus {
    outline: none;
    border-color: ${props => props.disabled ? colorList.gray[600] : props.error ? colorList.error[300] : colorList.primary[300]};
  }
  &::placeholder {
    color: ${colorList.gray[600]};
  }
`;

export const TextFieldErrorWrapper = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 26px;
  opacity: ${props => props.error ? 1 : 0};
  transition: opacity 0.3s ease;
`;

export const TextFieldError = styled.div<{ disabled?: boolean }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  color:  ${props => props.disabled ? colorList.gray[800] : colorList.error[300]}; ;
`;

export const TextFieldPlaceholder = styled.div<{ showPlaceholder: boolean }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  color: ${colorList.gray[800]};
  position: absolute;
  bottom: 0;
  pointer-events: none;
  opacity: ${props => props.showPlaceholder ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const BaseTextFieldIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-left: 8px;
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  top: 50%;
  border-radius: 50%;
  transition: transform 0.1s ease, background-color 0.1s ease;
`;

export const TextFieldIcon = styled(BaseTextFieldIcon)`
  color: ${colorList.primary[200]};
`;

export const ErrorIcon = styled(BaseTextFieldIcon)`
  color: ${colorList.error[300]};
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;

export const TextFieldInputWrapper = styled.div`
  position: relative;
`;
