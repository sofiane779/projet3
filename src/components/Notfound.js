
import React, {Component} from 'react'

class Notfound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className="text-center">
                <h1 className="">Erreur 404 </h1>
                <p>Vous vous êtes trompés d'endroit</p>
            </div>
            </>
         );
    }
}
 
export default Notfound;