"use client";

import ClassDataBox from "@/components/ClassDataBox/page";
import HomeButton from "@/components/HomeButton/HomeButton";
import { Lesson } from "@/types/lesson.type";
import { useEffect, useState } from "react";

export default function ListarAulas(): React.JSX.Element {
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [month, setMonth] = useState(`${new Date().getMonth() + 1}`);
    const [year, setYear] = useState(`${new Date().getFullYear()}`);

    useEffect(() => {
        const getLessons = async (): Promise<void> => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lesson?month=${month}&year=${year}`);
            const responseBody = await response.json();
            setLessons(responseBody);
        };

        getLessons();
    }, [month, year]);

    return (
        <div className="container-principal justify-start">
            <HomeButton />
      
            <h1 className="page-title">Lista das Aulas</h1>

            <div className="container-filter">
                <div className="container-field-filter">
                    <label htmlFor="" className="filter-field-label">Mês</label>
                    <input type="number" min="1" max="12" className="filter-field-input" value={month} onChange={(e) => setMonth(e.target.value)}/>
                </div>
                <div className="container-field-filter">
                    <label htmlFor="" className="filter-field-label">Ano</label>
                    <input type="number" min="2000" max="2100" className="filter-field-input" value={year} onChange={(e) => setYear(e.target.value)}/>
                </div>
            </div>

            {
                lessons.map((classData, index) => (
                    <ClassDataBox 
                        key={classData.id} 
                        classNumber={index + 1} 
                        classDataNow={classData}
                    />
                ))
            }

            { lessons.length === 0 && (
                <p className="font-bold mt-5">Não há aulas agendadas para esse mês!</p>
            ) }

        </div>
    );
}