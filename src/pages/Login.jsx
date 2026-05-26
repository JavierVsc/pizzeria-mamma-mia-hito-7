import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const { login } = useUser();
  const navigate = useNavigate();

  const validarLogin = (evento) => {
    evento.preventDefault();

    if (!email.trim() || !password.trim()) {
      setTipoMensaje("danger");
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setTipoMensaje("danger");
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setTipoMensaje("success");
    setMensaje("Login exitoso");

    login();

    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <Container className="py-5 form-container">
      <h1 className="mb-4">Login</h1>

      {mensaje && <Alert variant={tipoMensaje}>{mensaje}</Alert>}

      <Form onSubmit={validarLogin}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(evento) => setPassword(evento.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p className="mt-4">
        ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </Container>
  );
};

export default Login;