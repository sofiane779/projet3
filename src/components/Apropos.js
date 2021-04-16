import React, { Component } from 'react'

class Apropos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className="container md"style={{boxShadow:"10px 10px 10px 10px rgba(0, 0, 0, 0.2)"}}>
                <p className="bg-#1C044D"></p>
                <div className="card mb-4"  id="bobo">
                    <div className="row g-0">
                        <div className="col-md-4 ">
                            <img src="images/soso.jpg" alt="..." width="300" className="border border-dark 6px" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-center display-6 text-info">À propos de moi </h5><br></br>
                                <p className="card-text text-dark ml-4 mt-2 text-center display-7"><strong>Grand passionné de sport je pratique régulièrement du Cross-training, du run et de la boxe anglaise. Aimant les challenges et les défis, j'ai participé ces dernières années à plusieurs événements sportifs qui m'ont permis de dépassés mes limites et d'acquérir une force mentale et une rigueur dans ce que j'entreprends, fan aussi de lecture et de codage j'ai une envie insatiable d'apprendre de nouvelles choses. La formation développeur web mobile full-stack m'a permise d'obtenir des connaissances concernant le front et le back avec également des frameworks et des librairies pour certains languages tels que : HTML/CSS (ainsi que bootstrap), Javascript (jQuery & React)pour le front. Côté back mysql et php avec pour framework symfony4.</strong></p>
                                
                                    


                               
                            </div>
                        </div>
                    </div>
                </div>
              </div>  
            </>

         );
    }
}
 
export default Apropos;