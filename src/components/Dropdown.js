// Assets
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import { FaGlassCheers } from 'react-icons/fa';

// React Tools
import { ErrorMessage, Field } from 'formik';

// Styles
import './Dropdown.scss';
import { useState } from 'react';

const Dropdown = ({ props }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

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
          <p id='dropown-selected-option'>{props.placeholder}</p>
          {isActive ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <ul
          className={`dropdown-options ${isActive ? 'active' : ''}`}
          id='dropdown-options'
        >
          {props.options.map((option, index) => {
            return <li key={index}>{option.props.value}</li>;
          })}
        </ul>
      </div>
      <ErrorMessage name={props.name} />
    </>
  );
};

export default Dropdown;
