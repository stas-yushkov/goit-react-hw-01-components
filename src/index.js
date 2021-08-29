import ReactDom from 'react-dom';

import paintingList from './paintings.json';

const painting = paintingList[0];

function Painting(props) {
  return (
    <div>
      <img src={props.url} alt={props.title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Автор: <a href={props.authorUrl}>{props.authorName}</a>
      </p>
      <p>Цена: {props.price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

ReactDom.render(
  <Painting
    url={painting.url}
    title={painting.title}
    authorName={painting.author.tag}
    authorUrl={painting.author.url}
    price={painting.price}
  />,
  document.querySelector('#root'),
);

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
