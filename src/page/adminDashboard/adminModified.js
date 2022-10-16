import React from 'react';
import { CardGroup, CardTitle, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import Sidebar from '../../component/adminDashboard/sidebar';
import { addProduct, editProduct } from '../../store/asynAction';

const AdminModified = props => {
    const dispatch = useDispatch();


    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addProduct(
            e.target.category.value,
            e.target.long_desc.value,
            e.target.name.value,
            e.target.short_desc.value,
            e.target.files.files
        ))
    }


    const handleEdit = (e) => {
        dispatch(editProduct(
            e.target.id.value,
            e.target.category.value,
            e.target.long_desc.value,
            e.target.name.value,
            e.target.short_desc.value
        ))
    }


    const handleAction = (e) => {
        if (props.action == 'add') {
            return handleAdd(e);
        }
        if (props.action == 'edit') {
            return handleEdit(e);
        }
    }


    return (
        <React.Fragment>
            <Row>
                <Col xs={2} className="p-0">
                    <Sidebar />
                </Col>
                <Col xs={10} className="page-admindashboard py-3 px-5">
                    <React.Fragment>
                        <form onSubmit={handleAction}>
                            {
                                props.action != 'add' ? <input type="hidden" name="id" value={props.id} /> : ''
                            }
                            <CardTitle className="h1">
                                {props.action == 'add' ? 'Thêm Sản Phẩm' : 'Chỉnh sửa sản phẩm'}

                            </CardTitle>
                            <CardGroup className="my-4">
                                <CardTitle>
                                    Product Name
                                </CardTitle>
                                <input type="text" name="name" id="" className="form-control"
                                    value={props.action != 'add' ? props.name : ''}
                                    onChange={e => props.setName(e.target.value)}
                                />
                            </CardGroup>
                            <CardGroup className="my-4">
                                <CardTitle>
                                    Category
                                </CardTitle>
                                <input type="text" name="category" id="" className="form-control"
                                    value={props.action != 'add' ? props.category : ''}
                                    onChange={e => props.setCategory(e.target.value)}
                                />
                            </CardGroup>
                            <CardGroup className="my-4">
                                <CardTitle>
                                    Short Description
                                </CardTitle>
                                <textarea name="short_desc" id="" cols="30" rows="10" className="form-control"
                                    value={props.action != 'add' ? props.short_desc : ''}
                                    onChange={e => props.setShortDesc(e.target.value)}
                                ></textarea>
                            </CardGroup>
                            <CardGroup className="my-4">
                                <CardTitle>
                                    Long Description
                                </CardTitle>
                                <textarea name="long_desc" id="" cols="30" rows="10" className="form-control"
                                    value={props.action != 'add' ? props.long_desc : ''}
                                    onChange={e => props.setLongDesc(e.target.value)}
                                ></textarea>
                            </CardGroup>

                            {
                                props.action != 'add' ? '' : (
                                    <CardGroup className="my-4">
                                        <CardTitle>
                                            Upload image 5 files
                                        </CardTitle>
                                        <input type="file" id="files" name="files" className="form-control" multiple></input>
                                    </CardGroup>
                                )
                            }

                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button className="btn btn-primary mx-3" onClick={props.handleCancel}>Cancel</button>
                        </form>
                    </React.Fragment>
                </Col>
            </Row>

        </React.Fragment >
    );
}

export default AdminModified;
