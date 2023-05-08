import { ItemCounter } from "../ItemCounter/ItemCounter"


export const ItemDetail = ({ product, onAdd }) => {

	
	return (
		<div className="itemDetail">
			<h2>Detalles del juego</h2>
			
			<h1>{product.name}</h1>
			<img className="imgDetail" src={product.image} alt={product.name} />
			<p>$ {product.price}</p>
			<ItemCounter stock={product.stock} onAdd={onAdd} />
		</div>
	)
}

