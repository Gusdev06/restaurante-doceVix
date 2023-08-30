import { useState } from "react";
import { CardCarrinho, ModalStyleCart } from "./styles"
import Modal from "react-modal";
Modal.setAppElement("#root");



const Carrinho = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const AbrirModal = () => {
        setIsOpen(true);
    };
    
    const FecharModal = () => {
        setIsOpen(false);
    };

    
    return (
        <>

        <CardCarrinho onClick={AbrirModal}>
        <span>Meu carrinho(4)</span>
        <span>R$79,00</span>
        </CardCarrinho>
        <ModalStyleCart isOpen={modalIsOpen} onRequestClose={FecharModal}>
            
        </ModalStyleCart>

        </>


    )

}

export default Carrinho
