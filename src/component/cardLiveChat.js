import React from 'react';
import './style/cardLiveChat.scss';
import io from 'socket.io-client';
import Cookie from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';

import {
    Card,
    CardTitle,
    CardBody
} from 'reactstrap';
import { newChat, chatClient, chatStaff } from '../store/asynAction';


const host = 'http://localhost:8000';
const cookie = new Cookie();



const CardLiveChat = () => {

    let [roomId, setroomId] = React.useState('');
    const dispatch = useDispatch();
    const socketRef = React.useRef();

    const [chat, setchat] = React.useState(null);

    const [showlivechat, setshowlive] = React.useState(false);
    const handleLivechat = () => {
        // socket.emit('new-chat');
        setshowlive(!showlivechat);
    }

    const checkRole = () => {
        return cookie.get('role')?.key;
    }

    const livechat = (e) => {
        e.preventDefault();
        if (checkRole() != 'admin') {
            dispatch(chatClient(roomId, e.target.chat.value));
        }
        if (checkRole() == 'admin') {
            dispatch(chatStaff('634c247b128bff659fd5fe6c', e.target.chat.value));
        }
    }

    React.useEffect(() => {


        socketRef.current = io.connect(host);
        setroomId(localStorage.getItem("roomId"));

        if (roomId == null && checkRole() != 'admin') {
            dispatch(newChat())
        } else {
            if (checkRole() != 'admin') {
                socketRef.current.on('chat-client', data => {
                    setchat(data.chat.chat);
                })
            }
            if (checkRole() == 'admin') {
                socketRef.current.on('chat-staff', data => {
                    setchat(data.chat.chat);
                })
            }
        }
    })
    return (
        <div>
            {
                showlivechat != false ? (
                    <CardBody className="card-live-chat p-3">
                        <CardTitle className='h6 title mb-3'>
                            <strong> Customer Support</strong>
                        </CardTitle>
                        <div className="wrapper-live-chat">
                            {
                                chat != null ? chat.map((item, index) => (
                                    <Card key={index} className={`mb-3 chat-item ${item.client == null ? `chat-staff` : 'chat-client'}`}>

                                        <div className='m-0'>
                                            {
                                                item.client == null ? (
                                                    <i className="fa fa-user mr-2" aria-hidden="true"></i>
                                                ) : ''
                                            }
                                            &nbsp;
                                            {
                                                item.client == null ? item.staff : item.client
                                            }
                                        </div>

                                    </Card>
                                )) : ''
                            }
                        </div>
                        <CardTitle className="input-chat">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <form className='section-chat' onSubmit={livechat}>
                                <input type="text" name="chat" id="" className="form-control" />
                                <button type='submit'>Send</button>
                            </form>
                        </CardTitle>
                    </CardBody>
                ) : ''
            }

            <button onClick={handleLivechat}>
                <Card className={`live_chat`}>
                    <i className="fa-brands fa-facebook-messenger"></i>
                </Card>
            </button>
        </div >
    );
}

export default CardLiveChat;