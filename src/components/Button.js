//Styles
import './Button.scss';

export default function Button({ text, className }) {
  return (
    <>
      <button className={`button button-reset ${className}`}>{text}</button>
    </>
  );
}
