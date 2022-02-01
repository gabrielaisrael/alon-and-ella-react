import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Button from "./UI/Button.js";
import Box from "@material-ui/core/Box";
import { useHistory, useRouteMatch } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BiDonateHeart } from "react-icons/bi"
import firebase from '../firebase'

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
    paddingTop:110,
    textAlign: "center",
  },
}));

export default function DonorHome() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();
  const match = useRouteMatch()
  const location = useLocation()
  const db = firebase.firestore()

  useEffect(() => {
    console.log(location.pathname)
    console.log(location.state)
  }, [location])

  function submitForm(id){
   history.push({
  pathname: '/donor/all-orders',
  state: { detail: id }
})
  }

  async function createUser(){
    db.collection("user").add({
      name:name,
      phone:phone,
      type:"donor",
      approved:false,
    })
  }

   async function submit(e) {
    e.preventDefault()
    console.log([{ name: name, phone: phone }]);
    if (name && phone) {
      try {
        const res = await checkUserDetails(phone)
        if(res === false) {
          console.log("not find user, created a new user and waiting to approve")
        }
      }catch(error) {
        console.log("error")
      }
    } else {
      alert("יש למלא את כל הפרטים")
    }
    }

    async function checkUserDetails(phone) {
      if(phone) {
        try {
          const foundUser = await db
          .collection('user')
          .where("phone", "==", phone)
          .get()
          const currentUrl = match.currentUrl

          if(foundUser.empty) {
            console.log("not find user, create a new user")
            await createUser()
            return false
          }
foundUser.forEach((doc) => {
  console.log(`user number: ${doc.id}, details:`, doc.data() )
  const user = doc.data()
  if(user) {
    if(currentUrl === "/donor" && user.role === "manager") {
      alert(`user ${user.name} is not manager`)
      return
    }
    if(user.approved === false) {
      alert(`user ${user.name} is not approved yet`)
      return
    } else submitForm(doc.id)
  }else if(!user) {
    alert(`user data: ${user} is missing`)
  }
})
        }catch(error) {}
      }else {
        alert("יש למלא פרטים")
      }
    }


  return (
    <div>
      <Box className={classes.header} p={1} bgcolor="#C0EDF2" margin="0">
        כניסת מתנדבים
        <BiDonateHeart />
      </Box>
      <p className={classes.p}>
        כדי להכנס לאפליקציה צריך להכניס שם וטלפון
      </p>
      <br />

      <Form  noValidate autoComplete="off" >
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="שם" className={classes.form} value={name}
          onChange={(e) => setName(e.target.value)}/>
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
      <Box  className={classes.countinueButton}>
        <Button
          variant="outlined"
          color="primary"
          onClick={submit}
        >
          המשך
        </Button>
   
      </Box>
      <br />
      <Box style={{textAlign: "center"}}>
      <a href="http://localhost:3000/donor/">לאתר העמותה</a>
      </Box>
    </div>
  );
}


//  לשלוף מידע מאיידי כדי להציג ההזמנות הפתוחות שהמתנדב הזה לקח לפי האיידי של אותו מתנדב 
// להציג כל ההזמנות הפתוחות הקיימות שעוד לא לקחו