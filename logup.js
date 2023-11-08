import NavBar from "../Components/navBar";

function Login() {
  function enviarDatos(event) {
    event.preventDefault();

    //validar
    fetch("/login", {
      method: "post",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        Nombres: document.getElementById("Nombres").value,
        Apellidos: document.getElementById("Apellidos").value,
        Direccion: document.getElementById("Direccion").value,
        Correo: document.getElementById("Correo").value,
        Numero: document.getElementById("Numero").value,
      }),
    });
  }
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <form className="col-4 d-flex flex-column justify-content-center" onSubmit={enviarDatos}>
          <label>Nombres:</label>
          <input id="Nombres"></input>
          <label>Apellidos:</label>
          <input id="Apellidos"></input>
          <label>Direccion:</label>
          <input id="Diereccion"></input>
          <label>Correo:</label>
          <input id="Correo"></input>
          <label>Numero:</label>
          <input id="Numero"></input>
          <input type="submit" value="Iniciar sesion"></input>
        </form>
      </div>
    </>
  );
}
export default Login;
