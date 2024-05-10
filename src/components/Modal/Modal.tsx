import {FC, ReactNode} from 'react';


type ModalInvitationProps = {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
};

const Modal: FC<ModalInvitationProps> = ({ show, onClose, children, title  }) => {

  return (
    <div style={{ display: show ? 'block' : 'none', zIndex : '9999'}} id="crypto-modal" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 background-secondary-color p-1 rounded shadow w-[400px]">
      <div className="relative w-full max-w-md max-h-full">

       {/*Modal content */}
        <div className="relative background-third-color rounded-lg shadow">
          <button type="button" onClick={onClose} className="cursor-pointer absolute top-3 right-2.5 text-secondary-color bg-transparent hover:bg-gray-200 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-red-500" data-modal-hide="crypto-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          {/* Modal header*/}
          <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-base font-bold text-secondary-color lg:text-xl">
              {title}
            </h3>
          </div>

          {/*Modal body*/}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
