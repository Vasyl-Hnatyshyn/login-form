import React from 'react';
import SingUp from './singup/SingUp'
import fire from '../../config/fire';




class Enter extends React.Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            active:1
        }
    }
    
logIn=(e)=>{
   
    e.preventDefault();

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((a)=>{
       
    }).catch((err)=>{

    })
    }
    
        
singUp=(e)=>{
   
     e.preventDefault();

    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((a)=>{

    }).catch((err)=>{

                    
        })
    }

inputChanges =(e)=> {
    
    this.setState({
        [e.target.name]:`${e.target.value}`
    })
    localStorage.setItem('name',`${this.state.email}`)
    localStorage.setItem('key', this.state.password)

}

activeToggle=(id)=>{
        this.setState({
            active:id
                    })

}
    
      
render(){
    
    return   (<div >

        <SingUp
         inputChanges={this.inputChanges}
         singUp={this.singUp}
         logIn={this.logIn}
         active={this.state.active}
         activeToggle={this.activeToggle}
          />

        </div>)

}
}


export default Enter;

  