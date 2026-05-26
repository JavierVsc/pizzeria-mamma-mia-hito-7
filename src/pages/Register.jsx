import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const validarRegistro = (evento) => {
    evento.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setTipoMensaje("danger");
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setTipoMensaje("danger");
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setTipoMensaje("danger");
      setMensaje("Las contraseñas no coinciden");
      return;
    }

    setTipoMensaje("success");
    setMensaje("Registro exitoso");
  };

  return (
    <Container className="py-5 form-container">
      <h1 className="mb-4">Register</h1>

      {mensaje && <Alert variant={tipoMensaje}>{mensaje}</Alert>}

      <Form onSubmit={validarRegistro}>
        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(evento) => setPassword(evento.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerConfirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(evento) => setConfirmPassword(evento.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <p className="mt-4">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login">Inicia sesión aquí</Link>
      </p>
    </Container>
  );
};

export default Register;