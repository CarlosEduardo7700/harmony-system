// import Image from "next/image";

import FeatureBox from "@/components/FeatureBox/FeatureBox";

export default function Home() {
  return (
    <div className="container-principal">
      <FeatureBox text={"Cadastrar Aulas"}/>
      <FeatureBox text={"Lista das Aulas"}/>
    </div>
  );
}
