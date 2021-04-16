import React, { Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
class Ajout extends Component {
    
        initArticle = {id:1, titre:"", image:"", contenu:"", parution:"", auteur:""};
        state = this.initArticle;

        handleChange= (e) =>{
            const {name, value} = e.target;
            this.setState({[name]: value});
        }
        handleSubmit = (e)=>{
            e.preventDefault();
            let img = "";
            if(this.state.image){
                img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0];
            }
             
            const newArticle = {
                titre: this.state.titre,
                image: img,
                contenu: this.state.contenu,
                parution: this.state.parution,
                auteur: this.state.auteur
            }
            this.props.ajouter(newArticle);
    
            this.setState(this.initState);
            toast('Article ajoutée avec succès !', {className:'bg-success text-white fw-bolder'});
            // window.location.reload(true);
    
        }
   

    render() { 
        const {titre, image, contenu, parution, auteur} = this.state;

        return ( 
            <>
            <div className="row">
                    <div className="col-6 offset-3">
                    <div className="card">
                    <div className="card-header text-center bg-secondary text-white"> Formulaire d'ajout</div>
                            <div className="card-body">
            <form className="container-fluid " onSubmit={this.handleSubmit}>
                
                <div className="form-group col-md-10">
                    <label htmlFor="titre" className="form-label"><strong>Titre</strong></label>
                    <input type="text" className="form-control" id="titre" name="titre" value={titre} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-10" >
                    <label htmlFor="image" className="form-label"><strong>Image</strong></label>
                    <input type="file" className="form-control" id="image" name="image" value={image} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-10">
                    <label htmlFor="contenu" className="form-label"><strong>Contenu</strong></label>
                    <input type="text" className="form-control" id="contenu" name="contenu" value={contenu} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-10">
                    <label htmlFor="parution"className="form-label"><strong>Parution</strong></label>
                    <input type="text" className="form-control" id="parution" name="parution" value={parution} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-10">
                    <label htmlFor="auteur"className="form-label"><strong>Auteur</strong></label>
                    <input type="text" className="form-control" id="auteur" name="auteur" value={auteur} onChange={this.handleChange} />
                </div>
                <br></br>
                <div className="col-12">
                        <button className="btn btn-warning col-12" type="submit">Ajouter mon nouvel Article !</button>
                </div>
            </form>
            </div>
            <Link to="/login/reload"><FaRegHandPointLeft size="48" color="orange"/></Link>
                </div>
                </div>
                </div>
                
                <ToastContainer/>  
            </>
         );
    }
}
 
export default Ajout;