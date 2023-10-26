import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className = "navbar sticky-top">
      <div className="container-fluid">
      <Link to="/">
        <img className='logo' src={require('../assets/images/logo.png')}/>
      </Link>
        <a className="navbar-brand" href="#">Calmly</a>
      </div>
      </nav>
    </header>
  )
}