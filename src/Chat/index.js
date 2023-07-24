import React from "react";
import "../Css/Chat.css";

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="left-part">
        <div className="h-[5%]">
          <button className="">+ New Chat</button>
        </div>
        <div className="chat-history pt-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div className="chat-item" key={index}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-message-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* ... (the SVG path data) ... */}
                </svg>
              </span>
              My chat history
            </div>
          ))}
        </div>

        <div className="settings">
          {[1, 2, 3].map((item, index) => (
            <div className="chat-item" key={index}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings-code"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* ... (the SVG path data) ... */}
                </svg>
              </span>
              My chat history
            </div>
          ))}
        </div>
      </div>
      <div className="right-part">
        <div className="gpt-app">
          <div className="title">App GPT</div>
        </div>
        <div className="separator"></div>
      </div>
    </div>
  );
};

export default Chat;
