import React, { Component } from 'react';
import { FiMail, FiSmartphone } from 'react-icons/fi';
import { BiBeenHere } from 'react-icons/bi';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        return (

            <>
            <div className="container mt-5 mb-5 bg-light"style={{boxShadow:"10px 15px 10px 10px rgba(0, 0, 0, 0.2)"}}>
            <div className="row ">
                    <section className="col-sm">
                        <form>
                            <h1 className="text-info text-center">Formulaire d'inscription</h1>
                            <div>
                                <label for="name" className="col-form-label">Nom :</label>
                                <input type="text" id="name" name="user_name" className="form-control" />
                            </div>
                            <div>
                                <label for="last_name" className="form-check-label">Prénom :</label>
                                <input type="text" id="last_name" name="user_last_name" className="form-control" />
                            </div>
                            <div>
                                <label for="telephone" className="form-check-label">Téléphone :</label>
                                <input type="tel" id="telephone" name="user_telephone" className="form-control" />
                            </div>
                            <div>
                                <label for="mail" className="form-check-label">e-mail :</label>
                                <input type="email" id="mail" name="user_mail" className="form-control" />
                            </div>
                            <div>
                                <label for="msg" className="form-check-label">Message :</label>
                                <textarea id="msg" name="user_message" className="form-control"></textarea>
                            </div><br />
                            <div className="button mb-3">
                                <button type="submit" className="bg-warning">Envoyer le message</button>
                            </div>
                        </form>
                    </section>
                    <section className="col-sm text-center p-6">
                        <h1 className="text-center text-info mb-5" >Contactez-moi</h1>
                        <div id="mail" className="text-center mt-2"><FiMail />
                            <p>
                               
                            <a href="mailto:sofiane.mameri7@gmail.com" style={{ textDecoration: 'none' }} >
                                    <span>sofiane.mameri7@gmail.com</span>
                                </a>
                            </p>
                        </div>
                        <div  className="text-center "><FiSmartphone />
                            <p>Tel:<span className="text-success"> +33 06 95 62 69 77</span></p>
                        </div>
                        <div className="text-center"><BiBeenHere color="red" />
                            <p className="">Mr Mameri</p>
                            <p><span>24 rue des pins 77090 Collégien</span> </p>
                        </div>
                    </section>
                </div>

            </div>

                <section>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.3530354100626!2d2.6722002156734663!3d48.83240437928489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60523db641b5d%3A0xdeaeaf41ac1604c4!2s24%20Rue%20des%20Pins%2C%2077090%20Coll%C3%A9gien!5e0!3m2!1sfr!2sfr!4v1606401589003!5m2!1sfr!2sfr" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                </section>



            </>


           
            
         );
    }
}
 
export default Contact;