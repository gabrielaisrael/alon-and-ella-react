import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import { BiDonateHeart } from "react-icons/bi"
import Button from "./UI/Button.js";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { RadioGroup,FormLabel, Radio, FormControlLabel, Menu, MenuItem, Select, InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

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
      formControl: {
        margin: theme.spacing(1),
        minWidth: 100,

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
      אוכל מבושל
        <BiDonateHeart/>
      </Box>
            <p className={classes.p}>
        אנא מלאו את הפרטים הבאים:
            </p>
            <FormControl component="fieldset">
  <FormLabel component="legend">כשרות</FormLabel>
  <RadioGroup aria-label="כשרות" name="כשרות" >
    <FormControlLabel value="כשר" control={<Radio />} label="כשר" />
    <FormControlLabel value="לא כשר" control={<Radio />} label="לא כשר" />
    
    
  </RadioGroup>
</FormControl>
<InputLabel id="label">מספר סועדים</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">1-3</MenuItem>
  <MenuItem value="20">4 ומעלה</MenuItem>
</Select>
            <p className={classes.p}>
      מה עוד חשוב שנדע?
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