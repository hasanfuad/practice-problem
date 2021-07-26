import React from 'react';

const Salary = (props) => {
    const salary = props.addSalary;
    console.log(salary);
    const totalSalary = salary.reduce((accumulate, currentSalary)=> accumulate + currentSalary.salary,0);
    const govtTax = totalSalary * 0.1;
    const transportationCharge = totalSalary * 0.02;
    const foodAndMedical = totalSalary * 0.05;

    const grandTotal = totalSalary+ govtTax+ transportationCharge+ foodAndMedical;

    const precision = ((amount)=>{
        const precised = Number(amount).toFixed(2)
        return precised;
    })
    return (
        <div>
            <h2>Annual Salary and Tax Summary</h2>
            <h4>Total Added: {salary.length} Person</h4>
            <h5>Basic Salary: ${precision(totalSalary)}</h5>
            <p>Food and Medical Cost: ${precision(foodAndMedical)}</p>
            <p>Transportation Cost: ${precision(transportationCharge)}</p>
            <p>Govt Tax: ${precision(govtTax)}</p>
            <h4>Complete Cost: ${precision(grandTotal)}</h4>
        </div>
    );
};

export default Salary;