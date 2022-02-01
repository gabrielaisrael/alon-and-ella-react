import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Paper from '@material-ui/core/Paper';
import DeckIcon from '@material-ui/icons/Deck';
import PowerIcon from '@material-ui/icons/Power';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({

    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign:"center",
        fontSize:"9",
        '& > *': {
          margin: theme.spacing(1.5),
          width: theme.spacing(11),
          height: theme.spacing(11),
        },
    },

    p: {
    textAlign:"right",
    margin:20,
    },
}))

export default function FoodTransfer() {
    

    const classes = useStyles();
        return (
            
            <div>
                    <Box p={1} bgcolor="grey.300" margin="0" textAlign="right">
             שינוע מזון
            </Box>
            <p className={classes.p}>
               נא פרט את בקשתך
            </p>
            
<div className={classes.paper}>
    
      <Paper elevation={3}>      <IconButton >
<FastfoodIcon style={{ color: grey[900], fontSize: 35  }}></FastfoodIcon>
</IconButton>
<br/>
חזור</Paper>
      <Paper elevation={3}>
      <IconButton>
<DeckIcon style={{ color: grey[900], fontSize: 35 }}></DeckIcon>
</IconButton>
<br/>
מחק
      </Paper>
      <Paper elevation={3}>
      <IconButton>
      <PowerIcon style={{ color: grey[900], fontSize: 35  }}></PowerIcon>
</IconButton>
<br/>
בוצע
      </Paper>
      <Paper elevation={3}>
      <IconButton>
<LocationOnIcon style={{ color: grey[900], fontSize: 35 }}></LocationOnIcon>
</IconButton>
</Paper>
</div>
</div>
)
    } 
