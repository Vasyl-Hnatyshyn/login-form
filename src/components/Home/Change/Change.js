import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({

    changeWindow:{
        padding: '25px 0 25px 50px' ,
        width: '50%',
         },
    inputs:{
        width: '100%',
        height: '30px',
        transition: 'all 0.6s',


    },

    buttons: {
        '&:hover':{
            backgroundColor: "#ffff00"
        },
        width:'45%',
        padding: '12px 8px',
        backgroundColor: 'yellow',
        border: '2px solid #2ca02c2b ',
        borderRadius: '3px',
        fontWeight: '800',
        letterSpacing: '1.2px',
        fontSize:'12px',
        margin: '0%  0  0 58%'


    },
    changeBlock:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        minHeight: '300px',
        padding: '12% 0 0 20px'

    },
    operationText:{
        backgroundColor:'black',
        color:"white",
        padding: '10px 20px',
        fontWeight:'800',
        letterSpacing: '1.1px',
        borderRadius: '2px',
        fontSize:'17px',
        margin: '-10px -10px -10px -15px ',
        border: '2px solid rgba(0, 0, 0, 0.7) ',
        width: '40%',
        textAlign:'center',

    }

});

const Change= (props)=>{
    const classes = useStyles();
    const {newPasswordData,changeEmail,changePassword,showData }= props;

    return (
        <div className={classes.changeWindow}>

            {showData === 1 ?
                (<div className={classes.changeBlock}>
                <TextField
                    id="user"
                    label="E-mail"
                    type="text"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={newPasswordData}
                    className={classes.inputs}

                />

                <Button className={classes.buttons} onClick={changeEmail}> Change  </Button>
                    <div className={classes.operationText}>Email Change</div>
            </div>) :
                (<div className={classes.changeBlock}>
                    <TextField
                        id="newPassword"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={newPasswordData}
                        className={classes.inputs}
                    />

                    <Button className={classes.buttons} onClick={changePassword}> Change</Button>
                    <div className={classes.operationText}>Password Change</div>
                </div>)
            }
        </div>
    )

}

export  default  Change;