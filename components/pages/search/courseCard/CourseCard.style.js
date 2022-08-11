import styled from 'styled-components';
import {
  sty_ColorWhite,
  sty_ColorDarkGrey,
  sty_ColorWhite08,
  sty_ColorBlack08,
  sty_ColorBlack06,
  sty_ColorBlack01,
  sty_ColorBlueSecondary,
  sty_ColorGreenPrimary,
  sty_ColorGreenSecondary,
  sty_ColorGreenTertiary,
  sty_ColorOrange,
  sty_ColorBluePrimary,
  sty_FontSize20,
  sty_FontSize18,
  sty_FontSize16,
  sty_FontSize12,
} from '../../../../assets/style';

export const CourseCardContainer = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${sty_ColorWhite};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const CourseCardHeroContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
  max-width: 316px;
  width: 100%;
  height: 190px;
`;

export const CourseCardIsCollection = styled.div`
  z-index: 10;
  top: 10px;
  right: 10px;
  position: absolute;
  cursor: pointer;
  & svg {
    color: rgba(0, 0, 0, 0.1);
  }
  & svg path {
    stroke: ${sty_ColorWhite08};
    stroke-width: 1px;
    stroke-linejoin: round;
  }
`;

export const CourseCardIsEnsure = styled.div`
  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;
  width: 78px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0px 8px 0px;
  color: ${sty_ColorWhite};
  background: transparent
    linear-gradient(
      113deg,
      ${sty_ColorGreenSecondary} 0%,
      ${sty_ColorGreenPrimary} 100%
    )
    0% 0% no-repeat padding-box;
`;

export const CourseCardContent = styled.div`
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

export const CourseCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 322px;
`;

export const CourseCardCourseTitle = styled.div`
  height: auto;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${sty_FontSize16};
  width: 100%;
  color: ${sty_ColorBlack08};
  font-weight: 600;
`;

export const CourseCardCourseGroup = styled.div`
  display: flex;
`;

// online	線上課程
// offline	真人直播
// program	增能學程
// goodjob	就業養成
export const CourseCardCourseType = styled.span`
  display: flex;
  flex-direction: column;
  font-size: ${sty_FontSize12};
  font-weight: 600;
  &.online {
    color: ${sty_ColorBlueSecondary};
  }
  &.offline {
    color: ${sty_ColorGreenTertiary};
  }
  &.program {
    color: ${sty_ColorBluePrimary};
  }
  &.goodjob {
    color: ${sty_ColorOrange};
  }
`;

export const CourseCardCourseStatus = styled.span`
  font-size: ${sty_FontSize12};
  color: ${sty_ColorBlack06};
`;

export const CourseCardPrice = styled.div`
  font-size: ${sty_FontSize18};
  color: ${sty_ColorBlueSecondary};
  text-align: right;
  font-weight: bold;
`;
