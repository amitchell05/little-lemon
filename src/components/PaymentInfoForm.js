// React Tools
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { submitAPI } from '../api/api';

// Styles
import './PaymentInfoForm.scss';

const PaymentInfoForm = ({ navigate }) => {
  // Submits the form and navigates users to next screen
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/reservation-summary');

      // Scroll to the top of the confirmed booking page (figure out if there's a better way)
      window.scrollTo(0, 0);
    }
  };

  const goToPrevious = () => {
    navigate('/contact-info');
  };

  return (
    <section className='payment-info-form-section'>
      <h2 className='visually-hidden'>Payment Information Form</h2>
      <Formik
        initialValues={{
          cardNumber: '',
          cardHolderName: '',
          expDate: '',
          securityCode: '',
        }}
        onSubmit={(values) => {
          submitForm(values);
        }}
        validationSchema={Yup.object({
          cardNumber: Yup.string()
            .matches(
              /\b(?:\d[ -]*?){13,16}\b/,
              'Enter a valid card number (ex. 1111-1111-1111-1111)'
            )
            .required('Required'),
          cardHolderName: Yup.string().required('Required'),
          expDate: Yup.string()
            .matches(
              /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
              'Enter a valid expiration date (ex. 01/23)'
            )
            .min(5, 'Enter a valid expiration date (ex. 01/23)')
            .max(5, 'Enter a valid expiration date (ex. 01/23)')
            .test(
              'expired',
              'Your credit card has expired. Please update your credit card details.',
              (value) => {
                const submittedYear = parseInt(value.split('/')[1], 10) + 2000;
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();

                return currentYear < submittedYear;
              }
            )
            .required('Required'),
          securityCode: Yup.string()
            .min(3, 'Enter your 3- or 4-digit security code')
            .max(4, 'Enter your 3- or 4-digit security code')
            .required('Required'),
        })}
      >
        {() => (
          <Form
            aria-label='payment-info-form'
            className='util-container payment-info-form'
          >
            <h2>Payment Information Form</h2>
            <fieldset>
              <legend className='visually-hidden'>
                Enter your payment information
              </legend>
              <label
                htmlFor='cardNumber'
                id='card-number'
                className='lead-text'
              >
                Card Number
              </label>
              <Field
                name='cardNumber'
                type='text'
                aria-labelledby='card-number'
                required
              />
              <ErrorMessage
                name='cardNumber'
                component='div'
                data-testid='errors-card-number'
              />

              <label
                htmlFor='cardHolderName'
                id='cardholder-name'
                className='lead-text'
              >
                Cardholder Name
              </label>
              <Field
                name='cardHolderName'
                type='text'
                aria-labelledby='cardholder-name'
                required
              />
              <ErrorMessage
                name='cardHolderName'
                component='div'
                data-testid='errors-cardholder-name'
              />

              {/* TODO: Update layout and functionality of expDate and securityCode fields */}
              <div className='flex-items'>
                <div className='flex-item-group'>
                  <label htmlFor='expDate' id='exp-date' className='lead-text'>
                    Expiration Date (mm/yy)
                  </label>
                  <Field
                    name='expDate'
                    type='text'
                    aria-labelledby='exp-date'
                    pattern='^[0-9]{2}/[0-9]{2}$'
                    minLength='5'
                    maxLength='5'
                    required
                  />
                  <ErrorMessage
                    name='expDate'
                    component='div'
                    data-testid='errors-exp-date'
                  />
                </div>

                <div className='flex-item-group'>
                  <label
                    htmlFor='securityCode'
                    id='security-code'
                    className='lead-text'
                  >
                    Security Code
                  </label>
                  <Field
                    name='securityCode'
                    type='text'
                    aria-labelledby='security-code'
                    minLength='3'
                    maxLength='4'
                    required
                  />
                  <ErrorMessage
                    name='securityCode'
                    component='div'
                    data-testid='errors-security-code'
                  />
                </div>
              </div>

              <div className='form-actions'>
                <input
                  type='button'
                  value='Back'
                  className='button button--secondary'
                  onClick={goToPrevious}
                />
                <input
                  type='submit'
                  value='Continue'
                  className='button button--primary'
                />
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default PaymentInfoForm;
