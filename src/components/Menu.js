import React from 'react'
import Articles from './Articles'
import { FaHome, FaNewspaper, FaRegAddressCard, FaRegEnvelope, FaUserLock } from 'react-icons/fa';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Accueil from './Accueil';
import Admin from './Admin';
import Contact from './Contact';
import Apropos from './Apropos';
import Notfound from './Notfound';

const Menu = ()=> {
  
        return ( 
            <>
            <BrowserRouter basename="/projet3">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white navbar-fixed-top" >
                        <div className="container-fluid">
                            <NavLink className="navbar-brand " activeClassName="active" to="/accueil"><img src="/images/so3.png" width="120px" alt="" exact/></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/accueil" exact><FaHome></FaHome>  Accueil </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/apropos"><FaRegAddressCard/> A propos de moi</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/articles"><FaNewspaper></FaNewspaper> Articles</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/contact"><FaRegEnvelope/> Contact</NavLink>
                                    </li>
                                </ul>
                                <span className="navbar-text ">
                                <NavLink className="nav-link bg-info " activeClassName="active" to="/login"><FaUserLock/> Connexion</NavLink>
                                </span>
                            </div>
                        </div>
                    </nav>
            <Switch>
            <Redirect from='/login/reload' to='/login' />  
            <Route path='/apropos' component={Apropos} exact/>
            <Route path='/contact' component={Contact}/>
            <Route path='/accueil' component={Accueil} exact/>
            <Route path='/articles' component={Articles}/>
            <Route path='/login' component={Admin}/>
            <Route path='*' component={Notfound}/>
            </Switch>
            </BrowserRouter>
            </>
         );
    
}
 
export default Menu;