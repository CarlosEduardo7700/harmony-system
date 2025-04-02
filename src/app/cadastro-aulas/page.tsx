"use client"

import Button from "@/components/Button/page";
import HomeButton from "@/components/HomeButton/HomeButton";
import React, { useState } from "react";

export default function CadastrarAulas() {

    const [classData, setClassData] = useState({
        "title": "",
        "startTime": "",
        "endTime": "",
        "startDate": "",
        "endDate": "",
        "recurrence": 1,
        "daysWeek": [] as string[],
        "observations": ""
    })

    const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const day = event.target.value

        setClassData({
            ...classData, 
            "daysWeek": classData.daysWeek.includes(day) 
                ? classData.daysWeek.filter((d) => d !== day)
                : [...classData.daysWeek, day]
        })
    };

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

    const daysWeekOptions = [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
    ]

  return (
    <div className="container-principal">

        <HomeButton />

        <h1 className="page-title">Formulário para Cadastro das Aulas</h1>

        <form onSubmit={handleSubmit} className="form-cadastro-aulas">

            <div className="container-form-field">
                <label htmlFor="title" className="form-field-label">Título</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    required 
                    className="form-field-input"
                    value={classData.title}
                    onChange={handleChange}
                />
            </div>

            <div className="container-form-field">
                <label htmlFor="startTime" className="form-field-label">Horário de Início</label>
                <input 
                    type="time" 
                    id="startTime" 
                    name="startTime" 
                    required 
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
                    required 
                    className="form-field-input"
                    value={classData.endTime}
                    onChange={handleChange}
                />
            </div>

            <div className="container-form-field">
                <label htmlFor="startDate" className="form-field-label">Data de Início do Período</label>
                <input 
                    type="date" 
                    id="startDate" 
                    name="startDate" 
                    required 
                    className="form-field-input"
                    value={classData.startDate}
                    onChange={handleChange}
                />
            </div>

            <div className="container-form-field">
                <label htmlFor="endDate" className="form-field-label">Data de Término do Período</label>
                <input 
                    type="date" 
                    id="endDate" 
                    name="endDate" 
                    required 
                    className="form-field-input"
                    value={classData.endDate}
                    onChange={handleChange}
                />
            </div>

            <div className="container-form-field">
                <label htmlFor="recurrence" className="form-field-label">Repetir a cada quantas semanas?</label>
                <input 
                    type="number" 
                    min="0" 
                    id="recurrence" 
                    name="recurrence" 
                    required 
                    className="form-field-input"
                    value={classData.recurrence}
                    onChange={handleChange}
                />
            </div>

            <div className="container-form-field">
                <label className="form-field-label">Em quais dias da semana?</label>
                <div className="form-field-options">
                    {
                        daysWeekOptions.map((day) => (
                            <label key={day} className="form-field-option">
                                <input 
                                    type="checkbox" 
                                    value={day} 
                                    onChange={handleCheckBoxChange}
                                    checked={classData.daysWeek.includes(day)}
                                    className="form-field-checkbox"
                                />
                                {day}
                            </label>
                        ))
                    }
                </div>
            </div>

            <div className="container-form-field">
                <label htmlFor="observations" className="form-field-label">Observações (Opcional)</label>
                <textarea 
                    name="observations" 
                    id="observations" 
                    className="form-field-textarea"
                    value={classData.observations}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit">Cadastrar</Button>

        </form>
    </div>
  );
}