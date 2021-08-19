import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {store} from './store/store'
import AppRouters from './routers/AppRouters'


ReactDOM.render(
  
   <Provider store={store}> 
     <AppRouters /> 
   </Provider>, 
  document.getElementById('root')
);

