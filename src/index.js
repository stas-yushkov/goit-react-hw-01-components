import ReactDom from 'react-dom';

import paintingList from './paintings.json';

const painting = paintingList[1];

function Painting(props) {
  const { price, authorName, authorUrl, url, title } = props;
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
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

// https://youtu.be/kfX5HTQD26E?t=3023

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
