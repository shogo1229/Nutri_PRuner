import Modal from "react-modal";

const ModalOpen_First = ({closeModalFn}) => {
	console.log("first fuck")
	return (
		<Modal   
			className="modal fixed right-0 top-0 bottom-0 w-1/2 bg-[#000000] overflow-y-auto"
			isOpen={true}
			onRequestClose={closeModalFn}
			shouldCloseOnOverlayClick={false}>
		
	  {/* ここに処理を書くんやで */}
		</Modal>
	);
};

export default ModalOpen_First;
