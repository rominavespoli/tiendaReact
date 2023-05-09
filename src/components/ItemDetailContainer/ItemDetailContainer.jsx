import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import products from "../../data/products.json";


export const ItemDetailContainer = ({ onAdd }) => {
	const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const getItem = new Promise((resolve, reject) => {
			
		const product = products.find(item => item.id === parseInt(id))
		resolve(product)
			
		})
		getItem.then(result => setProduct(result))
	}, [id])

	return (
		
			<ItemDetail product={product} onAdd={onAdd} />
	
	)
}