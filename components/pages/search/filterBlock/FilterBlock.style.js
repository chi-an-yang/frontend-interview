import styled from 'styled-components';
import {
  sty_ColorWhite,
  sty_ColorDarkGrey,
  sty_ColorBlack08,
  sty_ColorBlack004,
  sty_ColorBlueSecondary,
  sty_FontSize20,
  sty_FontSize16,
} from '../../../../assets/style';

export const FilterBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterBlockGroup = styled.div`
  background-color: ${sty_ColorWhite};
  box-shadow: 0px 1px 5px ${sty_ColorBlack004};
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const FilterBlockInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const FilterBlockTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: ${sty_ColorDarkGrey};
  font-size: ${sty_FontSize20};
  font-weight: 600;
`;

export const FilterBlockCleanAll = styled.div`
  color: ${sty_ColorBlueSecondary};
  font-size: ${sty_FontSize16};
  font-weight: 600;
  cursor: pointer;
`;

export const FilterBlockFilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  color: ${sty_ColorBlack08};
  font-size: ${sty_FontSize16};
  font-weight: 600;
  & svg {
    cursor: pointer;
  }
`;
