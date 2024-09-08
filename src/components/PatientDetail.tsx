import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailProps = {
    patient: Patient
}

export default function PatientDetail({patient}: PatientDetailProps) {
  return (
    <div className="mx-5 my-5 px-5 py-10 bg-white shadow-md rounded-2xl">
        <PatientDetailItem 
            label={'ID'}
            data={patient.id}
        />
        <PatientDetailItem 
            label={'Name'}
            data={patient.name}
        />
        <PatientDetailItem 
            label={'Caretaker'}
            data={patient.caretaker}
        />
        <PatientDetailItem 
            label={'E-mail'}
            data={patient.email}
        />
        <PatientDetailItem 
            label={'Date'}
            data={patient.date.toString()}
        />
        <PatientDetailItem 
            label={'Symptoms'}
            data={patient.symptoms}
        />

    </div>
  )
}
