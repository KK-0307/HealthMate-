import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://img.freepik.com/free-vector/cute-panda-holding-love-cartoon-icon-illustration_138676-2666.jpg?w=1060&t=st=1714390726~exp=1714391326~hmac=d6aebabf7040bd1575c7fdacb4b41ba59fdd0de7ed0040f8aa979036b99a852b"
            alt=""
          />
          <span>Kayan</span>
          <p>Hi! Nice to meet you!</p>
        </div>
        <div className="message">
          <img
            src="https://img.freepik.com/free-vector/cute-panda-holding-love-cartoon-icon-illustration_138676-2666.jpg?w=1060&t=st=1714390726~exp=1714391326~hmac=d6aebabf7040bd1575c7fdacb4b41ba59fdd0de7ed0040f8aa979036b99a852b"
            alt=""
          />
          <span>Kayan</span>
          <p>Have you tried this restaurant?</p>
        </div>
        <div className="message">
          <img
            src="https://img.freepik.com/free-vector/cute-panda-holding-love-cartoon-icon-illustration_138676-2666.jpg?w=1060&t=st=1714390726~exp=1714391326~hmac=d6aebabf7040bd1575c7fdacb4b41ba59fdd0de7ed0040f8aa979036b99a852b"
            alt=""
          />
          <span>Kayan</span>
          <p>Any recommendations?</p>
        </div>
        <div className="message">
          <img
            src="https://img.freepik.com/free-vector/cute-panda-holding-love-cartoon-icon-illustration_138676-2666.jpg?w=1060&t=st=1714390726~exp=1714391326~hmac=d6aebabf7040bd1575c7fdacb4b41ba59fdd0de7ed0040f8aa979036b99a852b"
            alt=""
          />
          <span>Kayan</span>
          <p>You There???</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://img.freepik.com/free-vector/cute-panda-holding-love-cartoon-icon-illustration_138676-2666.jpg?w=1060&t=st=1714390726~exp=1714391326~hmac=d6aebabf7040bd1575c7fdacb4b41ba59fdd0de7ed0040f8aa979036b99a852b"
                alt=""
              />
              Kayan
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Hi! Nice to meet you!</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Have you tried this restaurant?</p>
              <span>55 minutes ago</span>
            </div>
            <div className="chatMessage">
              <p>Any recommendations?</p>
              <span>30 minutes ago</span>
            </div>
            <div className="chatMessage own">
              <p>You There???</p>
              <span>10 minutes ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
