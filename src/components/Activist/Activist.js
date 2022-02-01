import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Home from "../Home.js"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },

  header:{
    // display: "flex",
     background: "rgb(192, 237, 242)",
    // alignItems : "stretch",
    fontSize : 20,
    fontWeight: 700,
    textAlign: "center",
    // paddingBottom:50,
    //padding: theme.spacing(3)
  },

  body:{
    background: "rgb(132, 224, 238)",
  },

  myRequests :{
    padding: theme.spacing(10),
  },

  openRequests :{
    padding: theme.spacing(1),
  },

  header_secondary :{
    fontSize : 20,
    fontWeight: 700,
    marginTop:30,
    marginBottom:20,
  },
  test: {
    background: 'white',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    marginBottom: '10px',
  },
}));

export default function Activist() {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
    להתנדב
 
    <Container className={classes.body}>
      {/* <Box className={classes.header}>
        להתנדב
      </Box> */}
      <Box >

      <Box className={classes.header_secondary}>
        איך תרצו להתנדב?
      </Box>
      <List className={classes.root}>
        <ListItem button
         className={classes.test}
        onClick={() => {
         // history.push(`/companies/${key}`)
        }}>
          <ListItemAvatar>
            <Avatar>
              <AccessibilityNewIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="שינוע מזון" secondary="1/1/2021" />
        </ListItem>
        <ListItem button className={classes.test}  onClick={() => {
         // history.push(`/companies/${key}`)
        }} >
          <ListItemAvatar>
            <Avatar>
              <AccessibilityNewIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="שינוע מזון" secondary="1/1/2021" />
        </ListItem>
        <ListItem button className={classes.test}  onClick={() => {
         // history.push(`/companies/${key}`)
        }}>
          <ListItemAvatar>
            <Avatar>
              <AccessibilityNewIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="שינוע מזון" secondary="1/1/2021" />
        </ListItem>
      </List>
      </Box>
      <Box className={classes.myRequests}>
      <div>   
            <Link to="/donor/choose">הבקשות הפתוחות שלי</Link>
      </div>
    </Box>
    <Box className={classes.openRequests}>
      <div>   
            <Link to="/donor/choose">כל הבקשות הפתוחות</Link>
      </div>
    </Box>
    </Container>
    </Box>
  );
}
