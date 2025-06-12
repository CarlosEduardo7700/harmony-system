"use client";

import HomeButton from "@/components/HomeButton/HomeButton";
import React from "react";
import NavBox from "@/components/NavBox/NavBox";

export default function FormulariosParaCadastrarAula(): React.JSX.Element {

    return (
        <div className="container-principal justify-start">
            <div className="flex w-full">
                <HomeButton />
            </div>

            <h1 className="page-title">Formulários para Cadastro das Aulas</h1>

            <section className="section-nav">
                <NavBox url="/cadastro-aulas/unica" text={"Cadastro de Aula Única"}/>
                <NavBox url="/cadastro-aulas/com-recorrencia" text={"Cadastro com Recorrência"}/>
            </section>
        </div>
    );
}