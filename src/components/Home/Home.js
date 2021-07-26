import React from 'react';
import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faPlus } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
    const {name,address,email,phone,image} = props.display;
    const handleBtn = props.handleBtn
    return (
        <div className="home-container">
            <div className="home-img-container">
                <img style={{width:"200px", height:"180px"}} src={image} alt={image}/>
            </div>
            <div className="home-info">
                <h3>{name}</h3>
                <p>Address:{address}</p>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
                <button onClick={()=>handleBtn(props.display)}><FontAwesomeIcon style={{fontSize: "20px"}} icon={fas, faPlus} /> </button>
            </div>
        </div>
    );
};

export default Home;