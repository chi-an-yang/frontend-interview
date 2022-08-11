import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {
  CourseCardContainer,
  CourseCardHeroContainer,
  CourseCardIsEnsure,
  CourseCardIsCollection,
  CourseCardHero,
  CourseCardContent,
  CourseCardDetail,
  CourseCardCourseTitle,
  CourseCardCourseGroup,
  CourseCardCourseType,
  CourseCardCourseStatus,
  CourseCardPrice,
} from './CourseCard.style';

const CourseCard = ({
  coverPic,
  isCollection,
  courseName,
  price,
  courseType,
  isEnsure,
  courseHours,
  classStartTime,
}) => {
  // online	線上課程
  // offline	真人直播
  // program	增能學程
  // goodjob	就業養成

  const getCourseTypeDisplayText = (type) => {
    switch (type) {
      case 'online':
        return '線上課程';
      case 'offline':
        return '真人直播';
      case 'program':
        return '增能學程';
      case 'goodjob':
        return '就業養成';
      default:
        throw new Error('type 不存在', type);
    }
  };

  const getCourseHoursDisplayText = (seconds) => {
    const hours = seconds / 3600;
    return `∙ 約 ${hours.toFixed(1)} 小時`;
  };

  const getClassStartTimeDisplayText = (seconds) => {
    const startDay = new Date(1649674800000);
    const date = startDay.getDate();
    const month = startDay.getMonth();
    const year = startDay.getFullYear();
    return ` ${year}/${month}/${date} 開課`;
  };

  return (
    <CourseCardContainer>
      <CourseCardHeroContainer>
        {isEnsure !== undefined && isEnsure == 1 && (
          <CourseCardIsEnsure>即將開課</CourseCardIsEnsure>
        )}
        <Image src={coverPic} layout="fill" />

        {isCollection !== undefined && isCollection == 0 && (
          <CourseCardIsCollection>
            <FontAwesomeIcon icon={faHeart} />
          </CourseCardIsCollection>
        )}
      </CourseCardHeroContainer>
      <CourseCardContent>
        <CourseCardDetail>
          <CourseCardCourseTitle>{courseName}</CourseCardCourseTitle>
          <CourseCardCourseGroup>
            <CourseCardCourseType className={courseType}>
              {getCourseTypeDisplayText(courseType)}
            </CourseCardCourseType>
            <CourseCardCourseStatus>
              {classStartTime === undefined
                ? getCourseHoursDisplayText(courseHours)
                : getClassStartTimeDisplayText(classStartTime)}
            </CourseCardCourseStatus>
          </CourseCardCourseGroup>
        </CourseCardDetail>
        <CourseCardPrice>NT$ {price}</CourseCardPrice>
      </CourseCardContent>
    </CourseCardContainer>
  );
};

export default CourseCard;
