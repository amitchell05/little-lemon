// React Tools
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../api/api';

// Styles
import './ContactInfoForm.scss';

const ContactInfoForm = () => {
  const navigate = useNavigate();

  // Submits the form and navigates users to next screen
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
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
    <section className='util-container'>
      <h2 className='visually-hidden'>Contact Information Form</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
        }}
        onSubmit={(values) => {
          submitForm(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          // TODO: add phone number validation (library or manual)
          phone: Yup.string().required('Required'),
          // TODO: refine email validation (library or manual)
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
      >
        {() => (
          <Form aria-label='contact-info-form' className='contact-info-form'>
            <h2>Contact Information Form</h2>
            <fieldset>
              <legend className='visually-hidden'>
                Enter your contact information
              </legend>
              <label htmlFor='firstName'>First Name</label>
              <Field name='firstName' type='text' required />
              <ErrorMessage name='firstName' />

              <label htmlFor='lastName'>Last Name</label>
              <Field name='lastName' type='text' required />
              <ErrorMessage name='lastName' />

              <label htmlFor='phone'>Phone Number</label>
              <Field name='phone' type='text' required />
              <ErrorMessage name='phone' />

              <label htmlFor='email'>Email Address</label>
              <Field name='email' type='email' />
              <ErrorMessage name='email' />

              <div className='contact-info-actions'>
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
