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
    const timeOptions = screen.getAllByTestId('time');

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
    const timeOptions = screen.getAllByTestId('time');

    // Assert
    // TODO: Update assertion to be more specific to what is expected
    expect(timeOptions.length).toBeGreaterThan(0);
  });

  test('validates the location dropdown correctly if the field is empty or filled', async () => {
    render(bookingForm);

    const dropdownContainer = screen.getByTestId('location-dropdown-container');
    const hiddenDropdown = screen.getByLabelText('Restaurant Location');

    // Invalid path
    fireEvent.blur(hiddenDropdown);

    let locationErrors;

    await waitFor(() => {
      locationErrors = screen.getByTestId('errors-location');
      expect(locationErrors.textContent).toContain('Required');
    });

    // Valid path
    fireEvent.click(dropdownContainer);
    const styledLocationOptions = screen.getAllByTestId(
      'styled-location-option'
    );

    await act(async () => {
      fireEvent.click(styledLocationOptions[0]);
    });

    await waitFor(() => {
      locationErrors = screen.queryByTestId('errors-location');
      expect(locationErrors).toBeNull();
    });

    const selectedOption = screen.queryByTestId('current-location-option');

    expect(selectedOption.textContent).toEqual(
      '100 Lemon Drive, Chicago, IL 12345'
    );
  });

  test('validates the date picker correctly if the field is empty or filled', async () => {
    render(bookingForm);

    const datePicker = screen.getByLabelText('Date');

    // Invalid path
    fireEvent.blur(datePicker);

    let dateErrors;

    await waitFor(() => {
      dateErrors = screen.getByTestId('errors-resDate');
      expect(dateErrors.textContent).toContain('Required');
    });

    // Valid path
    await act(async () => {
      fireEvent.change(datePicker, { target: { value: '2023-06-23' } });
    });

    await waitFor(() => {
      dateErrors = screen.queryByTestId('errors-resDate');
    });

    expect(datePicker).toHaveValue('2023-06-23');
    expect(dateErrors).toBeNull();
  });

  test('validates the time dropdown correctly if the field is empty or filled', async () => {
    render(bookingForm);

    const dropdownContainer = screen.getByTestId('resTime-dropdown-container');
    const hiddenDropdown = screen.getByLabelText('Time');

    // Invalid path
    fireEvent.blur(hiddenDropdown);

    let timeErrors;

    await waitFor(() => {
      timeErrors = screen.getByTestId('errors-resTime');
      expect(timeErrors.textContent).toContain('Required');
    });

    // Valid path
    fireEvent.click(dropdownContainer);
    const styledTimeOptions = screen.getAllByTestId('styled-resTime-option');

    await act(async () => {
      fireEvent.click(styledTimeOptions[0]);
    });

    await waitFor(() => {
      timeErrors = screen.queryByTestId('errors-time');
      expect(timeErrors).toBeNull();
    });

    const selectedOption = screen.queryByTestId('current-resTime-option');

    expect(selectedOption.textContent).toEqual('17:00');
  });

  test('validates the occasion dropdown correctly if the field is empty or filled', async () => {
    render(bookingForm);

    const dropdownContainer = screen.getByTestId('occasion-dropdown-container');
    const hiddenDropdown = screen.getByLabelText('Occasion');

    // Invalid path
    fireEvent.blur(hiddenDropdown);

    let occasionErrors;

    await waitFor(() => {
      occasionErrors = screen.getByTestId('errors-occasion');
      expect(occasionErrors.textContent).toContain('Required');
    });

    // Valid path
    fireEvent.click(dropdownContainer);
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

  test('validates the guests field correctly if it is invalid or valid', async () => {
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

  test('handles the form data correctly on submit', async () => {
    render(bookingForm);

    const locationDropdownContainer = screen.getByTestId(
      'location-dropdown-container'
    );
    const datePicker = screen.getByLabelText('Date');
    const timeDropdownContainer = screen.getByTestId(
      'resTime-dropdown-container'
    );
    const guestsInput = screen.getByLabelText('Number of Guests');
    const occasionDropdownContainer = screen.getByTestId(
      'occasion-dropdown-container'
    );
    const standardRadio = screen.getByLabelText('Standard');

    // Mock window.scrollTo
    const scrollToMock = jest.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollToMock });

    await act(async () => {
      fireEvent.click(locationDropdownContainer);
      const styledLocationOptions = screen.getAllByTestId(
        'styled-location-option'
      );
      fireEvent.click(styledLocationOptions[0]);

      fireEvent.change(datePicker, { target: { value: '2023-06-23' } });

      fireEvent.click(timeDropdownContainer);
      const styledTimeOptions = screen.getAllByTestId('styled-resTime-option');
      fireEvent.click(styledTimeOptions[0]);

      fireEvent.change(guestsInput, { target: { value: 7 } });
      fireEvent.blur(guestsInput);

      fireEvent.click(occasionDropdownContainer);
      const styledOccasionOptions = screen.getAllByTestId(
        'styled-occasion-option'
      );
      fireEvent.click(styledOccasionOptions[0]);

      fireEvent.click(standardRadio);
      fireEvent.blur(standardRadio);
    });

    const submitButton = screen.getByText('Make Your Reservation');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert
    expect(bookingForm.props.navigate).toHaveBeenCalledWith('/contact-info');
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });
});
