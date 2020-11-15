import React, { useState, useEffect } from 'react';
import Message from "./Message"
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import './App.css'; 
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';



function App() {
  const [input, setInput] = useState('')
  const [messages, setMessage] = useState([
      // { username: 'marwa', message: 'hi every body'},
      // { username: 'amira', message: 'hi all programmers'}, 
      // { username: 'hamma', message: 'what happenning here'}
    ])
  const [username, setUsername] = useState('')

  // useState = variable in react
  // useEffect = a block of codes that gets executed basedon condition



  useEffect(() => {
     // run once when the app component loaded
     db.collection('messeges')
     .orderBy('timestamp','asc')
     .onSnapshot(snapshot=> {
          setMessage(snapshot.docs.map(doc=>doc.data())
          )})

  }, [])

  useEffect(() => {
    // run code here ..
    // const name= prompt('pleaseenter your name')
    setUsername(prompt('pleaseenter your name'))
  }, [] /*condition*/)

  // console.log(input);
  console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault()
    // all the logic tosend a messege
    db.collection('messeges').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessage([...messages, {username:username,message:input}])
    setInput('')


  }



  return (
    <div className="App">
      <img alt='' width="100px" height="100px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png' /> 
     <div className="App__header">
       <h1>hello all Programmers :) here </h1>
      <h1>welcome <span className="App__username">{username}</span> </h1>
     </div>
      
      {/* messages themselves */}

      <div className="App__container">
        <FlipMove>
        {messages.map((message,index)=>(
      <Message key={index} username={username} message={message} />
    ))}
      </FlipMove>
        </div>
    
      {/* input field */}
      <form className='App__form'>
        <FormControl className="App__formControl"> 
          <Input type="text" 
                placeholder="please enter a message ....."
                  value={input} onChange={e => setInput(e.target.value)}
                  className="App__input" />
        <IconButton onClick={sendMessage} 
              color="primary" 
              disabled={!input} 
              variant="contained"  
              type="submit"
              className="App__button"
        >

          <SendIcon />

           </IconButton>
          {/* <Button
            >send message</Button> */}
        </FormControl>
        {/* button */}
      </form>


    </div>
  );
}

export default App;
