import { useForm } from 'react-hook-form'
import Error from './Error'
import { DraftPatient } from '../types'
import { usePatientStore } from '../store'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function PatientForm() {
    const patients = usePatientStore(state => state.patients)
    const addPatient = usePatientStore(state => state.addPatient)
    const updatePatient = usePatientStore(state => state.updatePatient)
    const activeId = usePatientStore(state => state.activeId)

    const { register, handleSubmit, formState: {errors}, reset, setValue } = useForm<DraftPatient>()
    
    useEffect(() => {
        if(activeId) {
            const activePatient = patients.filter( patient => patient.id === activeId)[0]
            setValue('name', activePatient.name)
            setValue('email', activePatient.email)
            setValue('caretaker', activePatient.caretaker)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)
        }
    }, [activeId])

    const registerPatient = (data: DraftPatient) => {
        if(activeId) {
            updatePatient(data)
            toast.warning('Patient edited.')
        } else {
            addPatient(data)
            toast.success('Patient created.')
        }
        reset()
    }
  
    return (
      <div className={`md:w-1/2 lg:w-2/5 mx-5 `}>
        <h2 className="font-black text-3xl text-center">
          Patient Manager
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Add patients and {""}
          <span className="text-indigo-600 font-bold">manage them</span>
        </p>

        <form
          className={`bg-white shadow-md rounded-lg py-10 px-5 mb-10 border transition duration-500 ${activeId ? 'border-yellow-500' : 'border-transparent' } `}
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
            className={` w-full p-3 text-white uppercase font-bold  cursor-pointer transition-colors ${activeId ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            value="Guardar Paciente"
          />
        </form>
      </div>
    );
  }