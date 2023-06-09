import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const styles = {
    card: {
        padding: 30,
        
    img: {
        height: 40,
    }    
    }
}


export const Item = ({products}) => (

    <Card style={{ width: '25rem' }} >
      <Card.Img style={styles.img} variant="top" src={products.image} />
      <Card.Body style={styles.card}>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text>Categoria: {products.category}</Card.Text>
        <Card.Text>Precio: ${products.price}
        </Card.Text>
        <Link to={`/item/${products.id}`}>
				<Button variant="primary">Ver detalles</Button>
			</Link>
      </Card.Body>
    </Card>
)
