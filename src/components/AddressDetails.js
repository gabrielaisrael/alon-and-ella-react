import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { grey } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 150,
            height:48,
        },
    },

    header: {
      textAlign: "right",
      padding: 15,
      fontSize: 20,
      fontWeight: 700,
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

}))


export default function AddressDetails() {

  const [city, setCity] = useState('')  
  const [street, setStreet] = useState('') 
  const [number, setNumber] = useState() 
  const [quarter, setQuarter] = useState('') 
  const [apartment, setApartment] = useState() 
  const [floor, setFloor] = useState() 
  const [moreDetails, setMoreDetails] = useState('')
  const classes = useStyles();

  const handleChange = (event) => {
    setCity(event.target.value);
  };

    function submit() {
      console.log([
          {"city":city, "street":street, "number":number, "quarter":quarter, "apartment":apartment, "floor":floor, "moreDetails":moreDetails}
      ])
      if(city && street && number && quarter && apartment && floor && moreDetails) {
        //  return <Redirect to="/donor/choose" />
      }else {
          alert("יש למלא את כל הפרטים")
      }
      
  
  }
        return (
            <div>
                       <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
                       <IconButton><PlayArrowIcon style={{ color: grey[900], fontSize: 15  }}></PlayArrowIcon></IconButton>איפה אתם
            </Box>
            <p className={classes.p}>
             אנא מלאו כתובת למסירה
            </p>

            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">עיר</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="עיר"
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        >
          <MenuItem >ירושלים</MenuItem>
          <MenuItem >תל אביב</MenuItem>
          <MenuItem >חיפה</MenuItem>
        </Select>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
  <TextField
   id="outlined-basic"
   label="רחוב" 
   variant="outlined" 
   size="small" 
   value={street} 
   onChange={(e) => setStreet(e.target.value)}/>
  <TextField 
  id="outlined-basic" 
  label="מספר" 
  variant="outlined" 
  size="small"         
  value={number} 
  onChange={(e) => setNumber(e.target.value)}/>
  <TextField id="outlined-basic" 
  label="שכונה" 
  variant="outlined" 
  size="small"
  value={quarter} 
  onChange={(e) => setQuarter(e.target.value)}
            />
  <TextField 
  id="outlined-basic" 
  label="דירה" 
  variant="outlined" 
  size="small"
  value={apartment} 
  onChange={(e) => setApartment(e.target.value)}
  />
  <TextField 
  id="outlined-basic" 
  label="קומה" 
  variant="outlined" 
  size="small"
  value={floor} 
  onChange={(e) => setFloor(e.target.value)}/>
</form>

<p className={classes.p}>
             יש מעלית?
            </p>
            <div className={classes.button}>
            <Button variant="contained">כן</Button>
            <Button variant="contained">לא</Button>
            </div>
                   
      <p className={classes.p}>
            פרטים נוספות
            </p>
            <TextField id="standard-size-small"  
            size="small"
            value={moreDetails} 
            onChange={(e) => setMoreDetails(e.target.value)}
             />
            <br/>
            <div style={{textAlign:"center", margin:20}}>
            <Button variant="contained" onClick={submit}>המשך</Button>
            <Button text-align="center" href="">חזור</Button>
            </div>

</div>
        )
}