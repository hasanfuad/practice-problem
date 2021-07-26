import React from 'react';

const Salary = (props) => {
    const salary = props.addSalary;
    console.log(salary);
    const totalSalary = salary.reduce((accumulate, currentSalary)=> accumulate + currentSalary.salary,0);
    const govtTax = totalSalary * 0.1;
    const transportationCharge = totalSalary * 0.08;
    const foodAndMedical = totalSalary * 0.15;

    const grandTotal = totalSalary+ govtTax+ transportationCharge+ foodAndMedical;

    const precision = ((amount)=>{
        const precised = Number(amount).toFixed(2)
        return precised;
    })
    return (
        <div>
            <h2>Annual Salary and Tax Summary</h2>
            <h4>Total Added: {salary.length} Person</h4>
            <p>Food and Medical Cost: {precision(foodAndMedical)}</p>
            <p>Transportation Cost: {precision(transportationCharge)}</p>
            <p>Govt Tax: {precision(govtTax)}</p>
            <h5>${precision(totalSalary)}</h5>
            <h4>Complete Cost: {precision(grandTotal)}</h4>
        </div>
    );
};

export default Salary;