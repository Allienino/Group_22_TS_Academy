import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Planet Creative World logo" className="logo" />
    </header>
  );
}

export default Header;