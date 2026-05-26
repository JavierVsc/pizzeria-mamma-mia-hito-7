import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const pizza = {
      id,
      name,
      price,
      ingredients,
      img,
      desc,
    };

    addToCart(pizza);
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={img}
        alt={`Pizza ${name}`}
        className="pizza-card-img"
      />

      <Card.Body>
        <Card.Title className="fs-3 text-capitalize">Pizza {name}</Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-muted fs-5">
          Ingredientes:
        </ListGroup.Item>

        <ListGroup.Item>
          {ingredients.map((ingredient) => (
            <div key={ingredient}>🍕 {ingredient}</div>
          ))}
        </ListGroup.Item>

        <ListGroup.Item>
          <strong className="fs-4">Precio: ${formatPrice(price)}</strong>
        </ListGroup.Item>
      </ListGroup>

      <Card.Body className="d-flex justify-content-between">
        <Button as={Link} to={`/pizza/${id}`} variant="outline-dark">
          Ver más
        </Button>

        <Button variant="dark" onClick={handleAddToCart}>
          Añadir 🛒
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;