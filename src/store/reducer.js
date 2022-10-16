import * as type from './action/type';

const initalState = {
    error: false,
    loading: true,
    topProduct: [],
    categoryProduct: [],
    detailProduct: [],
    relatedProduct: []
}


export const reducerProduct = (state = initalState, action) => {
    switch (action.type) {
        case type.GET_DATA_STARTED:
            return {
                ...state, loading: true
            }
        case type.GET_TOP_PRODUCT_SUCCESS:
            return {
                ...state, topProduct: action.payload, loading: false, error: false
            }
        case type.GET_LIST_PRODUCT_SUCCESS:
            return {
                ...state, categoryProduct: action.payload, loading: false, error: false
            }
        case type.GET_LIST_PRODUCT_DETAIL:
            return {
                ...state, detailProduct: action.detailProduct, relatedProduct: action.relatedProduct, loading: false, error: false
            }
        case type.GET_DATA_ERROR:
            return {
                ...state, error: true
            }
        default: return state
    }
}


const initalModifiedUser = {
    successful: false,
    error: false
}

export const reducerModifyUser = (state = initalModifiedUser, action) => {
    switch (action.type) {
        case type.REGISTER_USER_SUCCESS:
            return {
                successful: true, error: false
            }
        case type.REGISTER_USER_ERROR:
            return {
                error: true, successful: false
            }
        default: return state;
    }
}


const initalCart = {
    data: []
}

export const reducerCart = (state = initalCart, action) => {
    switch (action.type) {
        case type.ADD_CART:
            return {
                ...state, data: [...state.data, action.payload]
            }
        case type.UPDATE_CART:
            return state.data = action.payload

        case type.REMOVE_CART:
            return state.data = [];
        default: return state;
    }
}


const initalHistoryCart = {
    data: []
}


export const reducerHistoryCart = (state = initalHistoryCart, action) => {
    switch (action.type) {
        case type.HISTORY_ORDER:
            return {
                ...state, data: action.payload
            }
        default: return state;
    }
}

const initalDetailBill = {
    data: []
}

export const reducerDetailBill = (state = initalDetailBill, action) => {
    switch (action.type) {
        case type.DETAIL_BILL:
            return {
                ...state, data: action.payload
            }
        default: return state;
    }
}


const inittalChat = {
    data: []
}

export const reducerChat = (state = inittalChat, action) => {
    switch (action.type) {
        case type.CHAT:
            return {
                ...state, data: action.payload
            }
        default: return state;
    }
}