import { useEffect } from "react";
import { useState } from "react";
import data from "../../data/products.json";
import { useParams } from "react-router-dom";
import {ItemList} from "../ItemList/ItemList";

 
export const ItemListContainer = () => {
	const [products, setProducts] = useState([])
	const { id } = useParams()
console.log(id)


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


{/*
export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { id } = useParams()

    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect (() => {    
    getProducts()
        .then ( (res) => {
            setProducts(res);
        })
    }, [])
    return (

        <div>
            <ItemList products={products}/>
          
        </div>
    )
}

*/}