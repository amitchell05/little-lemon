/* eslint-disable testing-library/no-unnecessary-act */

// Components
import ContactInfoForm from './ContactInfoForm';

// React Tools
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Contact Info Form', () => {
  // Arrange
  const contactInfoForm = <ContactInfoForm navigate={jest.fn()} />;

  test('validates the input fields correctly if fields are empty or filled', async () => {
    // Act
    render(contactInfoForm);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const phoneInput = screen.getByLabelText('Phone Number');

    // Assert

    // Invalid path
    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: '' } });
      fireEvent.blur(firstNameInput);

      fireEvent.change(lastNameInput, { target: { value: '' } });
      fireEvent.blur(lastNameInput);

      fireEvent.change(phoneInput, { target: { value: '' } });
      fireEvent.blur(phoneInput);
    });

    let firstNameErrors = screen.getByTestId('errors-first-name');
    let lastNameErrors = screen.getByTestId('errors-last-name');
    let phoneErrors = screen.getByTestId('errors-phone');

    expect(firstNameInput).toHaveValue('');
    expect(firstNameErrors).toHaveTextContent('Required');

    expect(lastNameInput).toHaveValue('');
    expect(lastNameErrors).toHaveTextContent('Required');

    expect(phoneInput).toHaveValue('');
    expect(phoneErrors).toHaveTextContent('Required');

    // Valid path
    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: 'John' } });
      fireEvent.blur(firstNameInput);

      fireEvent.change(lastNameInput, { target: { value: 'Smith' } });
      fireEvent.blur(lastNameInput);

      fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
      fireEvent.blur(phoneInput);
    });

    firstNameErrors = screen.queryByTestId('errors-first-name');
    lastNameErrors = screen.queryByTestId('errors-last-name');
    phoneErrors = screen.queryByTestId('errors-phone');

    expect(firstNameInput).toHaveValue('John');
    expect(firstNameErrors).toBeNull();

    expect(lastNameInput).toHaveValue('Smith');
    expect(lastNameErrors).toBeNull();

    expect(phoneInput).toHaveValue('123-456-7890');
    expect(phoneErrors).toBeNull();
  });

  test('validates the email and phone fields correctly if they are invalid or valid', async () => {
    // Act
    render(contactInfoForm);

    const emailInput = screen.getByLabelText('Email Address');
    const phoneInput = screen.getByLabelText('Phone Number');

    // Invalid path
    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'abc.com' } });
      fireEvent.blur(emailInput);

      fireEvent.change(phoneInput, { target: { value: '1234567' } });
      fireEvent.blur(phoneInput);
    });

    let emailErrors = screen.getByTestId('errors-email');
    let phoneErrors = screen.getByTestId('errors-phone');

    expect(emailInput).toHaveValue('abc.com');
    expect(emailErrors).toHaveTextContent('Invalid email address');

    expect(phoneInput).toHaveValue('1234567');
    expect(phoneErrors).toHaveTextContent('Invalid phone number');

    // Valid path
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: 'johnsmith@gmail.com' },
      });

      fireEvent.change(phoneInput, {
        target: { value: '123-456-7890' },
      });
    });

    emailErrors = screen.queryByTestId('errors-email');
    phoneErrors = screen.queryByTestId('errors-phone');

    expect(emailInput).toHaveValue('johnsmith@gmail.com');
    expect(emailErrors).toBeNull();

    expect(phoneInput).toHaveValue('123-456-7890');
    expect(phoneErrors).toBeNull();
  });

  test('handles the form data correctly on submit', async () => {
    // Arrange
    const contactInfoForm = <ContactInfoForm navigate={jest.fn()} />;

    // Act
    render(contactInfoForm);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const phoneInput = screen.getByLabelText('Phone Number');
    const emailInput = screen.getByLabelText('Email Address');

    // Mock window.scrollTo
    const scrollToMock = jest.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollToMock });

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: 'John' } });
      fireEvent.blur(firstNameInput);

      fireEvent.change(lastNameInput, { target: { value: 'Smith' } });
      fireEvent.blur(lastNameInput);

      fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
      fireEvent.blur(phoneInput);

      fireEvent.change(emailInput, {
        target: { value: 'johnsmith@gmail.com' },
      });
      fireEvent.blur(emailInput);
    });

    const submitButton = screen.getByText('Continue');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert
    expect(contactInfoForm.props.navigate).toHaveBeenCalledWith(
      '/payment-info'
    );
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });

  test('navigates user back to the booking form when the Back button is clicked', async () => {
    // Arrange
    const contactInfoForm = <ContactInfoForm navigate={jest.fn()} />;

    // Act
    render(contactInfoForm);

    const backButton = screen.getByText('Back');

    await act(async () => {
      fireEvent.click(backButton);
    });

    // Assert
    expect(contactInfoForm.props.navigate).toHaveBeenCalledWith('/booking');
  });
});
