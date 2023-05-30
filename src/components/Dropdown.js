// Assets
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import { FaGlassCheers } from 'react-icons/fa';

// React Tools
import { ErrorMessage, Field, useField } from 'formik';

// Styles
import './Dropdown.scss';
import { useState } from 'react';

const Dropdown = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Reference (select option state): https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/
  const selectOption = (value, name) => {
    setSelectedOption(value);

    // Update formik select's value
    setValue(value);

    const displayedSelection = document.getElementById(
      `current-${name}-option`
    );

    console.log(displayedSelection);

    // Update styled select's displayed selection
    // displayedSelection.textContent = value;

    // Close styled dropdown
    // setIsOpen(false);
  };

  const [field, meta, helpers] = useField(props.name);

  const { setValue } = helpers;

  return (
    <>
      <label htmlFor={props.htmlFor} className='lead-text'>
        {props.label}
      </label>
      {/* Use arrow function to prevent call on render */}
      <div
        className='dropdown-container'
        onClick={() => toggleDropdown(props.name)}
      >
        <Field
          name={props.name}
          as='select'
          required
          className='dropdown-hidden'
        >
          <option value=''>{props.placeholder}</option>
          {props.options}
        </Field>
        <div className='dropdown-styled'>
          <FaGlassCheers
            className={
              props.name === 'location'
                ? 'dropdown-icon-visible'
                : 'dropdown-icon-invisible'
            }
          />
          <p id={`current-${props.name}-option`}>
            {selectedOption ? selectedOption : props.placeholder}
          </p>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <ul
          className={`dropdown-options ${isOpen ? 'active' : ''}`}
          id='dropdown-options'
        >
          {props.options.map((option, index) => {
            return (
              <li
                key={index}
                onClick={() => selectOption(option.props.value, props.name)}
              >
                {option.props.value}
              </li>
            );
          })}
        </ul>
      </div>
      <ErrorMessage name={props.name} />
    </>
  );
};

export default Dropdown;
