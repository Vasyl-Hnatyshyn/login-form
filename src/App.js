import React from 'react';
import './App.css';
import fire  from './config/fire';
import Enter  from './components/Login/Enter';
import Home  from './components/Home/Home';


class App extends React.Component {
    constructor(){
       super();
        this.state={
            user:"",

        }
    
    }
    
    componentDidMount(){
   
        this.authListener();
      };  
    
authListener = ()=>{
        
    fire.auth().onAuthStateChanged((user)=> {
            
            if(user)
                {
                    this.setState({user})
                }
            else {
                    this.setState({user: null})
                 }
        })
}

    render() {
        
         
    return ( 
        
        <div className = "App">     
        
        {  this.state.user!== null ? (< Home />):(<Enter/>)   }
        
        </div>
        
    );
    }
}
export default App;
