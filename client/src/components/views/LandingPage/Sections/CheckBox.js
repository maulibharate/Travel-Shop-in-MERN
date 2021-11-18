import React, { useState } from 'react';
import { Checkbox, Collapse } from 'antd';

const {Panel} = Collapse;

function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked]

        if(currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)

        //update this checked information into Parent Componet
    }

    const renderCheckboxLists = () => props.list.map((value, index) => (
        <React.Fragment key={index}>
            <div className='my-2'>
                <Checkbox
                    onChange={() => handleToggle(value._id)}
                    type="checkbox"
                    checked={Checked.indexOf(value._id) === -1 ? false : true }
                    className='mx-1'
                />
                <span className='mx-1'>{value.name}</span>
            </div>
        </React.Fragment>
    ))

    return (
        <div>
            <Collapse defaultActiveKey={['1']}>
                <Panel header='continents' key='1'>
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
