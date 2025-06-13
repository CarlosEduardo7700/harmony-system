"use client";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Modal from "../Modal/page";
import Button from "../Button/page";
import FormField from "../FormField/page";
import LongTextFormField from "../LongTextFormField/page";
import { Lesson } from "@/types/lesson.type";
import { LuLoaderCircle } from "react-icons/lu";

interface FeatureBoxProps {
    classDataNow: Lesson
    classNumber: number;
}

export default function ClassDataBox({classNumber, classDataNow}: FeatureBoxProps): React.JSX.Element {

    const [classData, setClassData] = useState({
        "startTime": classDataNow.startTime,
        "endTime": classDataNow.endTime,
        "lessonDate": classDataNow.lessonDate,
        "observations": classDataNow.observations,
        "googleEventId": classDataNow.googleEventId,
    });

    const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);

    const openAlertModal = (): void => setIsOpenAlertModal(true);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        const {name, value} = event.target;
        setClassData({...classData, [name]: value});
    };

    const handleSubmitEdit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        openAlertModal();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lesson/${classDataNow.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(classData)
        });
        const responseBody = await response.json();
    
        console.log("Class Data:", responseBody);

        window.location.reload();
    };

    const handleSubmitCancelClass = (
        event: React.FormEvent<HTMLFormElement>
    ): void => {
        event.preventDefault();
        console.log(`${classNumber}° Aula Cancelada!`);
    };

    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [isOpenCancelModal, setIsOpenCancelModal] = useState(false);

    const openEditModal = (): void => setIsOpenEditModal(true);
    const closeEditModal = (): void => setIsOpenEditModal(false);
    const openCancelModal = (): void => setIsOpenCancelModal(true);
    const closeCancelModal = (): void => setIsOpenCancelModal(false);

    return (
        <div className="container-class-data">
            <div className="class-detail">
                <h1>{classNumber}° Aula</h1>
                <h1>{classDataNow.startTime}</h1>
                <h1>{classDataNow.endTime}</h1>
                <h1>{classDataNow.lessonDate}</h1>
            </div>
            <div className="class-features">
                <button onClick={openEditModal} className="icon-button"><FaEdit size={27}/></button>
                <button onClick={openCancelModal} className="icon-button"><MdCancel size={27}/></button>
            </div>

            <Modal isOpen={isOpenEditModal}>
                <form onSubmit={handleSubmitEdit} className="container-form">

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
                        name="lessonDate"
                        value={classData.lessonDate}
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

            <Modal isOpen={isOpenAlertModal}>
                <LuLoaderCircle size={70} className="animate-spin text-cyan-400"/>
            </Modal>
        </div>
    );
}