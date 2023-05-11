import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { fetchAPI, submitForm } from '../api/api';

// let availableTimes = [];
// let updateTimes;

describe('Booking Form', () => {
  // beforeEach(() => {
  //   availableTimes = fetchAPI();
  //   updateTimes = (state, action) => {
  //     return state;
  //   };
  //   submitForm = ()
  // });
  // test('renders the BookingForm heading', () => {
  //   render(<BookingForm availableTimes={availableTimes} />);
  //   const headingElement = screen.getByText('Reservation Form');
  //   expect(headingElement).toBeInTheDocument();
  // });
  // test('initializes available times on init', () => {
  //   const bookingForm = (
  //     <BookingForm
  //       availableTimes={availableTimes}
  //       dispatch={updateTimes}
  //       submitForm={submitForm}
  //     />
  //   );
  //   render(bookingForm);
  //   expect(bookingForm.props.availableTimes).toEqual(availableTimes);
  // });
  // // TODO: update when functionality changes in later less -_-
  // test('returns same available times regardless of date selection', () => {
  //   const bookingForm = (
  //     <BookingForm availableTimes={availableTimes} dispatch={updateTimes} />
  //   );
  //   render(bookingForm);
  //   const dateInput = screen.getByTestId('res-date');
  //   fireEvent.change(dateInput, { target: { value: '2023-05-24' } });
  //   expect(bookingForm.props.availableTimes).toEqual(availableTimes);
  // });
});
