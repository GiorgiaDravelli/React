import relax from '../assets/images/relax-removebg.png'
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <section>
      <div className='container'>
        <div className="quote-container">
          <p className="card-text ">“The part can never be well unless the whole is well.” <p className="plato">Plato</p></p>
          <Link to="/timerpage">
          <button type="button" className="btn btn-outline-dark">Meditate</button>
          </Link>
        </div>
        <div className='img-container'>
          <img src={relax} className="relax img-fluid" alt="relax"/>
          </div>
      </div>
    </section>
    
  )
}