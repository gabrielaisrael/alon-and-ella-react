import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { BiDonateHeart } from "react-icons/bi"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import firebase from "../firebase";



const useStyles = makeStyles(theme => ({

    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign:"center",
        fontSize:"6",
      
        '& > *': {
          margin: theme.spacing(1),
          marginRight: theme.spacing(4),
        //  marginLeft: theme.spacing(10),
          width: theme.spacing(30),
          height: theme.spacing(3),
          padding: theme.spacing(1),
        },
      },
  p: {
    direction : "ltr",
    textAlign: "right",
    margin: 10,
  },
  header: {
    textAlign: "right",
    padding: 15,
    fontSize: 20,
    fontWeight: 700,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function AllOrders() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [requests,setRequests]=useState([]);


  /*const fetchRequests=async()=>{
    const response=firebase.firestore().collection('requests');
    const data=await response.get();
    data.docs.forEach(item=>{
    setRequests([...requests,item.data()]);
    })
  }*/

  console.log(requests); 
 


  const myOrders = [
      {
          id:0,
          order:"רשימת קניות לחולון",
          date:"15.12.2020"
      },
      {
        id:1,
        order:"אוכל מבושל לרמת-גן",
        date:"15.12.2020"
    }
  ]
  const listMyOrders = requests.map((o)=> {return  <Paper>{o.type}</Paper>})
  console.log(requests); 
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  useEffect(() => {
    console.log(location.pathname);
    console.log(location.state);
    //fetchRequests();
  }, [location])

  function myOrderClick() {
    history.push({
      pathname: '/donor/my-order-details',
      state: { detail: 'id1234' }
  });
  }

  function orderDetailsClick() {
    history.push("/donor/order-details");
  }

  return (  

    <div>
     {requests}
      <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
        הזמנות פתוחות
        <BiDonateHeart />
      </Box>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="(7) הזמנות שלקחתי" className={classes.p}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <Box className={classes.paper} onClick={myOrderClick}>
 {listMyOrders}
       </Box>
            <ListItemText primary="" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary=" (43) כל ההזמנות הפתוחות" className={classes.p} />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <Box className={classes.paper} onClick={orderDetailsClick}>
            {listMyOrders}
         </Box>
            <ListItemText primary="" />
          </ListItem>
        </List>
      </Collapse>
      
    </div>
  );
}
