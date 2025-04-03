"use client";

import Button from "@/components/Button/page";
import CheckboxFormField from "@/components/CheckboxFormField/page";
import FormField from "@/components/FormField/page";
import HomeButton from "@/components/HomeButton/HomeButton";
import LongTextFormField from "@/components/LongTextFormField/page";
import React, { useState } from "react";

export default function CadastrarAulas(): React.JSX.Element {

    const [classData, setClassData] = useState({
        "title": "",
        "startTime": "",
        "endTime": "",
        "startDate": "",
        "endDate": "",
        "recurrence": 1,
        "daysWeek": [] as string[],
        "observations": ""
    });

    const handleCheckBoxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        
        const day = event.target.value;

        setClassData({
            ...classData, 
            "daysWeek": classData.daysWeek.includes(day) 
                ? classData.daysWeek.filter((d) => d !== day)
                : [...classData.daysWeek, day]
        });
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ): void => {

        const {name, value} = event.target;

        setClassData({...classData, [name]: value});
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ): void => {

        event.preventDefault();

        console.log("Class Data:", classData);
    };

    const daysWeekOptions = [
        {id: 1, nameOption: "Segunda"},
        {id: 2, nameOption: "Terça"},
        {id: 3, nameOption: "Quarta"},
        {id: 4, nameOption: "Quinta"},
        {id: 5, nameOption: "Sexta"},
        {id: 6, nameOption: "Sábado"},
        {id: 7, nameOption: "Domingo"},
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
                    optionsList={daysWeekOptions}
                    selectedList={classData.daysWeek}
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
        </div>
    );
}