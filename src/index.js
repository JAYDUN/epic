import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import App from './App';
import reducers from './redux/reducers';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './index.css';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
