import './sideBar.css';
interface Props {
    cartOpen: boolean,
    setCartOpen: (arg0: boolean) => void
    onCartClose: () => void;
}
function preventClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
}

export default function SideBar({ cartOpen, setCartOpen, onCartClose }: Props) {
    if (!cartOpen) return null;
    return (
        <div className="modal-overlay" onClick={onCartClose}>
        <div className='sidebar-card'>
        <button className='close-button' onClick={() => setCartOpen(false)}>X</button>
        </div>
        </div>
    )
}