import * as action from '../action/action';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {
    urlAddProduct, urlDetailBill,
    urlTopProduct, urlAllProduct, urlCategory,
    urlDataDetail, urlRegisterUser, urlLoginUser,
    urlCartOrder, urlHistoryCart, urlEditProduct,
    urlDeleteProduct, urllogout, urlInsertStaff, urlInsertClient, urlgetChat, urlnewChat,
} from '../../urls';



// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = 'csrftoken'


export const getTopProduct = () => async dispatch => {
    dispatch(action.getDataStarted());
    try {
        let respon = await axios.get(urlTopProduct);
        let data = await respon.data;
        dispatch(action.getTopProduct(data));
    } catch (err) {

        dispatch(action.getDataError())
    }
}

export const getAllProduct = () => async dispatch => {
    dispatch(action.getDataStarted());
    try {
        let respon = await axios.get(urlAllProduct);
        let data = await respon.data;
        dispatch(action.getListProduct(data));
    } catch (err) {

        dispatch(action.getDataError())
    }
}


export const editProduct = (
    _id, category, long_desc, name, short_desc
) => async dispatch => {
    try {
        await axios.post(urlEditProduct, {
            _id: _id,
            category: category,
            long_desc: long_desc,
            name: name,
            short_desc: short_desc
        }).then(respon => {
            alert('Edit Sucessfully !!!');
            console.log(respon)
        }).catch(err => {
            alert('Somthing is wrong: ' + err)
        })
    } catch (err) {
        console.log(err);
    }
}




export const addProduct = (
    category, long_desc, name, short_desc, files
) => async dispatch => {
    try {
        await axios.post(urlAddProduct, {
            category, long_desc, name, short_desc, files
        })
    } catch (err) {
        console.log(err)
    }
}


export const deleteProduct = (id) => async dispatch => {
    try {
        await axios.post(urlDeleteProduct, {
            _id: id
        })
    } catch (err) {
        console.log(err)
    }
}



export const getDataCategories = (categories) => async dispatch => {
    dispatch(action.getDataStarted());
    try {
        let respon = await axios.get(urlCategory(categories));
        let data = await respon.data;
        dispatch(action.getListProduct(data));
    } catch (err) {
        dispatch(action.getDataError())
    }
}

export const getDataDetail = (id, category) => async dispatch => {
    dispatch(action.getDataStarted());
    try {
        let responDetail = await axios.get(urlDataDetail(id))
        let dataDetail = await responDetail.data;
        let responRelated = await axios.get(urlCategory(category));
        let dataRelated = await responRelated.data;
        dispatch(action.getDetailProduct(dataDetail, dataRelated));
    } catch (err) {
        dispatch(action.getDataError());
    }
}

export const registerUser = (username, password, confirmPassword) => async dispatch => {
    await axios.post(urlRegisterUser, {
        username: username,
        password: password,
        confirmPassword: confirmPassword
    }).then(respon => {
        dispatch(action.registerUserSuccess());
        if (respon.status == 200) {
            alert('Register Sucessfully !!!');
        }
    }).catch(err => {
        dispatch(action.registerUserError());
    })
}


export const loginUser = (username, password) => async dispatch => {
    await axios.post(urlLoginUser, {
        username: username,
        password: password
    },
        { withCredentials: true }
    ).then(respon => {
        let cookies = new Cookies();
        let email = respon.data.user[0].username;
        let idUser = respon.data.user[0]._id;
        let isLogined = respon.data.isLogined;
        let role = respon.data.user[0].role;
        cookies.set('email', { key: email });
        cookies.set('id', { key: idUser });
        cookies.set('isLogined', { key: isLogined });
        cookies.set('role', { key: role });
    })
}

export const placeOrder = (
    user_id,
    inforProduct,
    fullname,
    email,
    phoneNumber,
    address,
    totalPrice,
    crfsToken
) => async dispatch => {
    await axios.post(urlCartOrder, {
        user_id: user_id,
        inforProduct: inforProduct,
        fullname: fullname,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        totalPrice: totalPrice
    }, {
        headers: {
            'CSRF-Token': crfsToken,
        },
        withCredentials: true,
    }
    ).then(respon => {
        dispatch(action.removeCart());
        alert('Order Sucessfully !!!');
    }
    )
}



export const historyCart = (id) => async dispatch => {
    try {
        let respon = await axios.get(urlHistoryCart(id));
        let data = await respon.data;
        dispatch(action.historyCart(data))
    } catch (err) {
        console.log(err);
    }
}




export const detailBill = () => async dispatch => {
    try {
        let respon = await axios.get(urlDetailBill);
        let data = await respon.data;
        dispatch(action.detailBill(data))
    } catch (err) {
        console.log(err);
    }
}

export const logoutUser = () => async dispatch => {
    try {
        await axios.post(urllogout).then(
            respon => {
                console.log('Successfull !!!')
            }
        );
    } catch (error) {
        console.log(error);
    }
}


export const chatClient = (id, chat) => async dispatch => {
    try {
        await axios.post(urlInsertClient, {
            id: id, chat: chat
        })
    } catch (err) {
        console.log(err);
    }
}

export const chatStaff = (id, chat) => async dispatch => {
    try {
        await axios.post(urlInsertStaff, {
            id: id, chat: chat
        })
    } catch (err) {
        console.log(err)
    }
}

export const newChat = () => async dispatch => {
    try {
        await axios.post(urlnewChat).then(respon => {
            localStorage.setItem('roomId', respon.data)
        }).catch(err => {
            console.log(err)
        })
    } catch (err) {
        console.log(err);
    }
}
export const chat = (id) => async dispatch => {
    try {
        let respon = await axios.get(urlgetChat + '?id=' + id);
        let data = await respon.json();
        dispatch(action.chat(data));
    } catch (err) { console.log(err) }
}