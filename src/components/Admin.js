import React, { Component } from 'react';
import Ajout from './Ajout';
import Edit from './Edit';
import Liste from './Liste';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datas: 
            [
               {    id:1,
                titre:"8 habitudes de développeur(euse)s qui font progresser.",
                image:"bkg.jpg",
                contenu:"Avec le temps, j’ai fini par comprendre que ce qui comptait le plus dans ce métier, c’était les habitudes. Toutes ces petites décisions, ces façons de faire et de voir les choses. Ça a l’air de rien au jour le jour, mais mis bout à bout, c’est une putain de locomotive pour ta progression. OK vas-y on en parle! Aller vers l’inconnu.Soyons honnêtes, j’ai pas toujours fait ça. J’étais plutôt dans la team : prendre la tâche pile taillée pour moi. La bonne techno qui va bien, la partie de l’app que je connais par cœur. Peinard ! Je savais exactement comment faire avant même de regarder. Et choisir la facilité, quand ça devient une habitude, ça devient dangereux.",
                parution: "le 17/09/2020",
                auteur: "www.jesuisundev.com"
                  
            },
                           
        {           id: 2,
                    titre:"Les meilleurs logiciels pour gagner du temps avec vos PDF.",
                    image:"code5.jpg",
                    contenu:"Sur le web, le PDF est l’un des formats les plus populaires. Et ce n’est pas pour rien ! Il a notamment l’avantage d’être léger, et donc pratique à envoyer par email ou via un outil de messagerie. De plus, il est universel et facilement lisible sur tous les appareils et systèmes d’exploitation.  Mais saviez-vous qu’il est possible de gagner encore plus de temps avec vos PDF ? En effet, il existe des outils pratiques qui vous permettront de créer, signer ou encore convertir vos documents en un clin d’œil.Voici une sélection de sites très pratiques pour vous faciliter la vie au quotidien ! Générer un PDF.Il existe de nombreux moyens pour générer un PDF. À partir d’un logiciel de traitement de texte (Word, Pages, etc.), depuis un navigateur web (Chrome, Firefox, etc.) Mais dans certains cas, il peut être utile de recourir à un outil spécifique pour créer vos documents.",
                    parution: "le 02/11/2020",
                    auteur: "www.blogduwebdesign.com"
           
          },                        
        {
                    id: 3,
                    titre:"L’avenir de la technologie web : Le SEO et UX.",
                    image:"code6.jpg",
                    contenu:"Les tendances SEO changent avec l’innovation et la technologie. Ils sont en partie liés aux nouvelles technologies et au comportement humain envers les machines. Les progrès technologiques les plus importants qui influent sur les pratiques numériques et de marketing sont l’apprentissage automatique et l’intelligence artificielle. Ces technologies sont utilisées dans des produits tels que les assistants vocaux humains (Google Assistant, Cortana) ou les chatbots. Ces produits sont créés pour permettre une meilleure experience, tant au niveau de la voix, du toucher que de la localisation. Comment ces changements se reflètent-ils directement sur le moteur de recherche google et les pratiques de référencement Afin d’optimiser la praticité et d’aider les utilisateurs à trouver l’information requise en quelques secondes, google se tourne vers les snippets, la recherche mobile et la recherche vocale. Afin de rendre votre site Web facile à trouver sur les moteurs de recherche et afin que les utilisateurs puissent trouver ce qu’ils recherchent nous vous conseillons de faire ce qui suit :Familiarisez-vous avec RankBrain.Rank Brain est un programme d’intelligence artificielle (IA) utilisé pour aider Google à traiter les demandes des utilisateurs des moteurs de recherche. Il utilise l’intelligence artificielle pour traduire le langage écrit en vecteurs afin que l’ordinateur puisse comprendre. Ce qui est intéressant, c’est qu’il fait des connexions pour gérer de nouveaux types de recherches, comme les connexions concernant votre emplacement ou votre contenu. RankBrain est très utile car il s’agit d’un des signaux les plus importants pour déterminer les résultats qui apparaîtront sur le site web .Comment cela affecte-t-il le référencement ?",
                    parution: "le 24/02/2020",
                    auteur: "www.blog-web-marketing.fr"
                             
            }
        ],
        editForm: false, 
        indexMod: -1,
        editArt: {id:-1, titre:'', image:'', contenu:'', parution:'', auteur:''},
         }
    }
    componentDidMount = ()=>{
  
        let articles1 = JSON.parse(localStorage.getItem('articlesKey'));
        if(!articles1 || articles1.length ===0){
            localStorage.setItem('articlesKey',JSON.stringify(this.state.datas));
            let artRecup = JSON.parse(localStorage.getItem('articlesKey'));
            this.setState({datas: artRecup});
        }else{
              let articles2 = JSON.parse(localStorage.getItem('articlesKey'));
        this.setState({datas: articles2});
        
        }
      
    }
    removeArticle = (index)=>{

        let newDatas = [...this.state.datas];
        const data = newDatas .filter((v, id) =>{
        return id !== index;
        });

    this.setState({datas:data},()=>{
        localStorage.setItem('articlesKey', JSON.stringify(this.state.datas));
        console.log(this.state);
                

        });

    }
    addArticle = (newArticle) =>{
        newArticle.id = this.state.datas[this.state.datas.length -1].id + 1;
        let datasClone = [...this.state.datas, newArticle];
        this.setState({datas: datasClone}, ()=>{

            localStorage.setItem('articlesKey', JSON.stringify(this.state.datas));
            
           } );
    }
    handleShow = (etat)=>{
        this.setState({editForm:true});
    }
    handleItem = (index)=>{
        const vModif =  this.state.datas[index];
        this.setState({editArt: vModif, indexMod: index});
        console.log(index);
    }

    handleUpdate = (data)=>{
        let articlesUpdate = [...this.state.datas];
        articlesUpdate[this.state.indexMod] = data;
        this.setState({datas: articlesUpdate}, ()=>{

                localStorage.setItem('articlesKey', JSON.stringify(this.state.datas));
       
             });
            }
    render() { 
        return ( 

            <>
           
                <h1 className="bg-secondary text-white text-center">Administration</h1>
                {
                    (!this.state.editForm && this.state.indexMod === -1) 
                    &&  <button onClick={this.handleShow} className="btn btn-warning offset-11 mb-1 ">
                        Ajouter
                       </button>
                }
               
                {
                    (!this.state.editForm && this.state.indexMod > -1)
                    ?<Edit artShared = {this.state.editArt} update = {this.handleUpdate}/>
                    :
                    (this.state.editForm)
                    ?<Ajout ajouter = {this.addArticle} />
                    :<Liste articles = {this.state.datas} deleteArticle = {this.removeArticle} handleEdit = {this.handleItem} />
                }
            </>
         );
    }
}
 
export default Admin;