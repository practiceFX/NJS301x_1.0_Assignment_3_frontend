import * as type from './type';

export const getDataStarted = () => {
    return {
        type: type.GET_DATA_STARTED
    }
}

export const getTopProduct = (data) => {
    return {
        type: type.GET_TOP_PRODUCT_SUCCESS,
        payload: {
            data
        }
    }
}

export const getListProduct = (data) => {
    return {
        type: type.GET_LIST_PRODUCT_SUCCESS,
        payload: {
            data
        }
    }
}

export const getDetailProduct = (detail, related) => {
    return {
        type: type.GET_LIST_PRODUCT_DETAIL,
        detailProduct: {
            detail
        },
        relatedProduct: {
            related
        }

    }
}

export const getDataError = () => {
    return {
        type: type.GET_DATA_ERROR,

    }
}





export const registerUserSuccess = () => {
    return {
        type: type.REGISTER_USER_SUCCESS
    }
}

export const registerUserError = () => {
    return {
        type: type.REGISTER_USER_ERROR
    }
}



export const addCart = (id, img, name, price, amount) => {
    return {
        type: type.ADD_CART,
        payload: {
            id: id,
            img: img,
            name: name,
            price: price,
            amount: amount
        }
    }
}
export const updateCart = (data) => {
    return {
        type: type.UPDATE_CART,
        payload: {
            data
        }
    }
}


export const historyCart = (data) => {
    return {
        type: type.HISTORY_ORDER,
        payload: {
            data
        }
    }
}

export const removeCart = () => {
    return {
        type: type.REMOVE_CART
    }
}


export const detailBill = (data) => {
    return {
        type: type.DETAIL_BILL,
        payload: {
            data
        }
    }
}

export const chat = (data) => {
    return {
        type: type.CHAT,
        payload: {
            data
        }
    }
} 
