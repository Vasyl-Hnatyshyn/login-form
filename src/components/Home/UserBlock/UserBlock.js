import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    userBlock:{
    padding: '25px 30px  40px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '30%',

    fontWeight: '800',
    letterSpacing: '1px',
    fontSize: '15px',
    backgroundColor:'rgba(0, 0, 0, 0.5)',

     },

    buttons: {
        '&:hover':{
            backgroundColor: "#ffff00",
        },
        width:'65%',
        padding: '8px 8px',
        backgroundColor: 'yellow',
        border: '2px solid #2ca02c2b ',
        borderRadius: '3px',
        fontWeight: '800',
        letterSpacing: '1.2px',
        fontSize: '12px'

},
    LogOut: {
        '&:hover':{
            backgroundColor: "#ffff00",
        },
        width:'10%',
        padding: '8px 8px',
        backgroundColor: 'red',
        border: '4px solid black',
        borderRadius: '3px',
        fontWeight: '800',
        letterSpacing: '1.2px',
        position:'absolute',
        top:'-10px',
        right:'-10px',
        color:"white"

    }


});

const UserBlock=(props)=>{
    const classes = useStyles();
    const {logOut,author,email,password,show}= props;

    return (
        <div className={classes.userBlock} >

            <div > Current user : <span id="curr-user">{author}</span>  </div>
            <div > E-mail :   <span >  {email}  </span>  </div>
            <div > Password : <span > {password}</span>  </div>

            <Button onClick={()=>{show(1)}} className={classes.buttons }  id="email"> Change Email  </Button>
            <Button onClick={()=>{show(2)}} className={classes.buttons} id="password"> Change password  </Button>

            <Button onClick={logOut} className={classes.LogOut} > Log out  </Button>

        </div>
    )

}


export  default  UserBlock;