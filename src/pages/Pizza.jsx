import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Container, Alert, Spinner } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";
import { getPizzaImage } from "../utils/pizzaImages";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();

  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  const getPizza = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://pizzeria-mamma-mia-api-hito-4.onrender.com/api/pizzas/${id}`
      );

      if (!response.ok) {
        throw new Error("No se pudo cargar la pizza");
      }

      const data = await response.json();

      const pizzaWithImage = {
        ...data,
        img: getPizzaImage(data.id, data.img),
      };

      setPizza(pizzaWithImage);
    } catch (error) {
      setError("Error al cargar la pizza desde la API");
      setPizza(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPizza();
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
        <p className="mt-3">Cargando pizza...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card className="pizza-detail-card shadow-sm">
        <div className="pizza-detail-layout">
          <img
            src={pizza.img}
            alt={`Pizza ${pizza.name}`}
            className="pizza-detail-img"
          />

          <Card.Body>
            <Card.Title className="fs-2 text-capitalize">
              Pizza {pizza.name}
            </Card.Title>

            <Card.Text>{pizza.desc}</Card.Text>

            <h5>Ingredientes:</h5>

            <ul>
              {pizza.ingredients.map((ingredient) => (
                <li key={ingredient}>🍕 {ingredient}</li>
              ))}
            </ul>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <h3>Precio: ${formatPrice(pizza.price)}</h3>

              <Button variant="dark" onClick={() => addToCart(pizza)}>
                Añadir 🛒
              </Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
};

export default Pizza;