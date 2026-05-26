import { Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container className="py-5">
      <Card className="profile-card shadow-sm mx-auto">
        <Card.Body>
          <Card.Title className="fs-2 mb-4">Perfil de usuario</Card.Title>

          <Card.Text>
            <strong>Email:</strong> usuario@pizzeriamammamia.cl
          </Card.Text>

          <Button variant="dark" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;