import React from "react";
import Modal from "react-modal";
import GallerySelect  from "./Gallery";
Modal.setAppElement("#root");

const ModalOpen = ({Menu}) => {
	const [modalIsOpen, setIsOpen] = React.useState(true);
	
	const closeModal = ()=> {
		setIsOpen(false)
	}
	return (
		<div className="App">
				<Modal className="modal fixed right-0 top-0 bottom-0 w-1/2 bg-white overflow-y-auto" 
					isOpen={modalIsOpen} 
					onRequestClose={closeModal}>
					<GallerySelect SelectMenu={Menu}/>
				</Modal>
		</div>
				
		);
}
export default ModalOpen