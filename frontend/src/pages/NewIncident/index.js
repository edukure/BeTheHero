import React, {useState} from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  async function handleNewIncident(event) {
    event.preventDefault();
    const data = {
      title, 
      description,
      value
    };

    const ongId = localStorage.getItem("ongId");

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    }
    catch(error)
    {
      alert("Não foi possível cadastrar este caso. Tente novamente.")
    }
  }

    return (
      <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero" />
            <h1>Cadastrar novo caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um herói para resolver este caso.
            </p>
            <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#E024041" />
              Voltar para o início
            </Link>
          </section>
          <form onSubmit={handleNewIncident}>
            <input placeholder="Título do caso"
              value = {title}
              onChange = {e => setTitle(e.target.value)} />
            <textarea placeholder="Descrição " 
              value = {description}
              onChange = {e => setDescription(e.target.value)} 
            />
            <input placeholder="Valor em reais"
            value = {value}
              onChange = {e => setValue(e.target.value)}  />

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    );
}