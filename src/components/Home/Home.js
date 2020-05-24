import React from 'react';
import './Home.css';
import fire from "../../config/fire";
import UserBlock  from './UserBlock/UserBlock';
import Change  from './Change/Change';

class Home extends React.Component {
    constructor(){
        super();

        this.state={
            author:null,
            email:null,
            password:null,
            showData: 1,
            PasswordData:{
                user:"",
                newPassword: " " ,
          }
          };

    }


componentDidMount () {
    const userEmail = localStorage.getItem('name');
    const userPassword = localStorage.getItem('key');

    const user = userEmail ? userEmail.slice(0, userEmail.indexOf('@')) : ''
     this.setState({ 
      author: user,
      email:userEmail,
      password:userPassword,


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


    show=id=>{

        this.setState({
            showData:id
            })

        console.log(id)
         }



render(){



    return (

        
     <div  id ="container">

         <UserBlock
             logOut={this.logOut}
             author={this.state.author}
             email={this.state.email}
             password={this.state.password}
             show={this.show}/>


         <Change
            changeEmail={this.changeEmail}
            changePassword={this.changePassword}
            newPasswordData={this.newPasswordData}
            showData={this.state.showData}
            />

         </div>)

};
}

export default Home;
