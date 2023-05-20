// React Tools
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Styles
import './PaymentInfoForm.scss';

const PaymentInfoForm = () => {
  return (
    <section className='util-container'>
      <h2 className='visually-hidden'>Payment Information Form</h2>
      <Formik
        initialValues={{
          cardNumber: '',
          cardHolderName: '',
          expDate: '',
          securityCode: '',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          // TODO: Validate credit card information (basic level)
          cardNumber: Yup.string().required('Required'),
          cardHolderName: Yup.string().required('Required'),
          expDate: Yup.string().required('Required'),
          securityCode: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
      >
        {() => (
          <Form aria-label='payment-info-form' className='payment-info-form'>
            <h2>Payment Information Form</h2>
            <fieldset>
              <legend className='visually-hidden'>
                Enter your payment information
              </legend>
              <label htmlFor='cardNumber'>Card Number</label>
              <Field name='cardNumber' type='text' required />
              <ErrorMessage name='cardNumber' />

              <label htmlFor='cardHolderName'>Cardholder Name</label>
              <Field name='cardHolderName' type='text' required />
              <ErrorMessage name='cardHolderName' />

              {/* TODO: Update layout of expDate and securityCode fields */}
              <label htmlFor='expDate'>Expiration Date</label>
              <Field name='expDate' type='text' required />
              <ErrorMessage name='expDate' />

              <label htmlFor='securityCode'>Security Code</label>
              <Field name='securityCode' type='text' />
              <ErrorMessage name='securityCode' />

              <div className='payment-info-actions'>
                <input
                  type='button'
                  value='Back'
                  className='button button--secondary'
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
