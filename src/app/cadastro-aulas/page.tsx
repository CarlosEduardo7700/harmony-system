"use client";

import Button from "@/components/Button/page";
import CheckboxFormField from "@/components/CheckboxFormField/page";
import FormField from "@/components/FormField/page";
import HomeButton from "@/components/HomeButton/HomeButton";
import LongTextFormField from "@/components/LongTextFormField/page";
import Modal from "@/components/Modal/page";
import React, { useState } from "react";

export default function CadastrarAulas(): React.JSX.Element {

    const [classData, setClassData] = useState({
        "title": "",
        "startTime": "",
        "endTime": "",
        "startDate": "",
        "endDate": "",
        "recurrence": 1,
        "weekdays": [] as string[],
        "observations": ""
    });
    const [apiResponseMessage, setApiResponseMessage] = useState("");
    const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);

    const openAlertModal = (): void => setIsOpenAlertModal(true);
    const closeAlertModal = (): void => setIsOpenAlertModal(false);

    const handleCheckBoxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const day = event.target.value;
        setClassData({
            ...classData, 
            "weekdays": classData.weekdays.includes(day) 
                ? classData.weekdays.filter((d) => d !== day)
                : [...classData.weekdays, day]
        });
    };

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

    const weekdaysOptions = [
        {id: 1, nameOption: "Segunda", valueOption: "Monday"},
        {id: 2, nameOption: "Terça", valueOption: "Tuesday"},
        {id: 3, nameOption: "Quarta", valueOption: "Wednesday"},
        {id: 4, nameOption: "Quinta", valueOption: "Thursday"},
        {id: 5, nameOption: "Sexta", valueOption: "Friday"},
        {id: 6, nameOption: "Sábado", valueOption: "Saturday"},
        {id: 7, nameOption: "Domingo", valueOption: "Sunday"},
    ];

    return (
        <div className="container-principal">

            <HomeButton />

            <h1 className="page-title">Formulário para Cadastro das Aulas</h1>

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
                    label="Data de Início do Período" 
                    type="date"
                    name="startDate" 
                    value={classData.startDate}
                    onChange={handleChange}
                    required
                />

                <FormField 
                    label="Data de Término do Período" 
                    type="date"
                    name="endDate" 
                    value={classData.endDate}
                    onChange={handleChange}
                    required
                />

                <FormField 
                    label="Repetir a cada quantas semanas?" 
                    type="number"
                    name="recurrence" 
                    min="1"
                    value={classData.recurrence}
                    onChange={handleChange}
                    required
                />

                <CheckboxFormField 
                    label="Em quais dias da semana?"
                    optionsList={weekdaysOptions}
                    selectedList={classData.weekdays}
                    onChange={handleCheckBoxChange}
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