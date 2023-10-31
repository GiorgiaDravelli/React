import relax from '../../assets/images/relax-removebg.png'
import { Link } from "react-router-dom";
import "./Home.css"
import { HelmetProvider } from 'react-helmet-async';

export const Home = () => {

  return (
    <section>
      <HelmetProvider>
        <title>Calmly - Home</title>
        <meta name='Home Page' content='Calm your mind...' />
      </HelmetProvider>
      <div className='container'>
        <div className="quote-container">
          <p className="card-text ">“The part can never be well unless the whole is well.” <p className="plato">Plato</p></p>
          <Link to="/timerpage">
          <button type="button" className="btn btn-meditate btn-outline-dark">Meditate</button>
          </Link>
        </div>
        <div className='img-container'>
          <img src={relax} className="relax img-fluid" alt="relax"/>
          </div>
      </div>
    </section>
    
  )
}