import { useDispatch } from 'react-redux';
import { useState } from 'react';

// reducers
import { insertInfoUser } from '../Reducer/FormReducer';
import { activeBtn } from '../Reducer/EstateReducer';

import './style.css';

const FormDataUser = () => {
    
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    // get user's info for send using the dispatch of redux
    const getDataUser = (e) => {
        setName(e.target.value);

        if (name !== '') {
            dispatch(insertInfoUser(name));
            dispatch(activeBtn(false));
        } else {
            dispatch(activeBtn(true));
        }
    }

    return (
        <>
            <input className='inputsForms' type="text" onKeyUp={(e)=> getDataUser(e)} />
            <label className="label">Nombres y apellidos</label>
        </>
    );
};

export default FormDataUser;