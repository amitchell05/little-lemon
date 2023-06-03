// Assets
import restaurant from '../assets/restaurant.jpg';

// Components
import CallToAction from './CallToAction';
import Dropdown from './Dropdown';

// React Tools
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { submitAPI } from '../api/api';
import { initializeTimes, updateTimes } from '../reducers/bookingReducer';
import { useReducer } from 'react';

// Styles
import './BookingForm.scss';

const BookingForm = ({ navigate }) => {
  const hero = {
    title: 'Book A Table',
    leadText:
      'Lorem ipsum dolor sit amet consectetur odipiscing elit,sed do eiusmod tempor incididunt it lahnne et do ore magna aliqua.',
    image: restaurant,
  };

  const initialTimes = [];

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialTimes,
    initializeTimes
  );

  const bookingData = JSON.parse(localStorage.getItem('booking'));

  const locations = [
    { id: '1', address: '100 Lemon Drive, Chicago, IL 12345' },
  ].map((location) => {
    return (
      <option key={location.id} value={location.address} date-testid='location'>
        {location.address}
      </option>
    );
  });

  // TODO (optional): determine how to make it support multiple locales
  const times = availableTimes.map((time) => {
    return (
      <option key={time.id} value={time.value} data-testid='time'>
        {time.value}
      </option>
    );
  });

  const occasions = [
    { id: '1', name: 'Birthday', value: 'birthday' },
    { id: '2', name: 'Anniversary', value: 'anniversary' },
  ].map((occasion) => {
    return (
      <option key={occasion.id} value={occasion.value} data-testid='occasion'>
        {occasion.name}
      </option>
    );
  });

  // Resource: https://stackoverflow.com/questions/43274559/how-do-i-restrict-past-dates-in-html5-input-type-date
  const setMinDate = () => {
    // Current date
    const currentDate = new Date();

    // Current month
    let month = currentDate.getMonth() + 1;

    // Current day
    let day = currentDate.getDate();

    // Current year
    const year = currentDate.getFullYear();

    // Append 0 to front of month and day if less than 10 (ex. 05)
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    // Returns mininmum date for the date input in the form
    return `${year}-${month}-${day}`;
  };

  // Submits the form and navigates users to next screen
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      // TODO: clear storage if user navigates away from forms
      localStorage.setItem('booking', JSON.stringify(formData));

      navigate('/contact-info');

      // Scroll to the top of the confirmed booking page (figure out if there's a better way)
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} utilHeroTitle={'util-hero-title'} />
      <section className='booking-form-section'>
        <h2 className='visually-hidden'>Booking Form</h2>
        <Formik
          initialValues={{
            location: bookingData ? bookingData.location : '',
            resDate: bookingData ? bookingData.resDate : '',
            resTime: bookingData ? bookingData.resTime : '',
            guests: bookingData ? bookingData.guests : 1,
            occasion: bookingData ? bookingData.occasion : '',
            seating: bookingData ? bookingData.seating : '',
            accomodations: bookingData ? bookingData.accomodations : '',
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={Yup.object({
            location: Yup.string().required('Required'),
            resDate: Yup.string().required('Required'),
            resTime: Yup.string().required('Required'),
            guests: Yup.number()
              .min(1, 'Must reserve for 1 to 10 guests')
              .max(11, 'Must reserve for 1 to 10 guests')
              .required('Required'),
            occasion: Yup.string().required('Required'),
            seating: Yup.string().required('Required'),
            accomodations: Yup.string().nullable(),
          })}
        >
          {(formik) => (
            <Form
              aria-label='booking-form'
              className='util-container booking-form'
            >
              <h2>Reservation Form</h2>
              <fieldset>
                <legend className='visually-hidden'>
                  Enter your reservation details
                </legend>

                <Dropdown
                  htmlFor='location'
                  id='location'
                  label='Restaurant Location'
                  name='location'
                  options={locations}
                  placeholder='Location'
                  formik={formik} // Pass `formik` object directly
                  testid='errors-location'
                  onChange={(value, formik) => {
                    formik.setFieldValue('location', value);
                  }}
                />

                <div className='flex-items'>
                  <div className='flex-item-group'>
                    <label htmlFor='resDate' id='resDate' className='lead-text'>
                      Date
                    </label>
                    <input
                      id='resDate'
                      type='date'
                      data-testid='res-date'
                      min={setMinDate()}
                      required
                      {...formik.getFieldProps('resDate')}
                      aria-labelledby='resDate'
                      onChange={(e) => {
                        dispatch({ type: 'set_date', resDate: e.target.value });
                        formik.setFieldValue('resDate', e.target.value);
                      }}
                    />
                    <ErrorMessage
                      name='resDate'
                      component='div'
                      data-testid='errors-resDate'
                    />
                  </div>
                  <div className='flex-item-group'>
                    <Dropdown
                      htmlFor='resTime'
                      id='resTime'
                      label='Time'
                      name='resTime'
                      options={times}
                      placeholder='Time'
                      formik={formik} // Pass `formik` object directly
                      testid='errors-resTime'
                      onChange={(value, formik) => {
                        formik.setFieldValue('resTime', value);
                      }}
                    />
                  </div>
                </div>

                <label htmlFor='guests' id='guests' className='lead-text'>
                  Number of Guests
                </label>
                <Field
                  name='guests'
                  type='number'
                  placeholder='1'
                  min='1'
                  max='10'
                  aria-labelledby='guests'
                  required
                />
                <ErrorMessage
                  name='guests'
                  component='div'
                  data-testid='errors-guests'
                />

                <div className='flex-items'>
                  <div className='flex-item-group'>
                    <Dropdown
                      htmlFor='occasion'
                      id='occasion'
                      label='Occasion'
                      name='occasion'
                      options={occasions}
                      placeholder='Occasion'
                      formik={formik}
                      testid='errors-occasion'
                      onChange={(value, formik) => {
                        formik.setFieldValue('occasion', value);
                      }}
                    />
                  </div>

                  <div className='flex-item-group'>
                    <fieldset className='booking-form-radio-group'>
                      <legend className='lead-text'>Type of Seating</legend>
                      <div className='booking-form-radio-button'>
                        <Field
                          type='radio'
                          name='seating'
                          value='standard'
                          aria-labelledby='standard'
                          required
                        />
                        <label
                          htmlFor='standard'
                          className='lead-text'
                          id='standard'
                        >
                          Standard
                        </label>
                      </div>
                      <div className='booking-form-radio-button'>
                        <Field
                          type='radio'
                          name='seating'
                          value='outside'
                          aria-labelledby='outside'
                          required
                        />
                        <label
                          htmlFor='outside'
                          className='lead-text'
                          id='outside'
                        >
                          Outside
                        </label>
                      </div>
                    </fieldset>
                    <ErrorMessage
                      name='seating'
                      component='div'
                      data-testid='errors-seating'
                    />
                  </div>
                </div>

                <label htmlFor='accomodations' className='lead-text'>
                  Accomodations
                </label>
                <Field name='accomodations' as='textarea'></Field>
                <ErrorMessage name='accomodations' />

                <div className='form-actions'>
                  <input
                    type='submit'
                    value='Make Your Reservation'
                    className='button button--primary'
                  />
                </div>
              </fieldset>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default BookingForm;
