import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({

    SingUpWindow:{
        
        transition:'all 0.6s',
        width: '32%',
        position:'relative',
        margin: '10% auto',
        textAlign:'center',
        border: '3px solid black',
        minHeight: '360px',
        display:'flex',
        flexDirection: 'column',
        padding:'1% 2%',
        justifyContent:"space-around",
        borderRadius:'3px'
          },
    buttons:{
        '&:hover':{backgroundColor:"yellow",
            boxShadow:'none'

        },
        backgroundColor:"rgba(243, 231, 7, 1)",

        padding: ' 12px 0',
        fontWeight:'800',
        marginTop:'30%',
        borderRadius:'5px'
    },
    logText:{
        fontWeight:'700',
        padding:' 10px 15px',
        position:'absolute',
        fontSize:'24px',
        backgroundColor:'white',
        width:'150px',
        textAlign:'left',
        left:'4.5%',
        top:'-9.6%',
        letterSpacing:'1.1px',
    },
    input:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:'-40px'

    },

    toggle:{
        '&:hover':{backgroundColor:"lightgreen",

        },
        backgroundColor:"lightgreen",
        border:'none',
        padding: ' 8px 0',
        fontWeight:'800',
        letterSpacing:'1.1px',
        borderRadius:'5px'

    },
    textFields:{
        '&:hover, &:focus':{
            outline:'none',
            border:'2.5px solid black',
            boxShadow: '1px 15px 37px -4px rgba(150,150,147,0.55)',
        },
        transition:'all 0.6s',
        width:'100%',
        minHeight:'50px',
        border:' 2.5px solid dimgrey',
        borderRadius:'3px',
        margin:'15px 0',
        paddingLeft:'10px',
        fontSize:'18x',
    },

    buttonsPanel:{

        width:'40%',
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        margin:' 0 auto',
        position:'absolute',
        bottom:'-10%',
        left:'30%',
        border:'10px solid white'



    }

});

const Change= (props)=>{
    const classes = useStyles();

    const {inputChanges,singUp,logIn,active,activeToggle }= props;

    return (
        <div className={classes.SingUpWindow}>

            {active===1 ? (<div className={classes.logText}> Log in...</div>):
                (<div className={classes.logText}> Sing Up...</div>)
            }

            <div className={classes.input}>
            <input  className={classes.textFields}
                name= "email"
                type = "email"
                placeholder = " Email..."
                id="email"
                onChange={inputChanges} />

            <input className={classes.textFields}
                name = "password"
                type = "password"
                placeholder = "Password..."
                id="password"
                onChange={inputChanges}
                />
            </div>

            {active===1 ?
                    (<div className={classes.buttonsPanel}>
                        <button className={classes.toggle}  onClick={()=>{activeToggle(2)}}>Registration</button>
                        <Button className={classes.buttons} onClick={logIn}> LogIn </Button>
                    </div>) :
                    (<div className={classes.buttonsPanel}>
                        <button className={classes.toggle}  onClick={()=>{activeToggle(1)} }>LogIn</button>
                        <Button className={classes.buttons} onClick={singUp}> SingUp </Button>
                    </div>)

            }







        </div>
    )

}

export  default  Change;