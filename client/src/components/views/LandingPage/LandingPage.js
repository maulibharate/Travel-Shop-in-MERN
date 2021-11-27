import React, { useState, useEffect } from 'react';
import Axios  from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import { Carousel } from 'antd';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import { price, continents } from './Sections/Data';
import SearchFeature from './Sections/SearchFeature';
import './Sections/LandingPage.css';
const port = process.env.PORT || 5000
const { Meta } = Card;

function LandingPage() {
    const [Products, setProducts] = useState([]);
    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(8);
    const [PostSize, setPostSize] = useState(0);
    const [SearchTerms, setSearchTerms] = useState("");
    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })

     useEffect(() => {
         const variables = {
             skip: Skip,
             limit: Limit
         }
        getProducts(variables)
     }, [])

     const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
        .then(response => {
            if(response.data.success) {
                if(variables.loadMore) {
                    setProducts([...Products, response.data.products])
                } else {
                    setProducts(response.data.products)
                }
               
               setPostSize(response.data.PostSize)
            } else {
                console.log('Failed to fectch product datas');
            }
        })
     }
     const onLoadMore = () => {
         let skip = Skip + Limit;

         const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true
         }
         getProducts(variables)
         setSkip(skip)
     }
     
    //  const renderCards = Object.keys(Products).map(info =>  {
    //      return (
    //             <div className="col-md-3">
    //                 <div>
    //                     <div >
    //                         <img src={`https://travel-shop-in-mern.herokuapp.com/${Products[info].images}`}  alt="productImage" style={{ width: '100%', maxHeight: '150px'}}/>
    //                     </div>
    //                     <Meta 
    //                     title={Products[info].title}
    //                     description={`$${Products[info].price}`}
    //                     />  
    //                 </div>
    //             </div>
    //         )
    //      })

     const renderCards = Object.keys(Products).map(info =>  {
         return ( <Col lg={12} md={12} xs={24} className="p-1">
             <Card
                hoverable={true}
                cover={
                    <a href={`product/${Products[info]._id}`}>
                        <Carousel autoplay>
                            {Object.keys(Products[info].images).map((item) => (
                                <div>
                                    <img src={`https://travel-shop-in-mern.herokuapp.com/${Products[info].images[item]}`}  alt="productImage" style={{ width: '100%', maxHeight: '250px'}}/>
                                </div>
                            ))}
                        </Carousel> 
                    </a>
                }
             >
                 <Meta 
                    title={Products[info].title}
                    description={`$${Products[info].price}`}
                /> 
             </Card>
         </Col>
            
            )
         })
         
    //  const renderCards = Products && Products.map((product) => {
    //     return (
    //         <div className="row">
    //             {product && product.map((item) => (
    //                 <div className="col-md-3">
    //                     <div >
    //                         <img src={`https://travel-shop-in-mern.herokuapp.com/${item.images}`}  alt="productImage" style={{ width: '100%', maxHeight: '150px'}}/>
    //                     </div>
                    
                    
    //                     <Meta 
    //                     title={item.title}
    //                     description={`$${item.price}`}
    //                     />  
    //                 </div>
    //             ))}
    //         </div>
    //     )
    //     // <Col lg={6} md={8} xs={24}>
    //         {/* <Card
    //             hoverable={true}
    //             // cover={<ImageSlider images={product.images}/> 
    //             // }
    //         > */}
                 
                
    //         {/* </Card> */}
        
    //     // </Col>
    //  })

     const showFilteredResults = (filters) => {
        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters
         }

         getProducts(variables)
         setSkip(0)
     }

     const handlePrice = (value) => {
         const data = price;
         let array = [];

         for(let key in data) {
             if(data[key]._id === parseInt(value, 10)) {
                 array = data[key].array;
             }
         }
         return array
     }

     const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if(category === 'price') {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }

        showFilteredResults(newFilters)
        setFilters(newFilters)
     }

     const updateSearchTerms = (newSearchTerm) => {
        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
         }

         setSkip(0)
         setSearchTerms(newSearchTerm)

         getProducts(variables)
     }

     return (
         <div>
            <div className='MainHeading' style={{ textAlign: 'center' }}>
                <h1> Let's Travel Anywhere <Icon type="rocket" /></h1>
            </div>
            <div className="container-fluid MainContainer">
                <div className="row">
                    <div className="col-lg-8 ps-4">
                        {Products.length === 0 ? 
                            <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                                <h2>No Post yet...</h2>
                            </div> :

                            <div>

                                <div className="row">
                                    {renderCards}
                                </div>
                            </div>
                        }
                    </div>
        
                    <div className="col-lg-4">
                        <div className="row mb-3">
                            <SearchFeature 
                            refreshFunction={updateSearchTerms}
                            />
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <CheckBox 
                                    list={continents}
                                    handleFilters={filters => handleFilters(filters, 'continents')}
                                />
                            </div>
                            <div className="col-lg-6">
                                <RadioBox 
                                    list={price}
                                    handleFilters={filters => handleFilters(filters, 'price')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* {Filter} */}
                {/* <div className="row">
                    <div className="col-lg-6">
                        <CheckBox 
                            list={continents}
                            handleFilters={filters => handleFilters(filters, 'continents')}
                        />
                    </div>
                    <div className="col-lg-6">
                        <RadioBox 
                            list={price}
                            handleFilters={filters => handleFilters(filters, 'price')}
                        />
                    </div>
                </div>             */}
                {/* {Search} */}


                {/* <div className="d-flex justify-content-end my-2">
                    <SearchFeature 
                    refreshFunction={updateSearchTerms}
                    />
                </div>

                {Products.length === 0 ? 
                    <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>No Post yet...</h2>
                    </div> :

                    <div>

                        <div className="row">
                            {renderCards}
                        </div>
                    </div>
                }
                <br /> <br /> */}

                {/* {PostSize >= Limit && 
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={onLoadMore}>Load More</button>
                    </div>
                } */}
                
            </div>
         </div>
     )
}

export default LandingPage
