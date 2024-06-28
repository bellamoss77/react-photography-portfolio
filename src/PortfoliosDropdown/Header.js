import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <img src="./LOGO.png" className="logo" id="logo" />
                <Navbar />
            </div>
        </header>
    );
};

export default Header;