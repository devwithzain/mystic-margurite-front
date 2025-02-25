import { IoMdClose } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";

interface TModalProps {
	isOpen: boolean; // Controls whether the modal is open or closed
	onClose: () => void; // Function to close the modal
	children: React.ReactNode; // Content to be displayed inside the modal
}

export default function Modal({ isOpen, onClose, children }: TModalProps) {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300); // Delay to allow for animation
	}, [onClose]);

	if (!isOpen) {
		return null; // Don't render the modal if it's not open
	}

	return (
		<div
			className="
        fixed 
        inset-0 
        z-50 
        flex 
        items-center 
        justify-center 
        bg-neutral-800/70
      ">
			<div
				className="
          relative 
          w-full 
          max-w-lg 
          mx-4 
          my-6 
          bg-white 
          rounded-lg 
          shadow-lg
        ">
				{/* Close Button */}
				<button
					className="
            absolute 
            top-4 
            right-4 
            p-1 
            border-0 
            hover:opacity-70 
            transition
          "
					onClick={handleClose}>
					<IoMdClose size={18} />
				</button>

				{/* Modal Content */}
				<div className="p-6">{children}</div>
			</div>
		</div>
	);
}
