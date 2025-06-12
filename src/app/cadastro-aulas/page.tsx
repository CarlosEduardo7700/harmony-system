"use client";

import HomeButton from "@/components/HomeButton/HomeButton";
import React from "react";
import FeatureBox from "@/components/FeatureBox/FeatureBox";

export default function FormulariosParaCadastrarAula(): React.JSX.Element {

    return (
        <div className="container-principal justify-start">
            <div className="flex w-full">
                <HomeButton />
            </div>

            <h1 className="page-title">Formulários para Cadastro das Aulas</h1>

            <section className="section-features">
                <FeatureBox urlFeature="/cadastro-aulas/unica" text={"Cadastro de Aula Única"}/>
                <FeatureBox urlFeature="/cadastro-aulas/com-recorrencia" text={"Cadastro com Recorrência"}/>
            </section>
        </div>
    );
}