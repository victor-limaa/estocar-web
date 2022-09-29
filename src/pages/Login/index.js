import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api";
import "./styles.css";
import logo from "./../../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const login = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const res = await api.post("login", { email, password });

        localStorage.setItem("authorization-token", res.data);

        return history.push("/home");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="myBg">
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <div className="d-flex flex-column align-items-center justify-content-center centralize">
                <img src={logo} className="mb-5" />

                <form className="form-group">
                  <input
                    className="form-control mb-5 mt-5 input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleEmail}
                  />
                  <input
                    className="form-control input"
                    type="password"
                    placeholder="Senha"
                    name="senha"
                    onChange={handlePassword}
                  />
                  <br />
                  <button onClick={login} className="btn myBtn">
                    Entrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
