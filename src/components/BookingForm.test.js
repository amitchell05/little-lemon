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
    const timeOptions = screen.getAllByTestId('time-option');

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
    const timeOptions = screen.getAllByTestId('time-option');

    // Assert
    // TODO: Update assertion to be more specific to what is expected
    expect(timeOptions.length).toBeGreaterThan(0);
  });

  test('validates the input fields correctly if fields are empty or filled', async () => {
    render(bookingForm);

    // const locationDropdown = screen.getByLabelText('Restaurant Location');
    // const dateInput = screen.getByLabelText('Date');
    // const timeDropdown = screen.getByLabelText('Time');
    // const occasionDropdown = screen.getByLabelText('Occasion');
    const standardRadio = screen.getByLabelText('Standard');
    const outsideRadio = screen.getByLabelText('Outside');

    // Invalid path
    // fireEvent.blur(locationDropdown);

    // fireEvent.blur(dateInput);

    // fireEvent.blur(timeDropdown);

    // fireEvent.blur(occasionDropdown);

    fireEvent.blur(standardRadio);

    // let locationErrors;
    // let dateErrors;
    // let timeErrors;
    // let occasionErrors;
    let seatingErrors;

    // await waitFor(() => {
    //   locationErrors = screen.getByTestId('errors-location');
    //   expect(locationErrors).toHaveTextContent('Required');
    // });

    // await waitFor(() => {
    //   dateErrors = screen.getByTestId('errors-date');
    //   expect(dateErrors).toHaveTextContent('Required');
    // });

    // await waitFor(() => {
    //   timeErrors = screen.getByTestId('errors-time');
    //   expect(timeErrors).toHaveTextContent('Required');
    // });

    // await waitFor(() => {
    //   occasionErrors = screen.getByTestId('errors-occasion');
    //   expect(occasionErrors).toHaveTextContent('Required');
    // });

    await waitFor(() => {
      seatingErrors = screen.getByTestId('errors-seating');
      expect(seatingErrors).toHaveTextContent('Required');
    });

    // Valid path

    // Location
    // fireEvent.change(locationDropdown, {
    //   target: { value: '100 Lemon Drive, Chicago, IL 12345' },
    // });

    // Seating
    fireEvent.click(outsideRadio);
    fireEvent.blur(outsideRadio);

    await waitFor(() => {
      seatingErrors = screen.queryByTestId('errors-seating');
      expect(seatingErrors).toBeNull();
    });

    // await waitFor(() => {
    //   locationErrors = screen.queryByTestId('errors-location');
    //   expect(locationErrors).toBeNull();
    // });

    // expect(locationDropdown).toHaveValue('100 Lemon Drive, Chicago, IL 12345');

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
