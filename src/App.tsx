import PatientForm from "./components/PatientForm"
import PatientsList from "./components/PatientsList"


function App() {


  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          <span className="text-indigo-700">Veterinary </span>
          Patients Management
        </h1>

        <div className="mt-12 md:flex">
          <PatientForm />
          <PatientsList />
        </div>
      </div>
    </>
  )
}

export default App
