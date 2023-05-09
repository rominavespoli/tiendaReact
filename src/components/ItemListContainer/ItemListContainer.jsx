import { useEffect } from "react";
import { useState } from "react";
import data from "../../data/products.json";
import { useParams } from "react-router-dom";
import {ItemList} from "../ItemList/ItemList";

 
export const ItemListContainer = () => {
	const [products, setProducts] = useState([])
	const { id } = useParams()



	useEffect(() => {
		const productList = new Promise((resolve, reject) => {
				resolve(data)
				})
		productList.then(result => {
			if (id) {
				const productsFiltered = result.filter(
					item => item.category === id
				)
				setProducts(productsFiltered)
			} else {
				setProducts(result)
			}
		})
	}, [id])

	return (
		<div className="itemList">
			<ItemList products={products} />
		</div>
	)
}

