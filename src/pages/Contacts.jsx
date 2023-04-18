import ContactForm from "../components/ContactForm";
import TileList from "../components/TileList";



const Contacts = () => {



  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-4">Add Contacts 😎</h1>
      <ContactForm  />
      <TileList/>
    </div>
  );
};

export default Contacts;
