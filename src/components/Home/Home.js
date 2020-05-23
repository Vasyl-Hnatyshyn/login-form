import React from 'react';
import './Home.css';
import fire from "../../config/fire";


class Home extends React.Component {
    constructor(){
        super();
        
        this.state={
            author:null,
            PasswordData:{
                user:"",
                newPassword: " " ,
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

        console.log( this.state.PasswordData)
        // this.inputAreEmpty();
    }

    changePassword=()=>{
        let   user = fire.auth().currentUser;
        user.updatePassword(this.state.PasswordData.newPassword).then(function() {
            alert(" Update successful.")
        }).catch(function(error) {
            // An error happened.
        });

    }


    changeEmail=()=>{
        let   user = fire.auth().currentUser;

        user.updateEmail(this.state.PasswordData.user).then(function() {
            alert(" Update successful.")
        }).catch(function(error) {
            // An error happened.
        });
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
             <label htmlFor="user" > User</label>
             <input type="text" id="user" value={this.state.PasswordData.user} onChange={this.newPasswordData}/>

             <label htmlFor="user" > New password</label>
             <input type="text" id="newPassword" onChange={this.newPasswordData}/>

             <label htmlFor="user" > Confirm new password</label>
             <input type="text"  onChange={this.newPasswordData}/>
             <button  onClick={this.changeEmail}> Change Email </button>
             <button  onClick={this.changePassword}> Change Password</button>


         </div>


         </div>)

};
}

export default Home;
