// React Tools
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { submitAPI } from '../api/api';

// Styles
import './ContactInfoForm.scss';

const ContactInfoForm = ({ navigate }) => {
  const contactData = JSON.parse(localStorage.getItem('contact'));

  // Submits the form and navigates users to next screen
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      // TODO: clear storage if user navigates away from forms
      localStorage.setItem('contact', JSON.stringify(formData));

      navigate('/payment-info');

      // Scroll to the top of the confirmed booking page (figure out if there's a better way)
      window.scrollTo(0, 0);
    }
  };

  const goToPrevious = () => {
    navigate('/booking');
  };

  return (
    <section className='contact-info-form-section'>
      <h2 className='visually-hidden'>Contact Information Form</h2>
      <Formik
        initialValues={{
          firstName: contactData ? contactData.firstName : '',
          lastName: contactData ? contactData.lastName : '',
          phone: contactData ? contactData.phone : '',
          email: contactData ? contactData.email : '',
        }}
        onSubmit={(values) => {
          submitForm(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          // TODO: add phone number validation for international phone format (library or manual)
          phone: Yup.string()
            .matches(
              /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
              'Invalid phone number'
            )
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .matches(
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              'Invalid email address'
            )
            .required('Required'),
        })}
      >
        {() => (
          <Form
            aria-label='contact-info-form'
            className='util-container contact-info-form'
          >
            <h2>Contact Information Form</h2>
            <fieldset>
              <legend className='visually-hidden'>
                Enter your contact information
              </legend>
              <label htmlFor='firstName' id='first-name' className='lead-text'>
                First Name
              </label>
              <Field
                name='firstName'
                type='text'
                aria-labelledby='first-name'
                required
              />
              <ErrorMessage
                name='firstName'
                component='div'
                data-testid='errors-first-name'
              />

              <label htmlFor='lastName' id='last-name' className='lead-text'>
                Last Name
              </label>
              <Field
                name='lastName'
                type='text'
                aria-labelledby='last-name'
                required
              />
              <ErrorMessage
                name='lastName'
                component='div'
                data-testid='errors-last-name'
              />

              <label htmlFor='phone' id='phone' className='lead-text'>
                Phone Number
              </label>
              <Field name='phone' type='tel' aria-labelledby='phone' required />
              <ErrorMessage
                name='phone'
                component='div'
                data-testid='errors-phone'
              />

              <label htmlFor='email' id='email' className='lead-text'>
                Email Address
              </label>
              <Field name='email' type='email' aria-labelledby='email' />
              <ErrorMessage
                name='email'
                component='div'
                data-testid='errors-email'
              />

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

export default ContactInfoForm;
