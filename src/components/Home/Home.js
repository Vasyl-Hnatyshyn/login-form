import React from 'react';
import './Home.css';
import fire from "../../config/fire";


class Home extends React.Component {
    constructor(){
        super();
        
        this.state={
            author:null,
   
    };
 }

    
componentDidMount () {
    const userEmail = localStorage.getItem('name'); 
    const user = userEmail ? userEmail.slice(0, userEmail.indexOf('@')) : ''
     this.setState({ 
      author: user,
     });

     }

    logOut = () => {

        fire.auth().signOut().then(function() {  }).catch(function(err) {
            console.log(err)
        });

        localStorage.setItem('name',null)
    };


render(){

    return (
        
     <div  id ="container">
         <div className="userBlock">


             <div > Current user : {this.state.author}  </div>
             <button onClick={this.logOut}> Log out  </button>
             <button onClick={this.logOut}> Change password  </button>




         </div>
         <div className="change-window">
             <label htmlFor="user"> User</label>
             <input type="text" id="user"/>

             <label htmlFor="user"> New password</label>
             <input type="text"/>

             <label htmlFor="user"> Confirm new password</label>
             <input type="text"/>
             <button> Change</button>


         </div>


         </div>)

};
}

export default Home;
