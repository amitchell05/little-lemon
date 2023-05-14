import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

let mockAvailableTimes = [];

describe('Booking Form', () => {
  beforeEach(() => {
    // Arrange
    const mockFetchApi = jest.fn().mockReturnValue([
      { id: '1', time: '17:00' },
      { id: '2', time: '18:00' },
      { id: '3', time: '19:00' },
      { id: '4', time: '20:00' },
      { id: '5', time: '21:00' },
      { id: '6', time: '22:00' },
      { id: '7', time: '23:00' },
    ]);
    mockAvailableTimes = mockFetchApi();
  });

  test('renders the BookingForm heading', () => {
    // Act
    render(<BookingForm availableTimes={mockAvailableTimes} />);
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

  test('returns new available times based on reservation date', () => {
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
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_NEW_DATE',
      date: '2023-05-24',
    });
  });
});
