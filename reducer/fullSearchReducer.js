import { FETCH_DATA_SUCCESS } from '../assets/constants';
import { HYDRATE } from 'next-redux-wrapper';

const initState = {
  fullSearch: {
    academy: [],
    searchRlt: [],
    count: 0,
  },
  errorMessage: '',
};

const fullSearchReducer = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fullSearch: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export { fullSearchReducer };
