import React, { useContext } from 'react'
import { DimensionContext } from '../../store/DimensionContext';
import Resturant from '../../Assets/rest.jpg';
import gym from '../../Assets/gym.jpg';
import Hospital from '../../Assets/Hosp.jpg';
import House from '../../Assets/House.jpg';
import './style.css'

const Instructions = () => {
    const { updateInst } = useContext(DimensionContext);
    return (
        <div className='instruction'>
            <div className='box'>
                <div className='title'>Read the instructions to customize the layout.</div>
                <div>
                    The layout may consists of house,restaurant,gym and hospital.
                </div>
                <div className='plot' >
                    <div>
                        <img src={House}  style={img}></img>
                         <div> represents house.</div>
                    </div>
                    <div>
                        <img src={Resturant}  style={img}></img>
                         represents restaurant.
                    </div>
                    <div>
                        <img src={gym}  style={img}></img> represents gym.
                    </div>
                    <div>
                        <img src={Hospital}  style={img}></img> represents hospital.
                    </div>
                </div>
                <div className='ins'>
                    <div><strong>Follow the below instructions to add plots:</strong></div>

                    <div>1.Click on the plot a pop up with these four options will be visible</div>
                    <div>2.Select any one of the option and it will be updated in the layout</div>
                    <div>3.Click on Set button to set the plot or Click on close to close the popup</div>
                </div>



                <button className='btni' onClick={() => { updateInst(); }} >Close</button>

            </div>
        </div>
    )
}

const img = {
    width: '30px',
    height: '30px',
    margin: '2px',
    objectFit: 'cover',
}

export default Instructions