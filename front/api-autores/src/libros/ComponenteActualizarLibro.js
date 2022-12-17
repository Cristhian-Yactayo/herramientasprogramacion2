import { useParams } from "react-router-dom";

export default function ComponenteActualizarLibro(){
    //Creamos una variable para apturar el codigo que se va actualizar
    const {id} =useParams();
    return(
        <div>
            <h1>Actualizacion de Libros</h1>
            <h2>El id es: {id}</h2>
            <form className="form-control">
                <div className="row">

  <div className="col-6">
    <label class="form-label">Nombre:</label>
    <input type="text" className="form-control" id="txtNom" required/>
  </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <label className="form-label">Autor:</label>
                        <select className="form-select" id="cboAutor">
                            <option selected>Seleccione un autor</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className="row">
    <div className="col-6">
        <label class="form-label">Estado:</label>
        <div className="col-6 form-check">
            <input type="checkbox" className="form-check-input" id="chkEstado"/>
            <label class="form-check-label">Habilitado</label>
        </div>
    </div>
  
                </div>

                <div className="row">
    <div className="col-6">
  <button type="submit" className="btn btn-success">Actualizar</button>
                </div>
    </div>
</form>
        </div>
    );
}