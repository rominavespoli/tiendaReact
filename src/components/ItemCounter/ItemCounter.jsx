import { useState, useEffect } from "react"

export const ItemCounter = ({ stock, onAdd }) => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		if (counter > 0) onAdd(stock - counter)
	}, [counter])

	const handlerIncreaseCount = () => {
		if (stock > counter) setCounter(counter + 1)
	}

	const handlerDecreaseCount = () => {
		if (counter > 0) setCounter(counter - 1)
	}

	return (
		<div>
			<button onClick={handlerIncreaseCount}>+</button>
			{counter}
			<button onClick={handlerDecreaseCount}>-</button>
		</div>
	)
}