
import React from 'react';

const Articles =()=> {
    
    const datas = JSON.parse(localStorage.getItem('articlesKey'));

    return ( 
     
    //     <>   
    //       <div className="bg-light p-5">
    //         <div className="container text-center">
    //             <h1 className="display-2 text-info">Mes Articles</h1>
    //             <p className="lead">Un peu de lecture pour la culture</p>
    //         </div>     
    //     </div>
    //         <div className="row row-col-1 row-col-md-2 "></div>
        
    //    { datas.map((data, index)=>{

    //        return     <div class="row row-cols-1 row-cols-md-2 g-4 mt-5 container">
    //                 <div class="col">
    //                     <div class="card">
    //                         <img src={`images/${data.image}`} class="card-img-top" alt="..." />
    //                         <div class="card-body">
    //                             <h5 class="card-title">Article N°00{data.id}</h5>
    //                             <ul className="list-group list-group-flush">
    //                                 <li className="list-group-item text-warning text-center"> <strong>{data.titre}</strong></li>
    //                                 <li className="list-group-item"> {data.contenu}</li>
    //                                 <li className="list-group-item">Parution: {data.parution}</li>
    //                                 <li className="list-group-item text-info"> {data.auteur} </li>

    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         })
    //       }  
    //     </>
        <>
        <div className="container mt-5" style={{boxShadow:"10px 15px 10px 10px rgba(0, 0, 0, 0.2)"}}>
        <div className="bg-light p-5">
            <div className="container text-center">
                 <h1 className="display-4 text-info">Mes ARTICLES </h1>
                 <p className="lead">Un peu de lecture pour la culture !</p>
            </div>


            <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">

        {
            datas.map((data,index)=>{
                return <div className="col">

                <div class="card">
                    <img src={`images/${data.image}`} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center text-warning"> {data.titre}</h5>
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item"> {data.contenu}</li>
                                <li className="list-group-item">Date : {data.parution}</li>
                                <li className="list-group-item text-info"> {data.auteur}</li>
                            </ul>
                    </div>
                </div>
            </div>

                })
            }

            </div>
    </div>
</div>
        </>
         );
    
} 
export default Articles;