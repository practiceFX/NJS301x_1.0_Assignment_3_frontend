import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducerProduct, reducerCart, reducerHistoryCart, reducerDetailBill, reducerChat } from './reducer';


const rootReducer = combineReducers({
    reducerProduct: reducerProduct,
    reducerCart: reducerCart,
    reducerHistoryCart: reducerHistoryCart,
    reducerDetailBill: reducerDetailBill,
    reducerChat: reducerChat
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;