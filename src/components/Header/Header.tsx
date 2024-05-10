
import leprechaun from "../../assets/backgrounds/leprechaun.png";
import Modal from "../Modal/Modal.tsx";
import {useState} from "react";
import FormInput from "../Common/FormInput.tsx";
import { useLoginLogic } from './LoginTreatment.ts';

function Header() {
    const { handleSubmit, emailInput, passwordInput, handleChangeEmail, handleChangePassword, inputEmail, inputPassword } = useLoginLogic();
    const [showModalLogin, setShowModalLogin] = useState(false);
    const closeModalConfirmation = (): void => {
        setShowModalLogin(false);
    };

    const openModalConfirmation = (): void => {
        setShowModalLogin(true);
    };

    return (
        <div>
            <header className="background-primary-color h-[12.5vh] sticky flex items-center justify-between px-12"
                    style={{borderBottom: '1px solid #282b30'}}>
                <img src={leprechaun} className={'w-24'}/>

                <nav>

                </nav>

                <div>
                    <button onClick={openModalConfirmation}
                            className="button shadow-lg shadow-red-500/30 hover:shadow-red-500/60 mr-4">
                        <span className="button-text">Login</span>
                    </button>

                    <button className="button shadow-lg shadow-red-500/30 hover:shadow-red-500/60">
                        <span className="button-text">Sign Up</span>
                    </button>
                </div>
            </header>

            {/*LOGIN MODAL*/}
            <Modal show={showModalLogin} onClose={closeModalConfirmation} title={'Confirmation'}>
                <div className="flex flex-col justify-center items-center w-full">
                    <form onSubmit={handleSubmit}>
                        <FormInput {...inputEmail} value={emailInput} onChange={handleChangeEmail}/>

                        <FormInput {...inputPassword} value={passwordInput} onChange={handleChangePassword}/>

                        <div className="flex justify-center">
                            <button type="submit"
                                    className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full">
                                Se connecter
                            </button>
                        </div>
                    </form>

                </div>
            </Modal>
        </div>

    );
}

export default Header;
