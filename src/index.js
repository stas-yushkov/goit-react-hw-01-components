import ReactDom from 'react-dom';

import paintingList from './paintings.json';

const data1 = paintingList[0];
const data2 = paintingList[1];

const Painting1 = (
  // Компонент Painting
  <div>
    <img src={data1.url} alt={data1.title} width="480" />
    <h2>{data1.title}</h2>
    <p>
      Автор: <a href={data1.author.url}>{data1.author.tag}</a>
    </p>
    <p>Цена: {data1.price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

const Painting2 = (
  // Компонент Painting
  <div>
    <img src={data2.url} alt={data2.title} width="480" />
    <h2>{data2.title}</h2>
    <p>
      Автор: <a href={data2.author.url}>{data2.author.tag}</a>
    </p>
    <p>Цена: {data2.price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

const els = (
  <div>
    {Painting1}
    {Painting2}
  </div>
);

ReactDom.render(els, document.querySelector('#root'));

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
