import React from 'react';
import ReactDom from 'react-dom';

const jsxElement = (
  <div a={5} b={10}>
    Hello World!!
  </div>
);
console.log('🚀 ~ jsxElement', jsxElement);

ReactDom.render(jsxElement, document.querySelector('#root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
