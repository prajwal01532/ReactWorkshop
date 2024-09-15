import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App1() {
    const showNotification = () => {
        //Info Messsage
        toast.info("Welcome!!");
        //Sucess Message
        toast.success('Completed','Registered')
        //Warning wala message
       toast.warning('Warning message');
       //Error Message
     toast.error('Error message');     
    
    };

    return (
        <div>
            <ToastContainer />
            <button className="bg-yellow-500 p-2 rounded-xl " onClick={showNotification}>Show Notification</button>
            <h1>This is the next component named App1</h1>
            <p>This is the component made on day one</p>
        </div>
    );
}

export { App1 };
