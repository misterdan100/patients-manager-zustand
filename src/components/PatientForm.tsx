import { useForm } from 'react-hook-form'
import Error from './Error'

export default function PatientForm() {
    const { register, handleSubmit, formState: {errors} } = useForm()

    const registerPatient = () => {
        console.log('nuevo paciente')
    }
  
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
          noValidate
          onSubmit={handleSubmit(registerPatient)}
        >
          <div className="mb-5">
            <label htmlFor="name" className="text-sm uppercase font-bold">
              Patient
            </label>
            <input
              id="name"
              className="w-full p-3  border border-gray-100"
              type="text"
              placeholder="Patient name"
              {...register("name", {
                required: "Patient name is required!",
              })}
            />
            {errors.name && (
              <Error>
                {errors.name?.message as string} {/*as string to fix TS error*/}
              </Error>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="caretaker" className="text-sm uppercase font-bold">
              Caretaker
            </label>
            <input
              id="caretaker"
              className="w-full p-3  border border-gray-100"
              type="text"
              placeholder="Caretaker name"
              {...register("caretaker", {
                required: "Caretaker is required!",
              })}
            />
            {errors.name && (
              <Error>
                {errors.caretaker?.message as string}{" "}
                {/*as string to fix TS error*/}
              </Error>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="text-sm uppercase font-bold">
              Email
            </label>
            <input
              id="email"
              className="w-full p-3  border border-gray-100"
              type="email"
              placeholder="Register e-mail"
              {...register("email", {
                required: "E-mail is required!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid e-mail!'
                }
              })}
            />
            {errors.name && (
              <Error>
                {errors.email?.message as string}{" "}
                {/*as string to fix TS error*/}
              </Error>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="date" className="text-sm uppercase font-bold">
              Discharge Date
            </label>
            <input
              id="date"
              className="w-full p-3  border border-gray-100"
              type="date"
              {...register("date", {
                required: "Date is required!",
              })}
            />
            {errors.name && (
              <Error>
                {errors.date?.message as string}{" "}
                {/*as string to fix TS error*/}
              </Error>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="symptoms" className="text-sm uppercase font-bold">
              Symptoms
            </label>
            <textarea
              id="symptoms"
              className="w-full p-3  border border-gray-100"
              placeholder="Patient's symptoms"
              {...register("symptoms", {
                required: "Symptoms are required!",
              })}
            ></textarea>
            {errors.name && (
              <Error>
                {errors.symptoms?.message as string}{" "}
              </Error>
            )}
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value="Guardar Paciente"
          />
        </form>
      </div>
    );
  }