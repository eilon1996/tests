import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import axios from 'axios';
import 'react-dropzone-uploader/dist/styles.css'

import Dropzone from 'react-dropzone-uploader'



const UploadImg = (props) => {


    const config = {
        //IAM username - test1, group - test1-group
        bucketName: 'modular-restrunt-images',
        dirName: 'default', /* optional */
        region: 'us-east-2',
        accessKeyId: 'AKIAYG5UCJQSWTYWXTH5',
        secretAccessKey: 'TK+93nXQo2oZoZ83LgkutNnzuu8bPVulPgk3va1k',
    }


    const MyUploader = () => {
        // specify upload params and url for your files
        const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

        // called every time a file's `status` changes
        const handleChangeStatus = ({ meta, file }, status) => {
            console.log(status, meta, file)
            if (status === "done") {
                var data = new FormData();
                var ending = file.name.split('.')
                data.append('image', file, "imageName."+ending[ending.length-1]);

                var config = {
                    method: 'POST',
                    url: 'http://localhost:5000/upload',
                    data: data
                };

                axios(config)
                    .then(response => {
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error.message);
                    });

            }
        }

        return (
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                accept="image/*"
                maxFiles={1}
                inputContent={(files, extra) => (extra.reject ? 'Only Image file is allowed' : 'Drop Image Here')}
                styles={{
                    dropzoneReject: { borderColor: '#F19373', backgroundColor: '#F1BDAB' },
                    inputLabel: (files, extra) => (extra.reject ? { color: '#A02800' } : {}),
                }}
            />
        )
    }


    return (
        <div className="App">
            <h2>dropzone</h2>
            <form>
                <MyUploader />

                <button type="submit">submit</button>
            </form>
        </div>
    );
}

// to add submit button to the dropzone add in <Dropzone>   onSubmit={handleSubmit}


export default UploadImg;