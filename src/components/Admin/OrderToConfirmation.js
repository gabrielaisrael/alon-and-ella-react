import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "../UI/Button";

const useStyles = makeStyles({
  listWrapper: {
    padding: "30px 0",
    backgroundColor: "#FFF",
    marginBottom: "25px",
    boxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    borderRadius: "16px",
  },

  listItem: {
    borderBottom: "1px solid lightgrey",
    listStyle: "none",
    padding: "10px 20px",
    position: "relative",
    cursor: "default",

    "&:first-child": {
      padding: "0 20px 10px",
    },
    "&:last-child": {
      padding: "10px 20px 0",
      borderBottom: "none",
    },
  },

  editBtn: {
    height: "auto",
    margin: "0",
    position: "absolute",
    width: "15%",
    left: "20px",
    fontSize: "13px",
    bottom: "10px",
    padding: "0",
    border: "none",
    backgroundColor: "lightgray",
    fontWeight: "bold",
    padding: "5px",
    "&:hover": {
      backgroundColor: "#FFD500",
    },
  },

  stickyFooter: {
    bottom: "0",
    position: "sticky",
    zIndex: "150",
  },
});

export default function OrderToConfirmation() {
  const classes = useStyles();
  const products = [
    {
      id: 0,
      product: "נייר טואלט",
      quantity: 1,
    },
    {
      id: 1,
      product: "אורז",
      quantity: 2,
    },
    {
      id: 2,
      product: "חלב",
      quantity: 3,
    },
    {
      id: 3,
      product: "שוקולד למריחה",
      quantity: 1,
    },
    {
      id: 4,
      product: "ריצפז",
      quantity: 1,
    },
    {
      id: 5,
      product: "נייר טואלט",
      quantity: 1,
    },
    {
      id: 0,
      product: "נייר טואלט",
      quantity: 1,
    },
    {
      id: 1,
      product: "אורז",
      quantity: 2,
    },
    {
      id: 2,
      product: "חלב",
      quantity: 3,
    },
    {
      id: 3,
      product: "שוקולד למריחה",
      quantity: 1,
    },
    {
      id: 4,
      product: "ריצפז",
      quantity: 1,
    },
    {
      id: 5,
      product: "נייר טואלט",
      quantity: 1,
    },
    {
      id: 0,
      product: "נייר טואלט",
      quantity: 1,
    },
    {
      id: 1,
      product: "אורז",
      quantity: 2,
    },
    {
      id: 2,
      product: "חלב",
      quantity: 3,
    },
    {
      id: 3,
      product: "שוקולד למריחה",
      quantity: 1,
    },
    {
      id: 4,
      product: "ריצפז",
      quantity: 1,
    },
    {
      id: 5,
      product: "נייר טואלט",
      quantity: 1,
    },
  ];

  const listProducts = products.map((p, index) => (
    <li className={classes.listItem} key={index}>
      {p.product} {p.quantity}
      {index === 0 && (
        <Button className={classes.editBtn} variant="contained">
          עריכה
        </Button>
      )}
    </li>
  ));
  return (
    <Container maxWidth="sm">
      <Box>
        <h3>רשימת קניות לחולון</h3>
      </Box>
      <Box>
        <p>פרטי הלקוח</p>
        <Button
          variant="contained"
          style={{
            float: "left",
            height: "15px",
            width: "8px",
            fontSize: "12px",
            backgroundColor: "#f2ebeb",
            borderRadius: "20",
            marginTop: "15px",
            marginLeft: "15px",
          }}
        >
          עריכה
        </Button>
        <p>
          רבקה מנשה 0547-555-5555 חולון רחוב חטיבת אלכסנדרוני 67 קומה 7 דירה 29
        </p>
      </Box>
      <h3>פרטי ההזמנה</h3>

      <Box className={classes.listWrapper}>{listProducts}</Box>
      <Grid container spacing={3} className={classes.stickyFooter}>
        <Grid item xs={4}>
          <Button fullWidth>חזור</Button>
        </Grid>

        <Grid item xs={4}>
          <Button fullWidth>מחק</Button>
        </Grid>

        <Grid item xs={4}>
          <Button fullWidth>אשר</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
