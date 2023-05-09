import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {products.length > 0 && products.map((products) => {
          return <Item key={products.id} products={products} />;
        })}
      
    </div>
  );
};
