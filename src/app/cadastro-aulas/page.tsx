export default function Home() {
  return (
    <div className="container-principal">
        <form action="" className="form-cadastro-aulas">

            <div className="container-form-field">
                <label htmlFor="title" className="form-field-label">Título</label>
                <input type="text" id="title" name="title" required className="form-field-input"/>
            </div>

            <div className="container-form-field">
                <label htmlFor="start-time" className="form-field-label">Horário de Início</label>
                <input type="time" id="start-time" name="start-time" required className="form-field-input"/>
            </div>

            <div className="container-form-field">
                <label htmlFor="end-time" className="form-field-label">Horário de Término</label>
                <input type="time" id="end-time" name="end-time" required className="form-field-input"/>
            </div>

            <div className="container-form-field">
                <label htmlFor="start-date" className="form-field-label">Data de Início do Período</label>
                <input type="date" id="start-date" name="start-date" required className="form-field-input"/>
            </div>

            <div className="container-form-field">
                <label htmlFor="end-date" className="form-field-label">Data de Término do Período</label>
                <input type="date" id="end-date" name="end-date" required className="form-field-input"/>
            </div>

            <div className="container-form-field">
                <label htmlFor="recurrence" className="form-field-label">Repetir a cada quantas semanas?</label>
                <input type="number" id="recurrence" name="recurrence" required className="form-field-input"/>
            </div>

            <div className="container-form-field">
                <label className="form-field-label">Em quais dias da semana?</label>
                <div className="form-field-options">
                    <label className="form-field-option"><input type="checkbox" value="" className="form-field-checkbox"/>Segunda</label>
                    <label className="form-field-option"><input type="checkbox" value="" className="form-field-checkbox"/>Terça</label>
                    <label className="form-field-option"><input type="checkbox" value="" className="form-field-checkbox"/>Quarta</label>
                    <label className="form-field-option"><input type="checkbox" value="" className="form-field-checkbox"/>Quinta</label>
                    <label className="form-field-option"><input type="checkbox" value="" className="form-field-checkbox"/>Sexta</label>
                    <label className="form-field-option"><input type="checkbox" value="" className="form-field-checkbox"/>Sábado</label>
                    <label className="form-field-option"><input type="checkbox" value="" className="form-field-checkbox"/>Domingo</label>
                </div>
            </div>

            <div className="container-form-field">
                <label htmlFor="observations" className="form-field-label">Observações (Opcional)</label>
                <textarea name="observations" id="observations" className="form-field-textarea"></textarea>
            </div>

            <button className="form-button">Cadastrar</button>

        </form>
    </div>
  );
}