// import Image from "next/image";

import FeatureBox from "@/components/FeatureBox/FeatureBox";

export default function Home() {
  return (
    <div className="container-principal">
      <section className="section-features">
        <FeatureBox urlFeature="/cadastro-aulas" text={"Cadastrar Aulas"}/>
        <FeatureBox urlFeature="/" text={"Lista das Aulas"}/>
      </section>
    </div>
  );
}
