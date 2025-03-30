interface FeatureBoxProps {
    classNumber: number;
    startTime: string;
    endTime: string;
    date: string;
}

export default function ClassDataBox({classNumber, startTime, endTime, date}: FeatureBoxProps) {
    return (
        <div className="container-class-data">
            <div className="class-detail">
                <h1>{classNumber}° Aula</h1>
                <h1>{startTime}</h1>
                <h1>{endTime}</h1>
                <h1>{date}</h1>
            </div>
            <div className="class-features">
                <h1>Editar</h1>
            </div>
        </div>
    );
}