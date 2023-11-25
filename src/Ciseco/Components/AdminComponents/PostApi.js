import React from 'react';
import axios from 'axios';

function PostApi(postdata) {
   

    const sendData = async (postdata) => {
        console.log(postdata)
        try {
            console.log(postdata,"postdata")
            const apiUrl = 'http://localhost:5000/banner';
            
            const response = await axios.post(apiUrl, postdata);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    sendData(postdata);


    return {
        sendData,
    };
}

export default PostApi
