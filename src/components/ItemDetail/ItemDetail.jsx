import { ItemCounter } from "../ItemCounter/ItemCounter"

export const ItemDetail = ({ products, onAdd }) => {
	return (
		<div className="itemDetail">
			<h2>detalles</h2>
			<h1>{products.name}</h1>
			<img src={products.image} alt={products.name} />
			<p>$ {products.price}</p>
			<ItemCounter stock={products.stock} onAdd={onAdd} />
		</div>
	)
}