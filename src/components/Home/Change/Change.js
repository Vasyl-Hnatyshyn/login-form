import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    buttons: {
        '&:hover':{
            backgroundColor: "#ffff00",
        },
        width:'65%',
        padding: '8px 8px',
        backgroundColor: 'lightgreen',
        border: '2px solid #2ca02c2b ',
        borderRadius: '2px',
        fontWeight: '800',
        letterSpacing: '1.2px',

    },
    emailBlock:{

    },

    passwordBlock:{


    }


});

const Change= (props)=>{
    const classes = useStyles();
    const {newPasswordData,changeEmail,changePassword,showData }= props;

    return (
        <div className="change-window">

            {showData === 1 ?
                (<div className={classes.emailBlock}>
                <TextField
                    id="user"
                    label="E-mail"
                    type="text"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={newPasswordData}
                />

                <Button  onClick={changeEmail}> Change Email </Button>

            </div>) :
                (<div className={classes.passwordBlock}>
                    <TextField
                        id="newPassword"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={newPasswordData}
                    />

                    <Button  onClick={changePassword}> Change Password</Button>

                </div>)

            }


        </div>
    )

}


export  default  Change;