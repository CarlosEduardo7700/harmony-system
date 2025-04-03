"use client"
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Modal from "../Modal/page";
import Button from "../Button/page";
import FormField from "../FormField/page";
import LongTextFormField from "../LongTextFormField/page";

interface FeatureBoxProps {
    classDataNow: {
        startTime: string;
        endTime: string;
        classDate: string;
        observations: string;
    }
    classNumber: number;
}

export default function ClassDataBox({classNumber, classDataNow}: FeatureBoxProps) {

    const [classData, setClassData] = useState({
            "startTime": classDataNow.startTime,
            "endTime": classDataNow.endTime,
            "classDate": classDataNow.classDate,
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
                <h1>{classDataNow.classDate}</h1>
            </div>
            <div className="class-features">
                <button onClick={openEditModal} className="icon-button"><FaEdit size={27}/></button>
                <button onClick={openCancelModal} className="icon-button"><MdCancel size={27}/></button>
            </div>

            <Modal isOpen={isOpenEditModal}>
                <form onSubmit={handleSubmit} className="container-form">

                    <h1 className="form-title">Editar</h1>

                    <FormField 
                        label="Horário de Início"
                        type="time"
                        name="startTime"
                        value={classData.startTime}
                        onChange={handleChange}
                    />

                    <FormField 
                        label="Horário de Término"
                        type="time"
                        name="endTime"
                        value={classData.endTime}
                        onChange={handleChange}
                    />

                    <FormField 
                        label="Data da Aula"
                        type="date"
                        name="classDate"
                        value={classData.classDate}
                        onChange={handleChange}
                    />

                    <LongTextFormField
                        label="Observações"
                        name="observations"
                        value={classData.observations}
                        onChange={handleChange}
                    />

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