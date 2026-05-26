import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="py-5 text-center">
      <div className="not-found-box shadow-sm">
        <h1 className="display-4">404</h1>

        <h2>La página que buscas no existe</h2>

        <p className="mt-3">
          Parece que la ruta ingresada no corresponde a ninguna sección de la pizzería.
        </p>

        <Button as={Link} to="/" variant="dark" className="mt-3">
          Volver al inicio
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;