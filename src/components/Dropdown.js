// Assets
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import { FaGlassCheers } from 'react-icons/fa';

// React Tools
import { ErrorMessage, Field } from 'formik';

// Styles
import './Dropdown.scss';
import { useEffect, useState } from 'react';

const Dropdown = ({
  htmlFor,
  id,
  label,
  name,
  options,
  placeholder,
  formik,
  testid,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Reference (select option state): https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Selects actual option
  const onOptionClick = (value) => {
    // Update styled select's displayed selection
    setSelectedOption(value);

    // Set the field value state
    formik.setFieldValue(name, value);

    // Close styled dropdown
    setIsOpen(false);

    if (onChange) {
      // Invoke the onChange callback with the selected value
      onChange(value, formik);
    }
  };

  // List items for the styled dropdown
  const dropdownOptions = options.map((option, index) => {
    return (
      <li key={index} onClick={() => onOptionClick(option.props.value)}>
        {option.props.value}
      </li>
    );
  });

  // Trigger field validation for the specific field; Yup reevaluates the validation rules and updates the error message accordingly
  const handleBlur = async () => {
    if (!selectedOption) {
      // Set the field as touched only if an option is not selected
      formik.setFieldTouched(name, true);
    }

    await formik.validateField(name);
  };

  const fieldValue = formik.values[name];

  useEffect(() => {
    setSelectedOption(fieldValue);
  }, [fieldValue]);

  return (
    <>
      <label htmlFor={htmlFor} className='lead-text' id={id}>
        {label}
      </label>
      {/* Use arrow function to prevent call on render; Add tabIndex to make the container div focusable */}
      <div className='dropdown-container' onBlur={handleBlur} tabIndex={0}>
        <Field
          name={name}
          as='select'
          required
          className='dropdown-hidden'
          component='select'
          value={formik.values[name]}
          aria-labelledby={id}
        >
          <option value=''>{placeholder}</option>
          {options}
        </Field>
        <div
          className={`dropdown-styled ${
            selectedOption ? 'dropdown-styled--selected' : ''
          }`}
          onClick={toggleDropdown}
        >
          <FaGlassCheers
            className={
              name === 'location' && !selectedOption
                ? 'dropdown-icon-visible'
                : 'dropdown-icon-invisible'
            }
          />
          <p id={`current-${name}-option`}>
            {selectedOption ? selectedOption : placeholder}
          </p>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <ul
          className={`dropdown-options ${isOpen ? 'active' : ''}`}
          id='dropdown-options'
        >
          {dropdownOptions}
        </ul>
      </div>
      <ErrorMessage name={String(name)} component='div' data-testid={testid} />
    </>
  );
};

export default Dropdown;
