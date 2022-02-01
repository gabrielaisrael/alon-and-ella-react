import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 150,
            height:48,
        },
    },
    
    p: {
    textAlign:"right",
    margin:50,
    },
}))

export default function DonorFile() {
    
    const classes = useStyles();
        return (
            <div>
                  <Box p={1} bgcolor="grey.300" margin="0">
            לתת עזרה
        </Box>
        <p className={classes.p}>
            אנא צרפו תמונה
        </p>

        <div style={{textAlign:"center", margin:20}}>
            <Button text-align="center" href="">חזור</Button>
            <Button variant="contained" >המשך</Button>
            </div>
            </div>
                )
        }