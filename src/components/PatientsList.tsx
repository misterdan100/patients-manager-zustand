import { usePatientStore } from '../store'
import PatientDetail from './PatientDetail'

export default function PatientsList() {

    const patients = usePatientStore(state => state.patients)
    
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen ">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patients list</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your{" "}
            <span className="text-indigo-600 font-bold">
              patients and appointments
            </span>
          </p>
          <div className="md:h-screen overflow-y-scroll flex flex-col gap-5">
            {patients.map((patient) => (
              <PatientDetail key={patient.id} patient={patient} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There are not patients.
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start creating patients{" "}
            <span className="text-indigo-600 font-bold">
              and they will be shown in this section
            </span>
          </p>
        </>
      )}
    </div>
  );
}
