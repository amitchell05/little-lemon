import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

let availableTimes = [];

describe('Booking Form', () => {
  beforeEach(() => {
    availableTimes = [
      { id: '1', time: '17:00' },
      { id: '2', time: '18:00' },
      { id: '3', time: '19:00' },
      { id: '4', time: '20:00' },
      { id: '5', time: '21:00' },
      { id: '6', time: '21:00' },
    ];
  });

  test('renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    const headingElement = screen.getByText('Reservation Form');

    expect(headingElement).toBeInTheDocument();
  });

  test('initializes available times on init', () => {
    const bookingForm = <BookingForm availableTimes={availableTimes} />;

    render(bookingForm);

    expect(bookingForm.props.availableTimes).toEqual(availableTimes);
  });

  // TODO: update when functionality changes in later less -_-
  test('returns same available times regardless of date selection', () => {
    const updateTimes = (state, action) => {
      return state;
    };
    const bookingForm = (
      <BookingForm availableTimes={availableTimes} dispatch={updateTimes} />
    );

    render(bookingForm);
    const dateInput = screen.getByTestId('res-date');
    fireEvent.change(dateInput, { target: { value: '2023-05-24' } });

    expect(bookingForm.props.availableTimes).toEqual(availableTimes);
  });
});
