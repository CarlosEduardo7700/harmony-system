"use client"
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

interface FeatureBoxProps {
    classDataNow: {
        startTime: string;
        endTime: string;
        date: string;
        observations: string;
    }
    classNumber: number;
}

export default function ClassDataBox({classNumber, classDataNow}: FeatureBoxProps) {

    const [classData, setClassData] = useState({
            "startTime": classDataNow.startTime,
            "endTime": classDataNow.endTime,
            "date": classDataNow.date,
            "observations": classDataNow.observations
        })

    const handleChange = (
            event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
        ) => {
            const {name, value} = event.target
    
            setClassData({...classData, [name]: value})
        }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
    
            console.log("Class Data:", classData)
        }

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <div className="container-class-data">
            <div className="class-detail">
                <h1>{classNumber}° Aula</h1>
                <h1>{classDataNow.startTime}</h1>
                <h1>{classDataNow.endTime}</h1>
                <h1>{classDataNow.date}</h1>
            </div>
            <div className="class-features">
                <button onClick={openModal} className="icon-button"><FaEdit size={22}/></button>
                <button className="icon-button"><MdCancel size={22}/></button>
            </div>

            { isOpen && (
                <div className="fixed inset-0 bg-black/50 text-black flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="form-cadastro-aulas bg-white rounded-3xl p-2">

                        <h1 className="form-title">Editar</h1>

                        <div className="container-form-field">
                            <label htmlFor="startTime" className="form-field-label">Horário de Início</label>
                            <input 
                                type="time" 
                                id="startTime" 
                                name="startTime"
                                className="form-field-input"
                                value={classData.startTime}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="container-form-field">
                            <label htmlFor="endTime" className="form-field-label">Horário de Término</label>
                            <input 
                                type="time" 
                                id="endTime" 
                                name="endTime"
                                className="form-field-input"
                                value={classData.endTime}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="container-form-field">
                            <label htmlFor="date" className="form-field-label">Data</label>
                            <input 
                                type="date" 
                                id="date" 
                                name="date"
                                className="form-field-input"
                                value={classData.date}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="container-form-field">
                            <label htmlFor="observations" className="form-field-label">Observações</label>
                            <textarea 
                                name="observations" 
                                id="observations" 
                                className="form-field-textarea"
                                value={classData.observations}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="container-form-buttons">

                            <button type="submit" className="form-button">Salvar</button>

                            <button onClick={closeModal} className="form-button bg-red-500 hover:bg-red-600 transition duration-300">Fechar</button>

                        </div>

                    </form>
                </div>
            )}
        </div>
    );
}