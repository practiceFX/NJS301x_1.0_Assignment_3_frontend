const urlServer = 'http://localhost:8000';

export const urlTopProduct = urlServer + '/top-product';
export const urlAllProduct = urlServer + '/list-product';
export const urlDetalProduct = urlServer + '/detail-product';
export const urlRelatedProduct = urlServer + '/category-product';
export const urlEditProduct = urlServer + '/edit-product';
export const urlAddProduct = urlServer + '/add-product';
export const urlDeleteProduct = urlServer + '/delete-product';




export const urlRegisterUser = urlServer + '/register-user';
export const urlLoginUser = urlServer + '/login';
export const urlCartOrder = urlServer + '/cart-order';

export const urlCategory = (category) => {
    return urlRelatedProduct + '?category=' + category;
}

export const urlDataDetail = (id) => {
    return urlDetalProduct + '?id=' + id;
}


export const urlHistoryCart = (idUser) => {
    return urlServer + '/history-cart?id=' + idUser;
}

export const urlDetailBill = urlServer + '/detail-bill';


export const urllogout = urlServer + '/logout';

export const urlgetChat = urlServer + '/chat';
export const urlInsertClient = urlServer + '/insert-client';
export const urlInsertStaff = urlServer + '/insert-staff';

export const urlnewChat = urlServer + '/new-chat';