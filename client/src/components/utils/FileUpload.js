import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';
import Axios from 'axios';

function FileUpload(props) {
    
    const [Images, setImages] = useState([]);

    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append('file', files[0])


        //save the image we chose inside the node server
        Axios.post('/api/product/uploadImage', formData, config)
        .then(response => {
            if(response.data.success) {
                setImages([...Images, response.data.image])
                props.refreshFunction([...Images, response.data.image])
            }else {
                alert('Failed to save the image in server')
            }
        })
    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }

    // const onDelete = (image) => {
    //     // const currentIndex = Images.indexOf(image);

    //     let newImages = image
    //     newImages.delete()

    //     setImages(newImages)
    //     props.refreshFunction(newImages)
    // }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Dropzone 
                onDrop={onDrop}
                multiple={false}
                maxSize={900000000000}
            >
                {({ getRootProps, getInputProps}) => (
                    <div className='d-flex justify-content-center align-items-center border border-2 rounded-3' style={{
                        width:'300px', height:'240px', cursor: 'pointer'
                    }}
                        {...getRootProps()}
                    >
                        
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{ fontSize: '3rem'}} />
                    </div>
                )}

            </Dropzone>
            
            <div className={'d-flex ' + (Images.length > 0 ? 'overflow-scroll' : '' )} style={{ display: 'flex', width: '350px', height: '240px'}}>
                    {/* <div onClick={() => onDelete(Images)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhost:5000/${Images}`}/>
                    </div> */}
                     {Images.map((image, index) => (
                        <div onClick={() => onDelete(image)}>
                            <img style={{ minWidth: '300px', width: '300px', height: '240px', cursor: 'pointer' }} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`}/>
                         </div>   
                    ))}
            </div>
        </div>
    )
}

export default FileUpload
