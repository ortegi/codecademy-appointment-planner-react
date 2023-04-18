import { useRef } from "react";
import { useUserContext } from "../context/UserContext";


const AppForm = ({appointments, setAppointments}) => {
  const { list } = useUserContext();

  const formulario = useRef(null)
  const styles = "my-2 w-full rounded py-2 px-2";

  
  const handleChange = (e) => {
    e.preventDefault();
    const data = {
      title : e.target.elements.title.value,
      date : e.target.elements.date.value,
      time: e.target.elements.time.value,
      contact: e.target.elements.contact.value
    }

    const {title, date, time, contact} = data;
    if(title.length < 3 || date.length < 3 || !contact || !time){
      alert('rellena todos los campos')
    }else{
      console.log(data)
      setAppointments([...appointments, data])
    }
   

  }
  
  return (
    <div className="w-full md:w-2/5">
      <form onSubmit={handleChange} ref={formulario}>
        <input type="text" name="title" placeholder="title" className={styles} /> <br />
        <input type="date" name="date" className={styles} /> <br />
        <input type="time" name="time" className={styles} /> <br />
        <select name="contact" id="contact" className={styles} required>
          <option value disabled >Select a contact</option>
          { 
            list.map(item => (<option value={item.name} key={item.name}> {item.name} </option>))
          }
        </select>
        <button type="submit" className="bg-cyan-600 rounded px-4 py-2 mt-3">Submit </button>
      </form>
    </div>
  );
};

export default AppForm;
