import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./UI/Button.js";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { BiDonateHeart } from "react-icons/bi"
import Radio from '@material-ui/core/Radio';
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign:"right",
        fontSize:"6",
        
        '& > *': {
        borderRadius: 7,
          margin: theme.spacing(3),
          width: theme.spacing(25),
          height: theme.spacing(25),
          justifycontent: 'center'
        },
      },
  p: {
    textAlign: "right",
    margin: 35,
    justifyContent: "center"
  },
  header: {
    textAlign: "right",
    padding: 15,
    fontSize: 20,
    fontWeight: 700,
  },
  countinueButton: {
    margin:20,
    paddingTop:80,
    textAlign: "left",
    position: "relative",
  },

 
}));

export default function OrderDetails() {
  const classes = useStyles();
  const history = useHistory();
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

  const products = [
      {
        id:0,
        product: "נייר טואלט",
        quantity: 1,
      },
      {
          id:1,
          product:"אורז",
          quantity: 2,
      },
      {
        id:2,
        product:"חלב",
        quantity: 3,
    },
  ]

  const listMyOrders = myOrders.map((o)=> <li key={o.order}>{o.datet} {o.order}</li>)
  const listProducts = products.map((p)=> <li style={{listStyle:"none", margin: 10}}key={p.product}>{p.product} {p.quantity}<hr/></li>)
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function submit() {
    console.log([{"donorPay":selectedValue}])
    history.push("/donor/all-orders");
  }
  return (
    <Container  >
 <div>
      <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0" >
        פרטי הזמנה
        <BiDonateHeart />
      </Box>
      <p className={classes.p} >
       {listMyOrders}
      </p>
      <Box className={classes.paper} justifyContent="center">
 <Paper elevation={3}>
{listProducts}
</Paper>
      </Box>
      <Box style={{margin:25}}>
      <p >
      אני משלם מכיסי?
      </p>
     <Radio
        checked={selectedValue === 'yes'}
        onChange={handleChange}
        value="yes"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'E' }}
        size="small"
      />כן
<Radio
        checked={selectedValue === 'no'}
        onChange={handleChange}
        value="no"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'E' }}
        size="small"
      />לא
      </Box>
      <Box  className={classes.countinueButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={submit}
        >
          לקחתי
        </Button>
      
      <Box style={{textAlign: "right", margin:20, marginBottom:50}}>
         <a href="all-orders">חזור</a> 
        <Button className = {classes.button2}
          variant="outlined"
          color="primary"
          onClick={submit}
        >
          חזור
        </Button>
        </Box>
        </Box>
    </div>
    </Container>
  );
}
