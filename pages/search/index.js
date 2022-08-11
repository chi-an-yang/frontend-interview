import { Pagination } from 'antd';
import { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { FETCH_DATA } from '../../assets/constants';
import FilterBlock from '../../components/pages/search/filterBlock';
import CourseFilter from '../../components/pages/search/courseFilter';
import CourseCard from '../../components/pages/search/courseCard';
import { COURSE_TYPE } from '../../assets/constants';

const pageSize = 10;

const SearchPage = (props) => {
  const { fullSearch, errorMessage, getData } = props;
  const scrollRef = useRef();
  const [courses, setCourses] = useState([]);
  const [sortByPrice, setSortByPrice] = useState('');
  const [checkedAcademy, setCheckedAcademy] = useState([]);
  const [checkedCourseHour, setCheckedCourseHour] = useState([]);

  const [pagination, setPagination] = useState({
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });

  const scrollTop = () => {
    scrollRef.current.scrollTo({ behavior: 'smooth', top: 0 });
  };

  const handlePaginationChange = (page) => {
    scrollTop();
    setPagination({
      ...pagination,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };

  const handleSelectorChange = (value) => {
    setSortByPrice(value);
  };

  const handleFilterAcademy = useCallback(
    (courses) => {
      if (checkedAcademy.length === 0) return courses;
      return courses.filter((state) =>
        checkedAcademy.some((check) => check === `${state.firstCategoryUid}`)
      );
    },
    [checkedAcademy]
  );

  const handleFilterCourseHour = useCallback(
    (courses) => {
      if (checkedCourseHour.length === 0) return courses;
      return courses.filter((state) =>
        checkedCourseHour.some(
          (check) =>
            COURSE_HOUR[check].min <= state.courseHours &&
            state.courseHours <= COURSE_HOUR[check].max
        )
      );
    },
    [checkedCourseHour]
  );

  const handleSort = useCallback(
    (courses) => {
      return courses.sort((a, b) => {
        if (sortByPrice === 'highToLow') {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      });
    },
    [sortByPrice]
  );

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setPagination({
      ...pagination,
      totalPage: fullSearch.count / pageSize,
      minIndex: 0,
      maxIndex: pageSize,
    });
  }, []);

  useEffect(() => {
    setCourses([...fullSearch.searchRlt]);
  }, [fullSearch.searchRlt]);

  return (
    <div className="container">
      <header className="header">
        搜尋 “<span>人工智慧</span>”的結果
      </header>
      <div className="row">
        <aside className="aside col-3 gx-4">
          <FilterBlock
            fullSearchAcademy={fullSearch.academy}
            initialState={fullSearch.searchRlt}
            courses={courses}
            setCourses={setCourses}
            checkedAcademy={checkedAcademy}
            setCheckedAcademy={setCheckedAcademy}
            checkedCourseHour={checkedCourseHour}
            setCheckedCourseHour={setCheckedCourseHour}
          />
        </aside>
        <article className="article col-9 gx-4">
          <CourseFilter
            count={handleFilterAcademy(handleFilterCourseHour(courses)).length}
            handleSelectorChange={handleSelectorChange}
          />
          <div className="section-container">
            <div className="scroll" ref={scrollRef}>
              <section className="section">
                {handleSort(
                  handleFilterAcademy(handleFilterCourseHour(courses))
                ).map(
                  (result, index) =>
                    index >= pagination.minIndex &&
                    index < pagination.maxIndex && (
                      <CourseCard key={result.courseName} {...result} />
                    )
                )}
              </section>
            </div>
          </div>
          <Pagination
            current={pagination.current}
            defaultPageSize={pageSize}
            total={courses.length}
            onChange={handlePaginationChange}
          />
        </article>
      </div>
    </div>
  );
};

SearchPage.defaultProps = {
  fullSearch: {
    academy: [],
    searchRlt: [],
    count: 0,
  },
  errorMessage: '',
  getData: () => {},
};

const mapStateToProps = (state) => ({
  fullSearch: state.fullSearch,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => {
    dispatch({ type: FETCH_DATA });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
