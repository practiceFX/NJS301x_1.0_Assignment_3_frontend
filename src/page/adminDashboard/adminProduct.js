import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Row, Col, CardTitle } from 'reactstrap';
import Cookie from 'universal-cookie';
import './listproduct.scss';
import Sidebar from '../../component/adminDashboard/sidebar';
import { deleteProduct, getAllProduct } from '../../store/asynAction';
import AdminModified from './adminModified';

import { useNavigate } from 'react-router-dom';


let stringToFormatPrice = Intl.NumberFormat('en-US');
const AdminProduct = () => {

    const cookie = new Cookie();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [hiddenEdit, sethiddenEdit] = React.useState(false);
    const [hiddenAdd, sethiddenAdd] = React.useState(false);

    const dataListProduct = useSelector(state => state?.reducerProduct?.categoryProduct?.data);
    const [dataSearch, setDataSearch] = React.useState('');



    //product Edit 
    const [name, setName] = React.useState('');
    const [category, setcategory] = React.useState('');
    const [short_desc, setshort_desc] = React.useState('');
    const [long_desc, setlong_desc] = React.useState('');
    const [id, setid] = React.useState('');



    const handleSearch = (e) => {
        e.preventDefault();
        let search_key = e.target.search.value;
        if (search_key == '') {
            setDataSearch(dataListProduct);
        } else {
            let search_list = dataListProduct.filter(item => {
                if (item.name.indexOf(search_key)) {
                    return true;
                }
            })
            setDataSearch(search_list);
        }
    }
    const handleEdit = (id) => {
        let product = dataListProduct.find(item => item._id == id);
        setName(product.name);
        setcategory(product.category);
        setshort_desc(product.short_desc);
        setlong_desc(product.long_desc);
        setid(id);
        sethiddenEdit(true);
    }
    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
        window.location.reload();
    }
    const handleAdd = (e) => {
        sethiddenAdd(true);
    }
    const handleCancel = () => {
        sethiddenEdit(false);
        sethiddenAdd(false);
    }
    React.useEffect(() => {
        dispatch(getAllProduct());

        if (cookie.get('role')?.key != 'admin') {
            navigate('/');
        }

    }, [])
    return (
        <React.Fragment>
            {
                hiddenEdit == false && hiddenAdd == false ? (
                    <Row>
                        <Col xs={2} className="p-0">
                            <Sidebar />
                        </Col>
                        <Col xs={10} className="page-admindashboard list-product-page py-3 px-5">
                            <form onSubmit={handleSearch}>
                                <CardTitle className='serach-area mb-5'>
                                    <input type="text" name="search" id="" className="form-control w-60" />
                                    <button type="submit" className="btn btn-primary">Search</button>
                                    <button className="btn btn-primary mx-3" onClick={() => handleAdd()}>Add</button>
                                </CardTitle>
                            </form>

                            <Table borderless className="table table-striped">
                                <thead>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Edit</th>
                                </thead>
                                <tbody>
                                    {
                                        dataSearch == '' ? (
                                            <React.Fragment>
                                                {
                                                    dataListProduct != undefined && dataListProduct != '' ?
                                                        dataListProduct.map((item, index) => (
                                                            <tr key={index}>
                                                                <th>{item._id}</th>
                                                                <th>{item.name}</th>
                                                                <th>{stringToFormatPrice.format(item.price)}</th>
                                                                <th><img src={item.img1} style={{ width: '50px' }} /></th>
                                                                <th>{item.category}</th>
                                                                <th>
                                                                    <button className='btn btn-primary' onClick={() => handleEdit(item._id)}>
                                                                        Edit
                                                                    </button>
                                                                    <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>
                                                                        Delete
                                                                    </button>
                                                                </th>
                                                            </tr>
                                                        )) : ''
                                                }
                                            </React.Fragment>
                                        ) : (
                                            dataSearch.map((item, index) => (
                                                <tr key={index}>
                                                    <th>{item._id}</th>
                                                    <th>{item.name}</th>
                                                    <th>{stringToFormatPrice.format(item.price)}</th>
                                                    <th><img src={item.img1} style={{ width: '50px' }} /></th>
                                                    <th>{item.category}</th>
                                                    <th>
                                                        <button className='btn btn-primary' onClick={() => handleEdit(item._id)}>
                                                            Edit
                                                        </button>
                                                        <button className='btn btn-danger' onClick={handleDelete(item._id)}>
                                                            Delete
                                                        </button>
                                                    </th>
                                                </tr>
                                            ))
                                        )
                                    }
                                    {

                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                ) : ''
            }
            {
                hiddenEdit == true ? (
                    <AdminModified
                        action='edit'
                        handleCancel={() => handleCancel()}
                        name={name}
                        setName={setName}
                        category={category}
                        setcategory={setcategory}
                        short_desc={short_desc}
                        setshort_desc={setshort_desc}
                        long_desc={long_desc}
                        setlong_desc={setlong_desc}
                        id={id}
                    />
                ) : ''
            }
            {
                hiddenAdd == true ? (
                    <AdminModified action='add' handleCancel={() => handleCancel()} />
                ) : ''
            }
        </React.Fragment>
    );
}

export default AdminProduct;
