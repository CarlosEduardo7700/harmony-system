// import Image from "next/image";

import NavBox from "@/components/NavBox/NavBox";
import React from "react";

export default function Home(): React.JSX.Element {
    return (
        <div className="container-principal">
            <section className="section-nav">
                <NavBox url="/cadastro-aulas" text={"Cadastrar Aulas"}/>
                <NavBox url="/lista-aulas" text={"Lista das Aulas"}/>
            </section>
        </div>
    );
}
