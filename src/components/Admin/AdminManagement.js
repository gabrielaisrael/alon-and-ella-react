import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Container, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    textAlign: "right",
    backgroundColor: "lightgray",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "5px",
  },

  itemList: {
    backgroundColor: "gray",
    textAlign: "right",
    borderRadius: "10px",
    border: "1px solid black",
    flexdirection: "column",
    alignItems: "center",
  },
  custom_header_list: {
    margin: "10px 0",
    cursor: "pointer",
  },

  btn: {
    backgroundColor: "yellow",
    borderRadius: "10px",
  },
}));

export default function AdminManagment() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  const handlebtnExecution = () => {
    history.push("/Admin/OrderToConfirmation");
  };

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
  ];

  const listProducts = products.map((p) => (
    <li style={{ listStyle: "none", margin: 10 }} key={p.product}>
      {p.product} {p.quantity}
      <hr />
    </li>
  ));

  return (
    <Container maxWidth="sm">
      <Box p={3} bgcolor="grey.300" margin="0" textAlign="right">רשימת ניהול</Box>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader">
        <p>שלום מנהל,</p>
        <Box button className={classes.custom_header_list} onClick={handleClick}>
          <ListItemText primary= " ממתין לאישור 10" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="בקשה מס' 1" />
              <Paper elevation={0} />
              <Paper />
            </ListItem>
          </List>
        </Collapse>
        <Box button className={classes.custom_header_list} onClick={handleClick}>
          <ListItemText primary=" ממתין למתנדב 23" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="ממתין למתנדב מס' 1" />
            </ListItem>
          </List>
        </Collapse>
        <Box button className={classes.custom_header_list} onClick={handleClick}>
          <ListItemText primary="בביצוע 15" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary="פעולה בביצוע מס' 1"
                onClick={handlebtnExecution}
              />
            </ListItem>
          </List>
        </Collapse>
        <Box button className={classes.custom_header_list} onClick={handleClick}>
          <ListItemText primary="הסתיימו 13" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="פעולה שהתסיימה מס' 1" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Container>
  );
}
