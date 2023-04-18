import AppForm from "../components/AppForm";
import { useState } from "react";
import TileListApp from "../components/TileListApp";

const Appointments = () => {

  const initialState = [
    {title: 'code', date: '2023-04-08', time: '21:57', contact: 'Alberto'}
  ]

  const [appointments, setAppointments]  = useState(initialState)

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-4">Add Apointment 🚀</h1>
      <AppForm  appointments={appointments}  setAppointments={setAppointments}/>
      <TileListApp appointments={appointments} />
    </div>
  );
};

export default Appointments;
