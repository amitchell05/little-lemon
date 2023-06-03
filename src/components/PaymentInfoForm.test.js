/* eslint-disable testing-library/no-unnecessary-act */

// Components
import PaymentInfoForm from './PaymentInfoForm';

// React Tools
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { PaymentInfoProvider } from '../contexts/PaymentInfoContext';

describe('Payment Info Form', () => {
  // Arrange
  const navigateMock = jest.fn();
  const paymentInfoForm = (
    <PaymentInfoProvider>
      <PaymentInfoForm navigate={navigateMock} />
    </PaymentInfoProvider>
  );

  test('validates the input fields correctly if fields are empty or filled', async () => {
    // Act
    render(paymentInfoForm);

    const cardNumberInput = screen.getByLabelText('Card Number');
    const cardHolderNameInput = screen.getByLabelText('Cardholder Name');
    const expDateInput = screen.getByLabelText('Expiration Date (mm/yy)');
    const securityCodeInput = screen.getByLabelText('Security Code');

    // Assert

    // Invalid path
    await act(async () => {
      fireEvent.change(cardNumberInput, { target: { value: '' } });
      fireEvent.blur(cardNumberInput);

      fireEvent.change(cardHolderNameInput, { target: { value: '' } });
      fireEvent.blur(cardHolderNameInput);

      fireEvent.change(expDateInput, { target: { value: '' } });
      fireEvent.blur(expDateInput);

      fireEvent.change(securityCodeInput, { target: { value: '' } });
      fireEvent.blur(securityCodeInput);
    });

    let cardNumberErrors = screen.getByTestId('errors-card-number');
    let cardHolderNameErrors = screen.getByTestId('errors-cardholder-name');
    let expDateErrors = screen.getByTestId('errors-exp-date');
    let securityCodeErrors = screen.getByTestId('errors-security-code');

    expect(cardNumberInput).toHaveValue('');
    expect(cardNumberErrors).toHaveTextContent('Required');

    expect(cardHolderNameInput).toHaveValue('');
    expect(cardHolderNameErrors).toHaveTextContent('Required');

    expect(expDateInput).toHaveValue('');
    expect(expDateErrors).toHaveTextContent('Required');

    expect(securityCodeInput).toHaveValue('');
    expect(securityCodeErrors).toHaveTextContent('Required');

    // Valid path
    await act(async () => {
      fireEvent.change(cardNumberInput, {
        target: { value: '1234-1111-1111-1111' },
      });
      fireEvent.blur(cardNumberInput);

      fireEvent.change(cardHolderNameInput, {
        target: { value: 'John Smith' },
      });
      fireEvent.blur(cardHolderNameInput);

      fireEvent.change(expDateInput, {
        target: { value: '06/28' },
      });
      fireEvent.blur(expDateInput);

      fireEvent.change(securityCodeInput, {
        target: { value: '123' },
      });
      fireEvent.blur(securityCodeInput);
    });

    cardNumberErrors = screen.queryByTestId('errors-card-number');
    cardHolderNameErrors = screen.queryByTestId('errors-cardholder-name');
    expDateErrors = screen.queryByTestId('errors-exp-date');
    securityCodeErrors = screen.queryByTestId('errors-security-code');

    expect(cardNumberInput).toHaveValue('1234-1111-1111-1111');
    expect(cardNumberErrors).toBeNull();

    expect(cardHolderNameInput).toHaveValue('John Smith');
    expect(cardHolderNameErrors).toBeNull();

    expect(expDateInput).toHaveValue('06/28');
    expect(expDateErrors).toBeNull();

    expect(securityCodeInput).toHaveValue('123');
    expect(securityCodeErrors).toBeNull();
  });

  test('validates the card data format for fields correctly if they are invalid or valid', async () => {
    // Act
    render(paymentInfoForm);

    const cardNumberInput = screen.getByLabelText('Card Number');
    const expDateInput = screen.getByLabelText('Expiration Date (mm/yy)');
    const securityCodeInput = screen.getByLabelText('Security Code');

    // Invalid path
    await act(async () => {
      fireEvent.change(cardNumberInput, { target: { value: '580' } });
      fireEvent.blur(cardNumberInput);

      fireEvent.change(expDateInput, { target: { value: '5/25' } });
      fireEvent.blur(expDateInput);

      fireEvent.change(securityCodeInput, { target: { value: '12' } });
      fireEvent.blur(securityCodeInput);
    });

    let cardNumberErrors = screen.getByTestId('errors-card-number');
    let expDateErrors = screen.getByTestId('errors-exp-date');
    let securityCodeErrors = screen.getByTestId('errors-security-code');

    expect(cardNumberInput).toHaveValue('580');
    expect(cardNumberErrors).toHaveTextContent(
      'Enter a valid card number (ex. 1111-1111-1111-1111)'
    );

    expect(expDateInput).toHaveValue('5/25');
    expect(expDateErrors).toHaveTextContent(
      'Enter a valid expiration date (ex. 01/23)'
    );

    expect(securityCodeInput).toHaveValue('12');
    expect(securityCodeErrors).toHaveTextContent(
      'Enter your 3- or 4-digit security code'
    );

    // Valid path
    await act(async () => {
      fireEvent.change(cardNumberInput, {
        target: { value: '1234-1111-1111-1111' },
      });

      fireEvent.change(expDateInput, { target: { value: '05/25' } });
      fireEvent.blur(expDateInput);

      fireEvent.change(securityCodeInput, { target: { value: '123' } });
      fireEvent.blur(securityCodeInput);
    });

    cardNumberErrors = screen.queryByTestId('errors-card-number');
    expDateErrors = screen.queryByTestId('errors-exp-date');
    securityCodeErrors = screen.queryByTestId('errors-security-code');

    expect(cardNumberInput).toHaveValue('1234-1111-1111-1111');
    expect(cardNumberErrors).toBeNull();

    expect(expDateInput).toHaveValue('05/25');
    expect(expDateErrors).toBeNull();

    expect(securityCodeInput).toHaveValue('123');
    expect(securityCodeErrors).toBeNull();
  });

  test('handles the form data correctly on submit', async () => {
    // Act
    render(paymentInfoForm);

    const cardNumberInput = screen.getByLabelText('Card Number');
    const cardHolderNameInput = screen.getByLabelText('Cardholder Name');
    const expDateInput = screen.getByLabelText('Expiration Date (mm/yy)');
    const securityCodeInput = screen.getByLabelText('Security Code');

    // Mock window.scrollTo
    const scrollToMock = jest.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollToMock });

    await act(async () => {
      fireEvent.change(cardNumberInput, {
        target: { value: '1234-1111-1111-1111' },
      });
      fireEvent.blur(cardNumberInput);

      fireEvent.change(cardHolderNameInput, {
        target: { value: 'John Smith' },
      });
      fireEvent.blur(cardHolderNameInput);

      fireEvent.change(expDateInput, { target: { value: '06/28' } });
      fireEvent.blur(expDateInput);

      fireEvent.change(securityCodeInput, { target: { value: '123' } });
      fireEvent.blur(securityCodeInput);
    });

    const submitButton = screen.getByText('Continue');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    const cardNumberErrors = screen.queryByTestId('errors-card-number');
    const cardHolderNameErrors = screen.queryByTestId('errors-cardholder-name');
    const expDateErrors = screen.queryByTestId('errors-exp-date');
    const securityCodeErrors = screen.queryByTestId('errors-security-code');

    // Assert
    expect(cardNumberErrors).toBeNull();
    expect(cardHolderNameErrors).toBeNull();
    expect(expDateErrors).toBeNull();
    expect(securityCodeErrors).toBeNull();

    expect(navigateMock).toHaveBeenCalledWith('/reservation-summary');
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });

  test('navigates user back to the booking form when the Back button is clicked', async () => {
    // Arrange
    const paymentInfoForm = <PaymentInfoForm navigate={jest.fn()} />;

    // Act
    render(paymentInfoForm);

    const backButton = screen.getByText('Back');

    await act(async () => {
      fireEvent.click(backButton);
    });

    // Assert
    expect(paymentInfoForm.props.navigate).toHaveBeenCalledWith(
      '/contact-info'
    );
  });
});
