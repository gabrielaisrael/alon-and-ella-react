import React, {useState} from "react"
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
import { useHistory } from "react-router-dom";
import { FcHome } from "react-icons/fc";

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
}))

export default function DonorChoose() {
      const items = [
            {
              id: 0,
              name: "food",
              path:"/donor/food"
            },
            {
              id: 1,
              name: "furniture",
              path:''
            },
            {
              id: 2,
              name: "power",
              path:''
            },
            {
              id: 3,
              name: "location",
              path:''
            },
            {
              id: 4,
              name: "money",
              path:''
            },
          ];
    const[item, setItem] = useState(items[0])
    const classes = useStyles();
    const history = useHistory()

    function submitForm(i) {
      setItem(items[i])
      if (item.color == ''){
           setItem({ color: 'green' });
        }
        else {
            setItem({ color: '' });
        }
    console.log(items[i]);
 
    history.push(items[i].path);
    
  }
        return (
            <div>

                    <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
                   לתת עזרה
                   <FcHome />
            </Box>
            <p className={classes.p}>
               מה תרצו לתרום?
            </p>
<div className={classes.paper}>
    
      <Paper elevation={3} onClick={submitForm.bind(this, 0)} >  {" "}     <IconButton>
<FastfoodIcon style={{ color: grey[900], fontSize: 35  }} ></FastfoodIcon>
</IconButton>
<br/>
אוכל</Paper>
      <Paper elevation={3} onClick={submitForm.bind(this, 1)}  >
      <IconButton>
<DeckIcon style={{ color: grey[900], fontSize: 35 }}></DeckIcon>
</IconButton>
<br/>
ריהוט
      </Paper>
      <Paper elevation={3} onClick={submitForm.bind(this, 2)} >
      <IconButton>
      <PowerIcon style={{ color: grey[900], fontSize: 35  }}></PowerIcon>
</IconButton>
<br/>
מוצרי חשמל
      </Paper>
      <Paper elevation={3} onClick={submitForm.bind(this, 3)} >
      <IconButton>
<LocationOnIcon style={{ color: grey[900], fontSize: 35 }}></LocationOnIcon>
</IconButton>
<br/>
אזור עבודה
      </Paper>
      <Paper elevation={3} onClick={submitForm.bind(this, 4)} >
      <IconButton>
<LocalAtmIcon style={{ color: grey[900], fontSize: 35 }}></LocalAtmIcon>
</IconButton>
<br/>
כסף
      </Paper>
    </div>
<p className={classes.p}>
             התרומות הפתוחות שלי (5)
            </p>

    </div>
        )
        }