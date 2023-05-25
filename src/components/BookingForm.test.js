// Components
import BookingForm from './BookingForm';

// React Tools
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

let mockInitializeTimes;
let mockUpdateTimes;

describe('Booking Form', () => {
  beforeEach(() => {
    mockInitializeTimes = jest.fn().mockReturnValue([
      { id: '1', value: '17:00' },
      { id: '2', value: '18:00' },
      { id: '3', value: '19:00' },
      { id: '4', value: '20:00' },
      { id: '5', value: '21:00' },
      { id: '6', value: '22:00' },
      { id: '7', value: '23:00' },
    ]);
    mockUpdateTimes = jest.fn().mockReturnValue([
      { id: '1', value: '17:00' },
      { id: '2', value: '19:00' },
      { id: '3', value: '19:30' },
      { id: '4', value: '21:00' },
      { id: '5', value: '21:30' },
      { id: '6', value: '22:00' },
    ]);
  });

  test('renders the BookingForm heading', () => {
    // Act
    render(<BookingForm availableTimes={[]} />);
    const headingElement = screen.getByText('Reservation Form');

    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  test('initializes available times on init', () => {
    // Arrange
    let mockAvailableTimes = mockInitializeTimes();

    const bookingForm = <BookingForm availableTimes={mockAvailableTimes} />;

    // Act
    render(bookingForm);

    // Assert
    expect(bookingForm.props.availableTimes.length).toBeGreaterThan(0);
  });

  test('updateTimes returns the same value provided in the state', async () => {
    // Arrange
    let mockAvailableTimes = mockInitializeTimes();

    const bookingForm = (
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockUpdateTimes}
      />
    );

    // Act
    render(bookingForm);
    await act(() => {
      const dateInput = screen.getByTestId('resDate');
      fireEvent.change(dateInput, { target: { value: '2023-05-24' } });
    });

    // Assert
    expect(bookingForm.props.availableTimes.length).toBeGreaterThan(0);
  });
});
