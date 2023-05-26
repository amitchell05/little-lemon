// Assets
import peopleDining from '../assets/alex-haney-CAhjZmVk5H4-unsplash.jpg';

// Components
import CallToAction from './CallToAction';
import ContactInfoForm from './ContactInfoForm';

const ContactInfoPage = ({ useNavigate }) => {
  const navigate = useNavigate();

  const hero = {
    title: 'Contact Information',
    leadText:
      'Lorem ipsum dolor sit amet consectetur odipiscing elit,sed do eiusmod tempor incididunt it lahnne et do ore magna aliqua.',
    image: peopleDining,
  };

  return (
    <>
      <CallToAction hero={{ ...hero }} utilHeroTitle={'util-hero-title'} />
      <ContactInfoForm navigate={navigate} />
    </>
  );
};

export default ContactInfoPage;
