import './modal.css';

interface Props {
    modalData: object;
    isOpen: boolean;
    onClose: () => void;
}

function preventClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
}

function Modal({ modalData, isOpen, onClose }: Props) {
    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={preventClose}>
                {JSON.stringify(modalData)}
            </div>
        </div>

    )
}

export default Modal;