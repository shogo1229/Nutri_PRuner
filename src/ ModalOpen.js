import Modal from "react-modal";
import GallerySelect from "./Gallery";
import React from "react";

Modal.setAppElement("#root");

const ModalOpen = ({ Menu, closeModalFn }) => {
	return (
		<div className="App">
		<Modal
			className="modal fixed right-0 top-0 bottom-0 w-1/2 bg-white overflow-y-auto"
			isOpen={true}
			onRequestClose={closeModalFn}
			shouldCloseOnOverlayClick={true}
		>
			<GallerySelect SelectMenu={Menu} />
		</Modal>
		</div>
	);
};


export default ModalOpen;
