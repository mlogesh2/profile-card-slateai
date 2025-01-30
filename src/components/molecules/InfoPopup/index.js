import SimpleButton from "@/components/atoms/SimpleButton";

const InfoPopup = ({ isOpen, onClose, content, title }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-gray-700">{content}</p>
                <SimpleButton callbackFn={onClose} classes="mt-4 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Close
                </SimpleButton>
            </div>
        </div>
    );
};

export default InfoPopup;
