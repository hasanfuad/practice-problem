import React, { useState } from 'react';
import Home from '../Home/Home';
import './Display.css'

import userData from '../../fakeData/fakeData.json'
import Salary from '../Salary/Salary';

const Display = () => {
    const usedData = userData;
    console.log(usedData);
    const [salary, setSalary] = useState([]);

    const handleBtn = ((newSalary)=>{
        const addSalary = [...salary, newSalary];
        setSalary(addSalary)
    })
    return (
        <div className="display-container">
            <div className="display">
            {
                usedData.map(data => <Home handleBtn={handleBtn} display={data}/>)
            }
            </div>
            <div>
                <Salary addSalary={salary}/>
            </div>
        </div>
    );
};

export default Display;