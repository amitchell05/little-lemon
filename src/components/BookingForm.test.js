/* eslint-disable testing-library/no-unnecessary-act */

// Components
import BookingForm from './BookingForm';

// React Tools
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Booking Form', () => {
  test('renders the BookingForm heading', () => {
    // Act
    render(<BookingForm />);
    const headingElement = screen.getByText('Reservation Form');

    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  test('initializes available times on init', () => {
    // Arrange
    const bookingForm = <BookingForm />;

    // Act
    render(bookingForm);
    const timeOptions = screen.getAllByTestId('time-option');

    // Assert
    expect(timeOptions.length).toEqual(7);
  });

  // TODO: refactor booking form to not require async or act
  test('updateTimes returns the same value provided in the state', async () => {
    // Arrange
    const bookingForm = <BookingForm />;

    // Act
    render(bookingForm);
    await act(async () => {
      const dateInput = screen.getByTestId('res-date');
      // TODO: add validation for date in dispatch (i.e. updateTimes)
      fireEvent.change(dateInput, { target: { value: '2023-05-24' } });
    });
    const timeOptions = screen.getAllByTestId('time-option');

    // Assert
    // TODO: Update assertion to be more specific to what is expected
    expect(timeOptions.length).toBeGreaterThan(0);
  });
});
