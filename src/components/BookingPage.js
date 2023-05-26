// Components
import BookingForm from './BookingForm';

const BookingPage = ({ useNavigate }) => {
  const navigate = useNavigate();

  return (
    <>
      <BookingForm navigate={navigate} />
    </>
  );
};

export default BookingPage;
