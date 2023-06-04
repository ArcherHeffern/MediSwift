import "./card.css";
import { Product } from "../types";

interface Props {
    product_name: string;
    data: Product[];
    isSeller: boolean;
    openModal: (arg0: string) => void;
    setQuantity: (name: string, newQuantity: number) => void;
}

function Card({ product_name, data, openModal, isSeller, setQuantity }: Props) {
    const product = data.filter((item) => item.name === product_name)[0];
    const url = `./images/${product.name.toLowerCase()}.jpg`;

    function incrementQuantity(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation();
        setQuantity(product.name, product.quantity + 1);
    }

    function decrementQuantity(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation(); 
        if (product.quantity === 0) return;
        setQuantity(product.name, product.quantity - 1);
    }
    return (
            <div className="card-wrapper" onClick={() => openModal(product.name)}>
                <h3 className="card-name">{product.name || "drug"}</h3>
                <div className="card-image">
                    <img src={url} alt={product.name.toLowerCase()} />
                </div>
                <div className="card-detail" >
                    <p>Price: {product.price}</p>
                    {isSeller && <button onClick={incrementQuantity}>Add</button>}
                    <p>Quantity: {product.quantity}</p>
                    {isSeller && <button onClick={decrementQuantity}>Remove</button>}
                </div>
            </div>
    );

}


export default Card;


