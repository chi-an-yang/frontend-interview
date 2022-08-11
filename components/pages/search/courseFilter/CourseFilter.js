import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Selector from '../../../block/selector';
import { SELECTOR_OPT } from '../../../../assets/constants';

import { CourseFilterContainer, CourseFilterCount } from './CourseFilter.style';

const CourseFilter = ({ count, handleSelectorChange }) => {
  return (
    <CourseFilterContainer>
      <CourseFilterCount>
        <span>{count}</span> 門課程
      </CourseFilterCount>
      <Selector
        placeholder="排序"
        handleChange={handleSelectorChange}
        selectorOpt={SELECTOR_OPT}
        style={{ width: 165 }}
      />
    </CourseFilterContainer>
  );
};

export default CourseFilter;
