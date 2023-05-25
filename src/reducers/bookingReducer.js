// Init - Provides an initial list of times upon load on the booking form page
export const initializeTimes = () => {
  return [
    { id: '1', value: '17:00' },
    { id: '2', value: '18:00' },
    { id: '3', value: '19:00' },
    { id: '4', value: '20:00' },
    { id: '5', value: '21:00' },
    { id: '6', value: '22:00' },
    { id: '7', value: '23:00' },
  ];
};

// Reducer - Updates available times based on the reservation date a user selects
export const updateTimes = (state = initializeTimes(), action) => {
  switch (action.type) {
    case 'set_date':
      return state;
    default:
      throw Error('unknown action');
  }
};
