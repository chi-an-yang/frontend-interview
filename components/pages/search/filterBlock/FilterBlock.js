import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '../../../block/checkbox';
import { COURSE_TYPE, COURSE_HOUR } from '../../../../assets/constants';

import {
  FilterBlockContainer,
  FilterBlockGroup,
  FilterBlockInputGroup,
  FilterBlockTitle,
  FilterBlockCleanAll,
  FilterBlockFilterTitle,
} from './FilterBlock.style';

const FilterBlock = ({
  fullSearchAcademy,
  initialState,
  courses,
  setCourses,
  checkedAcademy,
  setCheckedAcademy,
  checkedCourseHour,
  setCheckedCourseHour,
}) => {
  const [courseType, setCourseType] = useState([...COURSE_TYPE]);
  const [checkedCourseType, setCheckedCourseType] = useState([]);
  const [courseTypeToggle, setCourseTypeToggle] = useState(true);

  const [academy, setAcademy] = useState([]);
  const [academyToggle, setAcademyToggle] = useState(true);

  const [courseHour, setCourseHour] = useState([...COURSE_HOUR]);
  const [courseHourToggle, setCourseHourToggle] = useState(true);

  const handleReset = () => {
    setCourseType([...COURSE_TYPE]);
    const initFullSearchAcademy = fullSearchAcademy.map((academy) => {
      return { ...academy, isChecked: false };
    });
    setAcademy([...initFullSearchAcademy]);
    setCourseHour([...COURSE_HOUR]);
    setCourses(initialState);
  };

  const handleCourseTypeToggle = () => {
    setCourseTypeToggle(!courseTypeToggle);
  };
  const handleAcademyToggle = () => {
    setAcademyToggle(!academyToggle);
  };

  const handleCourseHourToggle = () => {
    setCourseHourToggle(!courseHourToggle);
  };

  const handleCourseTypeChange = (e) => {
    const newCourseType = courseType.map((type) => {
      if (type.key === e.target.id) {
        return { ...type, isChecked: e.target.checked };
      } else {
        return type;
      }
    });
    setCourseType(newCourseType);
    const initFullSearchAcademy = fullSearchAcademy.map((academy) => {
      return { ...academy, isChecked: false };
    });
    setAcademy([...initFullSearchAcademy]);
    setCourseHour([...COURSE_HOUR]);
    if (e.target.checked) {
      setCheckedCourseType([...checkedCourseType, e.target.id]);
    } else {
      setCheckedCourseType(
        checkedCourseType.filter((id) => id !== e.target.id)
      );
    }
  };
  const handleAcademyChange = (e) => {
    const newAcademy = academy.map((type) => {
      if (type.firstCategoryUid === parseInt(e.target.id)) {
        return { ...type, isChecked: e.target.checked };
      } else {
        return type;
      }
    });
    setAcademy(newAcademy);
    if (e.target.checked) {
      setCheckedAcademy([...checkedAcademy, e.target.id]);
    } else {
      setCheckedAcademy(checkedAcademy.filter((id) => id !== e.target.id));
    }
  };
  const handleCourseHourChange = (e) => {
    const target = e.target.id;
    const newCourseHour = courseHour.map((hour, idx) => {
      if (idx === parseInt(target.split('_')[1])) {
        return { ...hour, isChecked: e.target.checked };
      } else {
        return hour;
      }
    });
    setCourseHour(newCourseHour);
    if (e.target.checked) {
      setCheckedCourseHour([...checkedCourseHour, target.split('_')[1]]);
    } else {
      setCheckedCourseHour(
        checkedCourseHour.filter((id) => id !== target.split('_')[1])
      );
    }
  };

  useEffect(() => {
    const initFullSearchAcademy = fullSearchAcademy.map((academy) => {
      return { ...academy, isChecked: false };
    });
    setAcademy(initFullSearchAcademy);
  }, [fullSearchAcademy]);

  useEffect(() => {
    if (checkedCourseType.length === 0) {
      setCourses(initialState);
    } else {
      const newCourses = initialState.filter((state) =>
        checkedCourseType.some((check) => check === state.courseType)
      );
      setCourses(newCourses);
    }
  }, [checkedCourseType]);

  return (
    <FilterBlockContainer>
      <FilterBlockGroup className="p-4">
        <FilterBlockTitle>
          課程篩選條件
          <FilterBlockCleanAll onClick={handleReset}>
            清除全部
          </FilterBlockCleanAll>
        </FilterBlockTitle>
        <FilterBlockFilterTitle>
          課程類型
          <FontAwesomeIcon
            icon={faAngleDown}
            onClick={handleCourseTypeToggle}
            className={courseTypeToggle ? '' : 'fa-flip-vertical'}
          />
        </FilterBlockFilterTitle>
        {courseTypeToggle && (
          <FilterBlockInputGroup>
            {courseType.map((type) => (
              <Checkbox
                key={type.key}
                id={type.key}
                displayText={type.text}
                handleChange={handleCourseTypeChange}
                checked={type.isChecked}
              />
            ))}
          </FilterBlockInputGroup>
        )}
        <FilterBlockFilterTitle>
          學院
          <FontAwesomeIcon
            icon={faAngleDown}
            onClick={handleAcademyToggle}
            className={academyToggle ? '' : 'fa-flip-vertical'}
          />
        </FilterBlockFilterTitle>
        {academyToggle && (
          <FilterBlockInputGroup>
            {academy.map((a) => (
              <Checkbox
                key={a.firstCategoryUid}
                id={a.firstCategoryUid}
                displayText={a.firstCategoryName}
                handleChange={handleAcademyChange}
                checked={a.isChecked}
              />
            ))}
          </FilterBlockInputGroup>
        )}
      </FilterBlockGroup>

      <FilterBlockGroup className="p-4">
        <FilterBlockFilterTitle>
          培訓時長
          <FontAwesomeIcon
            icon={faAngleDown}
            onClick={handleCourseHourToggle}
            className={academyToggle ? '' : 'fa-flip-vertical'}
          />
        </FilterBlockFilterTitle>
        {courseHourToggle && (
          <FilterBlockInputGroup>
            {courseHour.map((hour, idx) => (
              <Checkbox
                key={idx}
                id={`hour_${idx}`}
                displayText={hour.text}
                handleChange={handleCourseHourChange}
                checked={hour.isChecked}
              />
            ))}
          </FilterBlockInputGroup>
        )}
      </FilterBlockGroup>
    </FilterBlockContainer>
  );
};

export default FilterBlock;
