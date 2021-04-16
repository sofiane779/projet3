import React from 'react'
import { FaEdit, FaTrash  } from "react-icons/fa"
const Liste=(props) =>{



    return (
        <>
        <table className="table table-striped container border">
            <thead className="thead-dark bg-dark text-white text-center">
                <tr>
                    <th>ID</th><th>Titre</th><th>Image</th><th>Contenu</th><th>Parution</th><th>Lien</th><th>Actions</th><th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.articles.map((article, index)=>{
                        return(

                            <tr key={index}>
                                <td>{article.id}</td>
                                <td>{article.titre}</td>
                                <td><img src={`images/${article.image}`} alt="" width="120"/></td>
                                <td>{article.contenu.substring(0, 50)}</td>
                                <td>{article.parution}</td>
                                <td>{article.auteur}</td>
                                <td>
                                <button onClick={()=>{props.handleEdit(index)}} className="btn btn-info"><FaEdit/> Modifier</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() =>{if(window.confirm('Êtes vous sûr de vouloir supprimer cet article ?'))
                                                        {props.deleteArticle(index)
                                                        };
                                }}>
                                        <i className=""><FaTrash/> Supprimer</i>
                                    </button>
                                </td>






                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
            
        </>
    )
}

export default Liste;
