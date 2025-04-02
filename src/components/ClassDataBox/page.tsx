"use client"
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Modal from "../Modal/page";
import Button from "../Button/page";

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

    const handleSubmitCancelClass = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
    
            console.log(`${classNumber}° Aula Cancelada!`)
        }

    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [isOpenCancelModal, setIsOpenCancelModal] = useState(false)

    const openEditModal = () => setIsOpenEditModal(true)
    const closeEditModal = () => setIsOpenEditModal(false)
    const openCancelModal = () => setIsOpenCancelModal(true)
    const closeCancelModal = () => setIsOpenCancelModal(false)

    return (
        <div className="container-class-data">
            <div className="class-detail">
                <h1>{classNumber}° Aula</h1>
                <h1>{classDataNow.startTime}</h1>
                <h1>{classDataNow.endTime}</h1>
                <h1>{classDataNow.date}</h1>
            </div>
            <div className="class-features">
                <button onClick={openEditModal} className="icon-button"><FaEdit size={27}/></button>
                <button onClick={openCancelModal} className="icon-button"><MdCancel size={27}/></button>
            </div>

            <Modal isOpen={isOpenEditModal}>
                <form onSubmit={handleSubmit} className="container-form">

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
                        <Button type="submit">Salvar</Button>
                        <Button onClick={closeEditModal} styles="bg-transparent text-black">Fechar</Button>
                    </div>

                </form>
            </Modal>

            <Modal isOpen={isOpenCancelModal}>
                <form onSubmit={handleSubmitCancelClass} className="container-form">

                    <h1 className="form-title">Cancelar Aula?</h1>

                    <div className="container-form-buttons">
                        <Button type="submit">Sim</Button>
                        <Button onClick={closeCancelModal} styles="bg-transparent text-black">Não</Button>
                    </div>

                </form>
            </Modal>
        </div>
    );
}