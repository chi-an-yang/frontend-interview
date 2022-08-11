import styled from 'styled-components';
import {
  sty_ColorBlack08,
  sty_FontSize14,
  sty_ColorLightGrey,
  sty_ColorWhite,
  sty_ColorBlueTertiary,
} from '../../../assets/style';

export const CheckboxLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${sty_ColorBlack08};
  font-size: ${sty_FontSize14};
  cursor: pointer;
  position: relative;
  height: 38px;
  padding-left: 24px;
  user-select: none;
  &:hover input ~ span {
    background-color: #ccc;
  }
  & input:checked ~ span {
    background-color: ${sty_ColorBlueTertiary};
  }
  & input:checked ~ span:after {
    display: block;
  }

  & span::after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid ${sty_ColorWhite};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const CheckboxInput = styled.input`
  visibility: hidden;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
`;

export const CheckboxDisplay = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
  background-color: #eee;
  border-radius: 2px;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;
