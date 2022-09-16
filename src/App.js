import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatWindow from "./ChatWindow";



const users = [{ username: "Amy" }, { username: "John" }];




const App = () => {


  const [messages,setMessages]=useState([]) ;



const onMessage = (username ,message) =>{
const newMessage = {
  username : username,
  text :message, 
}
setMessages(messages.concat(newMessage));
}

  // If the user did not type anything, he/she should not be allowed to submit.
 

  return (
    <div className="App">
      <div className="container">

      {users.map((user) => (
          <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            onMessage={onMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
