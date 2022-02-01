import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import { BiDonateHeart } from "react-icons/bi"
import Button from "./UI/Button.js";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 5,
    border: 1,
    style: { width: '8rem', height: '8rem' },
  };
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
    margin:20,
   
    },
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,

      },
      button: {
        '& > *': {
            margin: theme.spacing(1),
          },
      },
      header: {
        textAlign: "right",
        padding: 15,
        fontSize: 20,
        fontWeight: 700,
      },
      form: {
        background: "#C0EDF2",
        color: "#222222",
        position: "relative",
        borderRadius: 18,
        height: 200,
        border: "solid 6px white",
        padding: "0 15px",
        fontFamily: "'Varela Round', sans-serif",
        fontSize: 15,
        whiteSpace: "nowrap",
        margin: theme.spacing(2),
        
      },
      countinueButton: {
        margin:20,
        paddingTop:20,
        textAlign: "left",
      },
      button: {
          height:30,
          fontSize:13,
          width:25,
      }

}))


export default function ClientFinish() {
    const [feedback, setFeedback] = useState('')
    const classes = useStyles();
    const history = useHistory();

    function submit() {
        console.log([{ feedback: feedback}]);
        history.push("/LastGroceries");
    }
    function handleClick() {
      history.push("/CookedFood");
    }
    function handleClick2() {
      history.push("/FoodType");
    }

        return (
            <div>
                        <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
      מצרכים
        <BiDonateHeart/>
      </Box>
            <p className={classes.p}>
          אילו מצרכים תרצו?
            </p>
            <TextField id="standard-size-small"  size="big" label="Filled" variant="filled" />
         
       

            <Box  className={classes.countinueButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={submit} 
          className={classes.button}
        >
         המשך
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClick2} 
          className={classes.button}
        >
         חזור
        </Button>
      </Box>
            </div>
        )
}