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

export const CourseFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  padding: 0 30px;
  border-radius: 8px;
  background-color: ${sty_ColorWhite};
  margin-bottom: 30px;
`;

export const CourseFilterCount = styled.div`
  color: ${sty_ColorBlack08};
  & span {
    color: ${sty_ColorBlueSecondary};
  }
  font-size: ${sty_FontSize20};
  font-weight: bold;
`;
