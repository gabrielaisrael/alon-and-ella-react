import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
// import Button from '@material-ui/core/Button';
// import { useHistory } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Button from "../UI/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "right",
    fontSize: "6",
    borderRadius: 15,

    "& > *": {
      borderRadius: 7,
      margin: theme.spacing(3),
      width: theme.spacing(25),
      height: theme.spacing(25),
      justifycontent: "center",
    },
    editBtn: {
      height: "1px",
    },
    footerbtn: {
      marginLeft: "15px",
    },
  },
}));

export default function OrderInProgress() {
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
      id: 6,
      product: "נייר מטבח",
      quantity: 1,
    },
    {
      id: 7,
      product: "מילקי",
      quantity: 2,
    },
    {
      id: 8,
      product: "סימלאק",
      quantity: 3,
    },
    {
      id: 9,
      product: " חמאה",
      quantity: 1,
    },
    {
      id: 10,
      product: "גבינה צהובה",
      quantity: 1,
    },
    {
      id: 11,
      product: " בשר טחון",
      quantity: 1,
    },
    {
      id: 12,
      product: " פסטה",
      quantity: 1,
    },
    {
      id: 13,
      product: " סבון כלים",
      quantity: 2,
    },
    {
      id: 14,
      product: "מגבונים",
      quantity: 3,
    },
    {
      id: 15,
      product: " טיטולים",
      quantity: 1,
    },
  ];

  const listProducts = products.map((p) => (
    <li style={{ listStyle: "none", margin: 10 }} key={p.product}>
      {p.product} {p.quantity}
      <hr />
    </li>
  ));

  return (
    <Container maxWidth="sm">
      <Box>
        <h3>רשימת קניות לחולון</h3>
      </Box>
      <Box>
        <h3>פרטי הלקוח</h3>
        <p>
          רבקה מנשה 0547-555-5555 חולון רחוב חטיבת אלכסנדרוני 67 קומה 7 דירה 29
        </p>
        <h3>פרטי המתנדב</h3>
        <p>
          ישראל ישראל 0547-555-5555 חולון רחוב חטיבת אלכסנדרוני 67 קומה 7 דירה
          29
        </p>
      </Box>

      <h3>פרטי ההזמנה</h3>
      <Box className={classes.editBtn}>
        <Paper elevation={3}>{listProducts}</Paper>
      </Box>
      <Box>
        <Box fullWidth="false">
          <Button style={{ float: "right" }}>חזור</Button>
          {/* <Button style={{float : 'left', left : '50%'}}>מחק</Button> */}
          <Button style={{ float: "left" }}>אשר</Button>
        </Box>
      </Box>
    </Container>
  );
}
