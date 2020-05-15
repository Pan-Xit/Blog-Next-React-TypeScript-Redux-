import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';

import reducer from './reducers';

export default createStore(reducer, (applyMiddleware(Thunk)))
