import React, {useState} from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

import api from "../../services/api";

// images
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {

  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(event){
    event.preventDefault();
    
    try {
      const response = await api.post("sessions", {id});
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("profile");
    }
    catch(error){
      alert("ONG não encontrada. Tente novamente.")
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E024041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="heroes" />
    </div>
  );
}
