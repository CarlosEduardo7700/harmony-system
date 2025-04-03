import ClassDataBox from "@/components/ClassDataBox/page";
import HomeButton from "@/components/HomeButton/HomeButton";

export default function ListarAulas() {

    const classList = [
        {
            "id": 1,
            "startTime": "10:00", 
            "endTime": "12:00", 
            "classDate": "2025-01-01", 
            "observations": "Primeira Aula"
        },
        {
            "id": 2,
            "startTime": "10:00", 
            "endTime": "12:00", 
            "classDate": "2025-01-08", 
            "observations": "Segunda Aula"
        },
        {
            "id": 3,
            "startTime": "10:00", 
            "endTime": "12:00", 
            "classDate": "2025-01-15", 
            "observations": "Terceira Aula"
        },
        {
            "id": 4,
            "startTime": "10:00", 
            "endTime": "12:00", 
            "classDate": "2025-01-22", 
            "observations": "Quarta Aula"
        },
    ]

  return (
    <div className="container-principal">
      <HomeButton />
      
      <h1 className="page-title">Lista das Aulas</h1>

      {
        classList.map((classData, index) => (
            <ClassDataBox 
                key={classData.id} 
                classNumber={index + 1} 
                classDataNow={classData}
            />
        ))
      }

    </div>
  );
}