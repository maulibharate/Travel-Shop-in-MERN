import React from 'react'
const port = process.env.PORT || 5000

function UserCardBlock(props) {

    // const renderItems = () => {
    //     props.products && Object.keys(props.products).map(product => (
    //         <tr key={props.products[product]._id}>
    //             <th>
    //                 <img style={{ width: '75px' }} alt="product" src={`http://localhost:5000/${props.products[product].images[0]}`} />
    //             </th>
    //             <td>{ props.products[product].quantity }</td>
    //             <td>{ `$${props.products[product].price}`}</td>
    //             <td><button 
    //                     onClick={() => props.removeItem(props.products[product]._id)}
    //                 >
    //                     Remove
    //                 </button>
    //             </td>
    //         </tr>
    //     ))
    // }

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Quantity</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Remove from Cart</th>
                    </tr>
                </thead>
                <tbody className='align-middle'>
                    { 

                        props.products && Object.keys(props.products).map(product => (
                            <tr key={props.products[product]._id}>
                                <th>
                                    <img style={{ width: '75px' }} alt="product" src={`http://localhost:${port}/${props.products[product].images[0]}`} />
                                </th>
                                <td>{ props.products[product].quantity } EA</td>
                                <td>{ `$${props.products[product].price}`}</td>
                                <td><button 
                                        onClick={() => props.removeItem(props.products[product]._id)}
                                        className='btn btn-outline-dark'
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
