import '../styles/Footer.css';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h5>Dołącz do naszego newslettera!</h5>
          <p>Zasubskrybuj nasz newsletter i otrzymaj 10% zniżki na pierwsze zamówienie</p>
          <div className="subscription-form">
            <form>
              <input type="email" placeholder="Twój adres email..." />
              <button type="submit">Subskrybuj</button>
            </form>
          </div>
        </div>
        <div className="logos">
        <h1>Vite + React</h1>
          <div className="logo-container">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
