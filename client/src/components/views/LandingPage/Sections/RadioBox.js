import React, { useState } from 'react';
import { Checkbox, Collapse, Radio } from 'antd';

const {Panel} = Collapse;  

function RadioBox(props) {

    const [Value, setValue] = useState('0')

    
    const renderRadioBox = () => (
        props.list.map((value) => (
            <div className='my-1'>
                <Radio key={value._id} value={`${value._id}`}>
                    {value.name}
                </Radio>
            </div>
        ))
    )

    const handleChange = (e) => {
        setValue(e.target.value)
        props.handleFilters(e.target.value)
    }

    return (
        <div>
            <Collapse defaultActiveKey={['1']}>
                <Panel header="price" key='1'>
                    <Radio.Group onChange={handleChange} value={Value}>
                        {renderRadioBox()}
                    </Radio.Group>
                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox
