import React from "react";

const Chat = () => {
  return (
    <div className=" h-screen w-screen bg-[#050509]">
      <div className=" w-[20%] h-screen bg-[#535360] text-white p-4">
        <div className="h-[5%]">
          <button className=" w-full h-[50px] border rounded hover:bg-slate-600 ">
            + New Chat
          </button>
        </div>
        <div className="h-[65%] overflow-scroll shadow-lg hide-scroll-bar mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div className="py-3 text-center mt-4 text-lg font-light flex items-center hover:bg-slate-600 px-8 cursor-pointer rounded ">
              <span className=" mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-message-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 9h8"></path>
                  <path d="M8 13h6"></path>
                  <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
                </svg>
              </span>
              My chat history
            </div>
          ))}
        </div>

        <div className=" h-[25%] border-t overflow-scroll shadow-lg hide-scroll-bar">
          {[1, 2, 3].map((item, index) => (
            <div className="py-3 text-center mt-4 text-lg font-light flex items-center hover:bg-slate-600 px-8 cursor-pointer rounded ">
              <span className=" mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-settings-code"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11.482 20.924a1.666 1.666 0 0 1 -1.157 -1.241a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.312 .318 1.644 1.794 .995 2.697"></path>
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path d="M20 21l2 -2l-2 -2"></path>
                  <path d="M17 17l-2 2l2 2"></path>
                </svg>
              </span>
              My chat history
            </div>
          ))}
        </div>
      </div>
      <div className=" w-[80%]">
        <div className=" h-[80%] border flex flex-col justify-center items-center text-black">
          <div className=" text-4xl font-bold">App GPT</div>
          <div></div>
        </div>

        <div className=" h-[20%] border"></div>
      </div>
    </div>
  );
};

export default Chat;
