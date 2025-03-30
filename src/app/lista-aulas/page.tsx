import ClassDataBox from "@/components/ClassDataBox/page";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function ListarAulas() {

    const classList = [
        {
            "startTime": "10:00", 
            "endTime": "12:00", 
            "date": "2025-01-01", 
        },
        {
            "startTime": "10:00", 
            "endTime": "12:00", 
            "date": "2025-01-08", 
        },
    ]

  return (
    <div className="container-principal">
      <Link href="/" className="back-home-button"><FaHome size={30}/></Link>
      
      <ClassDataBox classNumber={1} startTime="00:00" endTime="00:00" date="00/00/0000"/>
      <ClassDataBox classNumber={2} startTime="00:00" endTime="00:00" date="00/00/0000"/>
      
    </div>
  );
}