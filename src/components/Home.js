import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./UI/Button.js";
import Box from "@material-ui/core/Box";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { FcHome } from "react-icons/fc";
import { useAuth } from "./Contexts/AuthContext";
import app from "../firebase";
import firebase from "../firebase";
import "firebase/firestore";
import SimpleModal from "./Modal";
import handleOpen from './Modal';
import UtilsObj from "./Utils";


const useStyles = makeStyles((theme) => ({
  form: {
    background: "#C0EDF2",
    color: "#222222",
    position: "relative",
    borderRadius: 28,
    height: 36,
    border: "solid 8px white",
    padding: "0 30px",
    fontFamily: "'Varela Round', sans-serif",
    fontSize: 20,
    whiteSpace: "nowrap",
    margin: theme.spacing(1),
  },

  p: {
    textAlign: "right",
    margin: 50,
  },
  header: {
    textAlign: "right",
    padding: 15,
    fontSize: 20,
    fontWeight: 700,
  },
  countinueButton: {
    paddingTop: 110,
    marginRight: 220,
  },
}));


// main
export default function Home() {
  //fields
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const { signUp } = useAuth();
  const [open, setOpen] = useState(false);
  const db = firebase.firestore();
  const [message, SetMessage] = useState("");
  const utils = new UtilsObj();


  console.log(match);
  console.log(location);


  //methods

  //*primary button click method
  async function submit(e) {
    e.preventDefault();
    console.log([{ name: name, phone: phone }]);

    utils.PrintSender();
    if (name && phone) {
      try {
        const res = await checkUserDetails(name, phone);
        if (res === false) {
          console.log("Did not find user details.");
          //  alert("Did not find user details. created new. waiting approval");
          setTextMsg('Did not find user details.');
          handleOpen();
        }
      } catch (error) { console.log(error);}
    } else {
      alert("יש למלא את כל הפרטים");
    }
  }

  async function checkUserDetails(name, phone) {
    if (name && phone) {
      try {
        //gets user from db
        //const foundUser = await db.collection("User").where("phoneNumber", "==", phone).get();
        const currentUrl = match.url;
        await utils.ValidUserDetails(name, phone);
        let /*user*/foundUser = utils.getUserHolder();
        //let /*user*/retUser = await foundUser;
        
       //foundUser.then(retUser => {
          console.log(`   got User from UtilsObj\nDetails: `,/* retUser,*/`\n`, foundUser);
        //});
        /*; //todo understand why this always returns undefined  ◀⬅⬅⬅⬅⬅
        let foundUser = await user.then(retUser => {
          console.log(`   got User from UtilsObj\nDetails: `, retUser);
        });
            
        */
          
        //const ret = 
        // user found. checking his details 
        if (foundUser) {
          if (currentUrl === '/' && foundUser.role === 'manager') { // checks if he is a manager
            setTextMsg(`User ${foundUser.name} is defined as a Manager. checking if approved`);
            handleOpen();
          } else {
            setTextMsg(`User ${foundUser.name} is not defined as a Manager`);
            handleOpen();
            return true;
          }


          if (foundUser.role === 'manager' && foundUser.approved === false) { // checks if he is approved
            setTextMsg(`User ${foundUser.name} is a Manager but not approved yet`);
            handleOpen();

            return true;
          }
          // user is a manager and approved
          else {
            setTextMsg(`Welcome ${foundUser.name}`);
            handleOpen();
            let hold = setInterval(() => {
              submitForm();
              clearInterval(hold);
            }, 3000);


          }
          // todo put this back on when I'm done
          // } else if (!foundUser) {
          //   alert(`User data: ${foundUser} is missing`)
          //   return false;
          //!<------------
          }
        //})
      } catch (error) { 
        console.log('   [CAUGHT ERROR] ', error.message); 
      return false }
    } else {
      alert("יש למלא את כל הפרטים");
      return false;

    }
  }


  //* creates user object
  // async function createUser(role, approved) {
  //   db.collection("User").add({
  //     name: name,
  //     phoneNumber: phone,
  //     role,
  //     approved,
  //   });
  //}
  /** */

  //* passes to next page
  function submitForm() {
    history.push("/FoodType");
  }
  //* passes message to modal
  const setTextMsg = msg => {
    SetMessage(msg);
  };
  //* handles modal opening
  const handleOpen = () => {
    setOpen(true);
  };

  /** @param {main render function}  */
  return (
    <div>
      <SimpleModal message={message} open={open} />
      <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
        עמותת אלון ואלה
        <FcHome />
      </Box>
      <p className={classes.p}>
        שלום,
        <br />
        כדי שנוכל להכניס אותך לאפליקציית אלון ואלה אנו צריכים שם ומספר ליצירת
        קשר
      </p>
      <br />
      <Form noValidate autoComplete="off" >
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="שם" className={classes.form} value={name}
            onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Control
            type="phone"
            placeholder="מספר טלפון"
            className={classes.form}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
      </Form>
      <br />
      <Box className={classes.countinueButton}>
        <Button
          color="primary"
          onClick={submit}
        >
          המשך
        </Button>
      </Box>
      <a href="www.google.com">לאתר העמותה</a>
      <br />
    </div>
  );
}
