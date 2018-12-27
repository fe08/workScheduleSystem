import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style.js'
import Schedule from './components/schedule';
import { Provider } from 'react-redux';
import { store } from './store'

const App = (
    <Provider store={store}>
        <Fragment>
            <Schedule />
            <GlobalStyle />
        </Fragment>     
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));


