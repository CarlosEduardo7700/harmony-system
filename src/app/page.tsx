// import Image from "next/image";

import FeatureBox from "@/components/FeatureBox/FeatureBox";
import React from "react";

export default function Home(): React.JSX.Element {
    return (
        <div className="container-principal">
            <section className="section-features">
                <FeatureBox urlFeature="/cadastro-aulas" text={"Cadastrar Aulas"}/>
                <FeatureBox urlFeature="/lista-aulas" text={"Lista das Aulas"}/>
            </section>
        </div>
    );
}
