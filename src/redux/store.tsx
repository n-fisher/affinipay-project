import { createStore } from 'redux';
import lookupApp from './reducers';
const store = createStore(lookupApp);

export default store;