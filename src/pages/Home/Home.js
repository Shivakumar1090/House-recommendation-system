import React, { useContext, useState } from 'react'
import { DimensionContext } from '../../store/DimensionContext';
import { useNavigate } from 'react-router-dom';
import './style.css'
import Navbar from '../../components/Navbar/navbar';

const Home = () => {
    const { rows, cols, updateRow, updateCol, createLayout } = useContext(DimensionContext);
    const navigate = useNavigate();

    

    return (
        <div>
            <Navbar />
            <div className='home'>
                <div className='title'>
                    <h2>Choose the better house from the layout.</h2>
                </div>
                <div className='create-layout'>
                    <div>
                        <div ><strong>Enter the rows in the layout.</strong></div>
                        <input onChange={(e) => updateCol(e.target.value)} type="text" />
                        
                        <div ><strong>Enter the columns in the layout.</strong></div>
                        <input onChange={(e) => updateRow(e.target.value)} type="text" />
                        
                    </div>
                    <button onClick={() => {{ createLayout(); navigate('/layout') }}}>Create Layout</button>
                </div>
            </div>
        </div>
    )
}

export default Home;