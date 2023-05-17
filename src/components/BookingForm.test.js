import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';
// import { act } from 'react-dom/test-utils';

const mockAvailableTimes = [
  { id: '1', time: '17:00' },
  { id: '2', time: '18:00' },
  { id: '3', time: '19:00' },
];

describe('Booking Form', () => {
  test('renders the BookingForm heading', () => {
    // Act
    render(<BookingForm availableTimes={[]} />);
    const headingElement = screen.getByText('Reservation Form');

    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  test('initializes available times on init', () => {
    // Arrange
    const bookingForm = <BookingForm availableTimes={mockAvailableTimes} />;

    // Act
    render(bookingForm);

    // Assert
    expect(bookingForm.props.availableTimes.length).toBeGreaterThan(0);
  });

  test('returns new avaialble times based on the newly selected reservation date', async () => {
    // Arrange
    const mockDispatch = jest.fn().mockReturnValue([
      { id: '1', time: '17:00' },
      { id: '2', time: '17:30' },
      { id: '3', time: '18:00' },
      { id: '4', time: '18:30' },
      { id: '5', time: '20:00' },
      { id: '6', time: '20:30' },
      { id: '7', time: '21:00' },
      { id: '8', time: '21:30' },
    ]);
    const bookingForm = (
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
      />
    );

    // Act
    render(bookingForm);
    const dateInput = screen.getByTestId('res-date');
    fireEvent.change(dateInput, { target: { value: '2023-05-24' } });

    // Assert
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_NEW_DATE',
        resDate: '2023-05-24',
      });
    });
  });
});
