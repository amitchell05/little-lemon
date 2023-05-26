import { ErrorMessage, Field } from 'formik';

const Dropdown = ({ props }) => {
  return (
    <>
      <label htmlFor={props.htmlFor} className='lead-text'>
        {props.label}
      </label>
      <Field name={props.name} as='select' required>
        <option value=''>{props.placeholder}</option>
        {props.options}
      </Field>
      <ErrorMessage name={props.name} />
    </>
  );
};

export default Dropdown;
