// React Tools
import { fetchAPI } from '../api/api';

// Init - Provides an initial list of times upon load on the booking form page
export const initializeTimes = (initialTimes) => {
  initialTimes = fetchAPI(new Date());

  return initialTimes;
};

// Reducer - Updates available times based on the reservation date a user selects
export const updateTimes = (state = initializeTimes(), action) => {
  switch (action.type) {
    case 'set_date':
      state = fetchAPI(new Date(action.resDate));
      return state;
    default:
      throw Error('unknown action');
  }
};
