import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailProps = {
    patient: Patient,
}


export default function PatientDetail({patient}: PatientDetailProps) {
    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)


  return (
    <div className="mx-5 px-5 py-10 bg-white shadow-md rounded-2xl">
      <PatientDetailItem label={"ID"} data={patient.id} />
      <PatientDetailItem label={"Name"} data={patient.name} />
      <PatientDetailItem label={"Caretaker"} data={patient.caretaker} />
      <PatientDetailItem label={"E-mail"} data={patient.email} />
      <PatientDetailItem label={"Date"} data={patient.date.toString()} />
      <PatientDetailItem label={"Symptoms"} data={patient.symptoms} />

      <div className="flex flex-col md:flex-row gap-3 mt-5">
        <button
            type="button"
            className="font-semibold py-2 px-10 bg-transparent border border-yellow-500 hover:bg-yellow-400 hover:text-black uppercase rounded-lg transition"
            onClick={() => getPatientById(patient.id)}
        >
            Edit</button>
        <button
            type="button"
            className="font-semibold py-2 px-10 bg-transparent border border-red-500 hover:bg-red-500 hover:text-white uppercase rounded-lg transition"
            onClick={() => deletePatient(patient.id)}
        >
            Delete</button>
      </div>
    </div>
  );
}
