import Axios from 'axios';
import React, { useState } from 'react';
import FileUpload from '../../utils/FileUpload';

const Continents = [
    { key: 1, value: "Africa"},
    { key: 2, value: "Europe"},
    { key: 3, value: "Asia"},
    { key: 4, value: "North America"},
    { key: 5, value: "South America"},
    { key: 6, value: "Australia"},
    { key: 7, value: "Antarctica"}
]

function UploadProduct(props) {

    const [TitleValue, setTitleValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [PriceValue, setPriceValue] = useState(0);
    const [ContinentValue, setContinentValue] = useState(1);

    const [Images, setImages] = useState([]);

    const onTitleChange = (e) => {
        setTitleValue(e.target.value);
    }

    const onDescriptionChange = (e) => {
        setDescriptionValue(e.target.value);
    }

    const onPriceChange = (e) => {
        setPriceValue(e.target.value);
    }

    const onContinentsSelectChange = (e) => {
        setContinentValue(e.target.value);
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(!TitleValue || !DescriptionValue || !PriceValue || !Images || !ContinentValue) {
            return alert('fill all the fields first!')
        }
        
        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            continents: ContinentValue
        }

        Axios.post('/api/product/uploadProduct', variables)
        .then(response => {
            if(response.data.success) {
                alert('Product Successfully Uploaded')
                props.history.push('/')
            } else {
                alert('Failed to upload Product')
            }
        })
    }
    return (
        <div style={{ maxWidth:'700px', margin: '2rem auto' }}>
            <div style={{ textAlign:'center', marginBottom:'2rem'}}>
                <h2>Upload Travel Product</h2>
            </div>
            
            <form onSubmit={onSubmit}>

                <FileUpload refreshFunction={updateImages}/>

                <div className='d-flex flex-column mt-4'>
                    <label>Title</label>
                    <input 
                        onChange={onTitleChange}
                        value ={TitleValue}
                    />
                    <br/><br/>

                    <label style={{ marginTop: '-1.5em'}}>Description</label>
                    <textarea 
                        onChange={onDescriptionChange}
                        value={DescriptionValue} 
                    />
                    <br/><br/>

                    <label style={{ marginTop: '-1.5em'}}>Price(#)</label>
                    <input 
                        onChange={onPriceChange}
                        value={PriceValue}
                        type="number" 
                    />
                    <select className='w-25' onChange={onContinentsSelectChange}>
                        {Continents.map(item => (
                            <option value={item.key} key={item.key}>
                                {item.value}
                            </option>
                        ))}                    
                    </select>
                    <br/><br/>

                    <button className='btn btn-primary' style={{ marginTop: '-1.5em'}} onClick={onSubmit}>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default UploadProduct
