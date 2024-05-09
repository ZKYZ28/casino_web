import {NavLink} from "react-router-dom";
import leprechaun from "../../assets/backgrounds/leprechaun.png";
function Header() {

    return (
        <header className="background-primary-color h-[12.5vh] sticky flex items-center justify-between px-12" style={{borderBottom : '1px solid #282b30'}}>
            <img src={leprechaun} className={'w-24'} />

            <nav>

            </nav>

            <div>
                <NavLink to={'/'}>
                    <button className="button shadow-lg shadow-red-500/30 hover:shadow-red-500/60 mr-4">
                        <span className="button-text">Login</span>
                    </button>
                </NavLink>


                <NavLink to={'/'}>
                    <button className="button shadow-lg shadow-red-500/30 hover:shadow-red-500/60">
                        <span className="button-text">Sign Up</span>
                    </button>
                </NavLink>
            </div>

        </header>
    );
}

export default Header;
