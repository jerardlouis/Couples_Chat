import logo from './logo.svg';
import './App.css';
import ListItem  from './ListItem.js';
import { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import Login from "./Login.js";


const socket = io(); // Connects to socket connection

function App() {
  const [messages, setMessages] = useState([]); // State variable, list of messages
  const inputRef = useRef(null); // Reference to <input> element
  const [user, setUser] = useState("");

  useEffect(() => {
    socket.on("login", (data) => {
      //console.log(data.newUsers);
      //setUserList(data.newUsers);
    });
  });

  const login = (userName) => {
    setUser(userName);

    //let newList = userList;
    //if (newList.X === "") {
      //newList.X = userName;
      //setUserList(newList);
    //} else if (newList.O === "") {
      //newList.O = userName;
      //setUserList(newList);
    //} else {
      //newList.Spectators.push(userName);
    //}
    //setUserList(newList);
    //console.log(newList);
    //socket.emit("login", { newUsers: newList });
  };

  function onClickButton() {
    if (inputRef != null) {
      const message = user + ": " + inputRef.current.value;
      
      // If your own client sends a message, we add it to the list of messages to 
      // render it on the UI.
      setMessages(prevMessages => [...prevMessages, message]);
      socket.emit('chat', { message: message });
    }
  }

  // The function inside useEffect is only run whenever any variable in the array
  // (passed as the second arg to useEffect) changes. Since this array is empty
  // here, then the function will only run once at the very beginning of mounting.
  useEffect(() => {
    // Listening for a chat event emitted by the server. If received, we
    // run the code in the function that is passed in as the second arg
    socket.on('chat', (data) => {
      console.log('Chat event received!');
      console.log(data);
      // If the server sends a message (on behalf of another client), then we
      // add it to the list of messages to render it on the UI.
      setMessages(prevMessages => [...prevMessages, data.message]);
    });
  }, []);

  return (
    <div>
      {user !== "" ? (
      <div class="chat">
        <h3>Chat Messages</h3>
        <div class="box">
          <ul>
            {messages.map((item, index) => <ListItem key={index} name={item} />)}
          </ul>
        </div>
        <input ref={inputRef} type="text" />
        <button onClick={onClickButton}>Send</button>
      </div>
      ) : (
      <Login login={login}/>
      )}
    </div>
  );
}

export default App;