"use client";

import Button from "@/components/Button/page";
import FormField from "@/components/FormField/page";
import LongTextFormField from "@/components/LongTextFormField/page";
import Modal from "@/components/Modal/page";
import React, { useState } from "react";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

export default function CadastrarAula(): React.JSX.Element {

    const [classData, setClassData] = useState({
        "title": "",
        "startTime": "",
        "endTime": "",
        "lessonDate": "",
        "observations": ""
    });
    const [apiResponseMessage, setApiResponseMessage] = useState("");
    const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);

    const openAlertModal = (): void => setIsOpenAlertModal(true);
    const closeAlertModal = (): void => setIsOpenAlertModal(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        const {name, value} = event.target;
        setClassData({...classData, [name]: value});
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {

        event.preventDefault();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lesson`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(classData)
        });
        const responseBody = await response.json();

        setApiResponseMessage(responseBody.message);

        openAlertModal();
    };

    return (
        <div className="container-principal">
            <div className="w-full mb-5">
                <Button styles="circle-button"><Link href='/cadastro-aulas'><IoArrowBackSharp size={30}/></Link></Button>
            </div>

            <h1 className="page-title">Formulário para Cadastro de uma nova Aula</h1>

            <form onSubmit={handleSubmit} className="container-form">

                <FormField 
                    label="Título" 
                    type="text"
                    name="title" 
                    value={classData.title}
                    onChange={handleChange}
                    required
                />

                <FormField 
                    label="Horário de Início" 
                    type="time"
                    name="startTime" 
                    value={classData.startTime}
                    onChange={handleChange}
                    required
                />

                <FormField 
                    label="Horário de Término" 
                    type="time"
                    name="endTime" 
                    value={classData.endTime}
                    onChange={handleChange}
                    required
                />

                <FormField 
                    label="Data da Aula" 
                    type="date"
                    name="lessonDate" 
                    value={classData.lessonDate}
                    onChange={handleChange}
                    required
                />

                <LongTextFormField
                    label="Observações (Opcional)"
                    name="observations"
                    value={classData.observations}
                    onChange={handleChange}
                />

                <Button type="submit">Cadastrar</Button>

            </form>

            <Modal isOpen={isOpenAlertModal}>
                <div className="container-alert">
                    <h1>{apiResponseMessage}</h1>
                    <Button onClick={closeAlertModal}>Fechar</Button>
                </div>
            </Modal>
        </div>
    );
}