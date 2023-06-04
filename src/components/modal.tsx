import './modal.css';
import { Product } from '../types.ts';

interface Props {
    product_name: string;
    data: Product[];
    isOpen: boolean;
    onClose: () => void;
    setQuantity: (name: string, newQuantity: number) => void;
}


function preventClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
}

function Modal({ product_name, data, isOpen, onClose, setQuantity }: Props) {
    if (!isOpen) return null

    const product = data.filter((item) => item.name === product_name)[0]

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={preventClose}>
                <div className="image-container"></div>
                <div className='info-section'>
                    <h3>Name: {product.name}</h3>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={() => setQuantity(product.name, product.quantity +1)}>Buy</button>
                </div>
            </div>
        </div>

)
}

export default Modal;