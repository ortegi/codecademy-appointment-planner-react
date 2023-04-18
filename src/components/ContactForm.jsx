import { useRef } from "react";
import { useUserContext } from "../context/UserContext";

const ContactForm = () => {
  const { list, setList } = useUserContext();

  const styles = "my-2 w-full rounded py-2 px-2";
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
      email: e.target.elements.email.value,
    };

    if (!data.name.length || !data.phone.length || !data.email.length) {
      alert("rellena todos los campos");
    } else {
      setList([...list, data]);
    }
  };

  return (
    <div className="w-full md:w-2/5">
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Joe Doe"
          name="name"
          className={styles}
          required
        />{" "}
        <br />
        <input
          type="text"
          placeholder="665 66 66 33"
          className={styles}
          required
          name="phone"
        />
        <br />
        <input
          type="email"
          placeholder="youremail@mail.com"
          className={styles}
          name="email"
          required
        />
        <button type="submit" className="bg-cyan-600 rounded px-4 py-2 mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
