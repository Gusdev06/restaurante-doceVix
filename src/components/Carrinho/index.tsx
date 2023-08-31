import { useState } from "react";
import { CardCarrinho, ModalButton, ModalStyleCart, ModalTitle } from "./styles"
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
            <div>
                <ModalTitle>Carrinho</ModalTitle>
                <ModalButton>Retirada no balcão</ModalButton>
                <ModalButton>Delivery</ModalButton>
                
            </div>
        </ModalStyleCart>

        </>


    )

}

export default Carrinho
