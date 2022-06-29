import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <h2>Desafio Github API</h2>
          <h6>Bootcamp Spring React - DevSuperior</h6>
          <Link to="/search">
            <button className="btn btn-primary btn-lg start-button">
              Começar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
