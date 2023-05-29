import React from "react";
import Modal from "react-modal";
import GallerySelect  from "./Gallery";
Modal.setAppElement("#root");

const ModalOpen = ({Menu}) => {
	const [modalIsOpen, setIsOpen] = React.useState(true);
	return (
		<div className="App">
				<Modal className="modal fixed right-0 top-0 bottom-0 w-1/2 bg-white" isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
					<button onClick={() => setIsOpen(false)}>Button</button>
					<GallerySelect SelectMenu={Menu}/>
				</Modal>
		</div>
				
		);
}
export default ModalOpen