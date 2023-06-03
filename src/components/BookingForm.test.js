/* eslint-disable testing-library/no-unnecessary-act */

// Components
import BookingForm from './BookingForm';

// React Tools
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Booking Form', () => {
  // Arrange
  const bookingForm = <BookingForm navigate={jest.fn()} />;

  test('renders the BookingForm heading', () => {
    // Act
    render(bookingForm);
    const headingElement = screen.getByText('Reservation Form');

    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  test('initializes available times on init', () => {
    // Act
    render(bookingForm);
    const timeOptions = screen.getAllByTestId('styled-time');

    // Assert
    expect(timeOptions.length).toBeGreaterThan(0);
  });

  // TODO: refactor booking form to not require async or act
  test('updateTimes returns the same value provided in the state', async () => {
    // Act
    render(bookingForm);
    await act(async () => {
      const dateInput = screen.getByTestId('res-date');
      fireEvent.change(dateInput, { target: { value: '2023-05-24' } });
    });
    const timeOptions = screen.getAllByTestId('styled-time');

    // Assert
    // TODO: Update assertion to be more specific to what is expected
    expect(timeOptions.length).toBeGreaterThan(0);
  });

  test('validates the occasion dropdown correctly if the field is empty or filled', async () => {
    render(bookingForm);

    const styledOccasionDropdown = screen.getByTestId(
      'styled-occasion-dropdown'
    );

    let occasionErrors;

    // Valid path
    fireEvent.click(styledOccasionDropdown);
    const styledOccasionOptions = screen.getAllByTestId(
      'styled-occasion-option'
    );

    await act(async () => {
      fireEvent.click(styledOccasionOptions[0]);
    });

    await waitFor(() => {
      occasionErrors = screen.queryByTestId('errors-occasion');
      expect(occasionErrors).toBeNull();
    });

    const selectedOption = screen.queryByTestId('current-occasion-option');

    expect(selectedOption.textContent).toEqual('birthday');
  });

  test('validates the seating field correctly if it is empty or filled', async () => {
    render(bookingForm);

    const standardRadio = screen.getByLabelText('Standard');
    const outsideRadio = screen.getByLabelText('Outside');

    // Invalid path
    fireEvent.blur(standardRadio);

    let seatingErrors;

    await waitFor(() => {
      seatingErrors = screen.getByTestId('errors-seating');
      expect(seatingErrors).toHaveTextContent('Required');
    });

    // Valid path
    fireEvent.click(outsideRadio);
    fireEvent.blur(outsideRadio);

    await waitFor(() => {
      seatingErrors = screen.queryByTestId('errors-seating');
      expect(seatingErrors).toBeNull();
    });

    expect(standardRadio).not.toBeChecked();
    expect(outsideRadio).toBeChecked();
  });

  test('validates the fields correctly if they are invalid or valid', async () => {
    // Act
    render(bookingForm);

    const guestsInput = screen.getByLabelText('Number of Guests');

    // Assert

    // Invalid path
    await act(async () => {
      fireEvent.change(guestsInput, { target: { value: 0 } });
      fireEvent.blur(guestsInput);
    });

    let guestsErrors = screen.getByTestId('errors-guests');

    expect(guestsInput).toHaveValue(0);
    expect(guestsErrors).toHaveTextContent('Must reserve for 1 to 10 guests');

    // Valid path
    await act(async () => {
      fireEvent.change(guestsInput, { target: { value: 7 } });
      fireEvent.blur(guestsInput);
    });

    guestsErrors = screen.queryByTestId('errors-guests');

    expect(guestsInput).toHaveValue(7);
    expect(guestsErrors).toBeNull();
  });
});
