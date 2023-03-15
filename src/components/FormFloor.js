import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// reducers
import { insetNumberFloor } from '../Reducer/FormReducer';
import { activeBtn } from '../Reducer/EstateReducer';

import './style.css';

const FormFloor = () => {

    const dispatch = useDispatch();
    function numbersFloors() {
        let numbersFloors = '';

        for(let i = 1; i <= 50; i++) {
            numbersFloors += `<option value=${i}>Piso ${i}</option>`;
            document.getElementById('numbersFloors').innerHTML = numbersFloors;
        }
    }

    useEffect(() => {
        numbersFloors();
    });

    const selectFloor = (e) => {
        dispatch(insetNumberFloor(e.target.value));
        dispatch(activeBtn(false));
    }

    return (
        <>
            <select id='numbersFloors' className='selectNumbers' onChange={(e) => selectFloor(e)}></select>
        </>
    );
};

export default FormFloor;