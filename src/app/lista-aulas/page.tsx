import ClassDataBox from "@/components/ClassDataBox/page";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function ListarAulas() {

    const classList = [
        {
            "id": 1,
            "startTime": "10:00", 
            "endTime": "12:00", 
            "date": "2025-01-01", 
        },
        {
            "id": 2,
            "startTime": "10:00", 
            "endTime": "12:00", 
            "date": "2025-01-08", 
        },
        {
            "id": 3,
            "startTime": "10:00", 
            "endTime": "12:00", 
            "date": "2025-01-15", 
        },
        {
            "id": 4,
            "startTime": "10:00", 
            "endTime": "12:00", 
            "date": "2025-01-22", 
        },
    ]

  return (
    <div className="container-principal">
      <Link href="/" className="back-home-button"><FaHome size={30}/></Link>
      
      <h1 className="page-title">Lista das Aulas</h1>

      {
        classList.map((classData, index) => (
            <ClassDataBox 
                key={classData.id} 
                classNumber={index + 1} 
                startTime={classData.startTime} 
                endTime={classData.endTime} 
                date={classData.date}
            />
        ))
      }

    </div>
  );
}