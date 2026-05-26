import { Button, Container } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useCart();
  const { token } = useUser();

  return (
    <Container className="py-5">
      <div className="cart-box shadow-sm">
        <h2 className="mb-4">Detalles del pedido:</h2>

        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          cart.map((pizza) => (
            <div
              key={pizza.id}
              className="cart-item d-flex align-items-center justify-content-between border-bottom py-3"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={pizza.img}
                  alt={`Pizza ${pizza.name}`}
                  className="cart-img"
                />

                <span className="text-capitalize">{pizza.name}</span>
              </div>

              <div className="d-flex align-items-center gap-3">
                <strong>${formatPrice(pizza.price)}</strong>

                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => decreaseQuantity(pizza.id)}
                >
                  -
                </Button>

                <span>{pizza.count}</span>

                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => increaseQuantity(pizza.id)}
                >
                  +
                </Button>
              </div>
            </div>
          ))
        )}

        <h2 className="mt-4">Total: ${formatPrice(total)}</h2>

        <Button
          variant="dark"
          className="mt-3"
          disabled={cart.length === 0 || !token}
        >
          Pagar
        </Button>

        {!token && (
          <p className="text-muted mt-3">
            Debes iniciar sesión para poder pagar.
          </p>
        )}
      </div>
    </Container>
  );
};

export default Cart;