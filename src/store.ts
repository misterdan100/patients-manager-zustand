import  { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from './types'
import { toast } from 'react-toastify'

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void 
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

// helper function
const createPatient = (patient: DraftPatient): Patient => {
    return {...patient, id: uuidv4()}
}

// main state manager
export const usePatientStore = create<PatientState>()(devtools((set) => ({
    patients: [], // state,
    activeId: '',
    addPatient: (data) => { // action
        const newPatient = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    },
    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter( patient => patient.id !== id)
        }))
        toast.warning('Patient deleted.')
    },
    getPatientById: (id) => {
        set(() => ({
            activeId: id
        }))
    },
    updatePatient: (data) => {
        set((state) => ({
            patients: state.patients.map(patient => patient.id === state.activeId ? {
                id: state.activeId,
                ...data
            } : patient),
            activeId: ''
        }))
    }
})))