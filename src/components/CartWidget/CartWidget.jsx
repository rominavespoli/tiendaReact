import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = ({contador}) => {
    return(
        <div className="cart">
            <FaShoppingCart/> <span>{contador}</span>
        </div>
    )

    }
