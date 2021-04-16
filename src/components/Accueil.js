import React, {Component} from 'react'
import Typical from 'react-typical'

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import background from './bkc.jpg'

class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
             
                {/* <div id="cover" className="" style={{ backgroundImage: `url(images/bkc.jpg)` }}> */}
                <div  className="min-vh-100 min-wh-100" style={{backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                    <div className="ms-5">
                        <p className="md position-absolute end-0 fs-2 "><FaLinkedin/><FaTwitterSquare/><FaFacebookSquare/><FaInstagramSquare/></p>
                        <h1 className="titre text-dark">Bonjour, je m'appelle </h1>
                        <p className="nom "><span className="text-info">Sofiane</span> Mameri</p>
                        <p className="taille">
                            Je suis développeur full-stack {'  '}
                            <Typical className="text-danger"
                                loop={Infinity}
                                wrapper='b'
                                steps={[

                                    'en HTML & CSS',
                                    1000,
                                    'en JS avec React',
                                    1000,
                                    'et en Mysql & PHP',
                                    1000,
                                    'Bonne visite Mr !',
                                    1000,


                                ]}
                            />
                        </p>
                        {/* <img src='/images/so3.png' width='200px' alt=''/> */}

                    </div>
                </div>
            </>
         );
    }
}
 
export default Accueil;