import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = ()=>{
  return (
    <>
      <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
            <p className="m-0 text-gray-400">Tailwindcss입니다.</p>
            <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">버튼</button>
        </div>
    </>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
