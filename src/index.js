import React from 'react';
import ReactDOM from 'react-dom';

import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './css/index.css';
import App from './views/main';

// import store from './store/store'
// console.log(store.getState(),33)

function Dom () {
   ReactDOM.render(<App />, document.getElementById('root'))
}
Dom()
//store.subscribe(Dom)