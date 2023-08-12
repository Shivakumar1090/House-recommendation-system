import React, { useContext, useState } from 'react'
import { DimensionContext } from '../../store/DimensionContext';
import './style.css';

const PopUp = () => {
    const { updateVal, updateStatus } = useContext(DimensionContext);
    const [ele, setEle] = useState();
    return (
        <div className='pop-up'>
            <div className='box'>
                <div className='title'>Customize the Plot with below options</div>
                <div className='inp'>
                    <div><input type="radio" value="1" onChange={(e) => setEle(parseInt(e.target.value))} /> House</div>
                    <div><input type="radio" value="2" onChange={(e) => setEle(parseInt(e.target.value))} /> Restaurant</div>
                    <div><input type="radio" value="3" onChange={(e) => setEle(parseInt(e.target.value))} /> Gym</div>
                    <div><input type="radio" value="4" onChange={(e) => setEle(parseInt(e.target.value))} /> Hospital</div>
                </div>
                <div className='btns'>
                    <button className='btn2' onClick={() => { updateStatus(); }} >Close</button>
                    <button className='btn1' onClick={() => { updateVal(ele); }} >Set</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp;