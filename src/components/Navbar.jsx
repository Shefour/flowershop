import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Strona Główna</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/sklep">Sklep</a></li>
        <li><a href="/koszyk">Koszyk</a></li>
        <li><a href="/konto">Konto</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
