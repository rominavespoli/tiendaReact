import { ItemCounter } from "../ItemCounter/ItemCounter";
import Card from "react-bootstrap/Card";

const styles = {
  card: {
    padding: 30,

    img: {
      height: 40,
    },
  },
};

export const ItemDetail = ({ product, onAdd }) => {
  return (
    <div className="itemDetail">
      <Card style={{ width: "25rem" }}>
        <Card.Img style={styles.img} variant="top" src={product.image} />
        <Card.Body style={styles.card}>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Descripción: {product.description}</Card.Text>
          <Card.Text>Precio: ${product.price}</Card.Text>
          <ItemCounter stock={product.stock} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </div>
  );
};
