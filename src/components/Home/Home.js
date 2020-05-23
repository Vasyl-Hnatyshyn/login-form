import React from 'react';
import './Home.css';
import fire from "../../config/fire";


class Home extends React.Component {
    constructor(){
        super();
        
        this.state={
            author:null,
            PasswordData:{
                user:" ",
                newPassword: " " ,
                confirmPassword:" "
            }
   
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




    newPasswordData=(e)=>{
        let a =this.state.PasswordData;
        a[e.target.id]= e.target.value;

        this.setState({
            PasswordData:a
        })

        // this.inputAreEmpty();

    }



render(){

    return (
        
     <div  id ="container">
         <div className="userBlock">


             <div > Current user : <span id="curr-user">{this.state.author}</span>  </div>
             <button onClick={this.logOut}> Log out  </button>
             <button onClick={this.logOut}> Change password  </button>




         </div>
         <div className="change-window">
             <label htmlFor="user"> User</label>
             <input type="text" id="user" onChange={this.newPasswordData}/>

             <label htmlFor="user" > New password</label>
             <input type="text" onChange={this.newPasswordData}/>

             <label htmlFor="user" > Confirm new password</label>
             <input type="text" onChange={this.newPasswordData}/>
             <button> Change</button>


         </div>


         </div>)

};
}

export default Home;
