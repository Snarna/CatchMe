import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CatchMeReducers from './reducers';
import CatcheMeApp from './containers/App';

const store = createStore(CatchMeReducers);

ReactDOM.render(
    <Provider store={store}>
        <CatcheMeApp/>
    </Provider>,
    document.getElementById('root')
);