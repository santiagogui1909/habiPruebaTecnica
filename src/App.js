import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, createElement } from 'react';
import { activeBtn } from './Reducer/EstateReducer';

import './App.css';
// Components
import Home from './components/Home/Home';
import FormDataUser from './components/FormDataUser';
import FormEmail from './components/FormEmail';
import FormAdress from './components/FormAdress';
import FormFloor from './components/FormFloor';
import FormCheks from './components/FormCheks';

// images

import habiLogo from './images/habilogo.jpg';

function App() {

  const dispatch = useDispatch();
  const [count , setCount] = useState(1);
  const [activeBtnSpecific , setActiveBtnSpecific] = useState(0);
  const [components , setComponents] = useState();
  const [titleStep , setTitleStep] = useState();
  const [forms , setForm] = useState(false);

  let componentsArray = [{
    id: 1,
    path: 'Datos - Cliente',
    component: FormDataUser,
  },{
    id: 2,
    path: 'Email - Cliente',
    component: FormEmail,
  },{
    id: 3,
    path: 'Direccion inmueble- Cliente',
    component: FormAdress,
  },{
    id: 4,
    path: 'Numero de piso - Cliente',
    component: FormFloor,
  },{
    id: 5,
    path: 'Zonas - Cliente',
    component: FormCheks,
  }]

  const state = useSelector(state => state.stateBtns);
  // const dataUser = useSelector(state => state.formReducer);
  // console.log(dataUser)

  useEffect(() => {
    nextComponent();
  },[]);

  useEffect(() => {
    dispatch(activeBtn(true));
  },[count]);

  const nextComponent = () => {
    setCount(count+1);

    if (count === 5) {
      dispatch(activeBtn(true));
      setActiveBtnSpecific(5);
      setCount(4);
    }
    showComponet();
  }

  const backComponent = () => {
    setCount(count-1);
    
    if (count === 1) {
      dispatch(activeBtn(true));
      setActiveBtnSpecific(1);
      setCount(2);
    }
    showComponet();
  }

  const showComponet = () => {
    let componentReturn = componentsArray.filter((value) => value.id == count);
    setComponents(React.createElement(componentReturn[0].component));
    setTitleStep(componentReturn[0].path);
  }

  return (
    <div className="App">

      <header>
        <figure>
          <img className='logo' src={habiLogo} alt='logoHabi' ></img>
        </figure>
        <h1>cuentanos de tu hogar</h1>
      </header> 

      {forms ?  
      <section className='containerForm'>

        <article className='forms'>
          <section className='steps'>
            <span>paso {count-1}</span>
            <span>siguiente paso {count}</span>
          </section>
          <h2>{titleStep}</h2>
          <hr className='hrLine' />

          <div className="inputContainer">
            {components}
          </div>

          <div className='boxBtnsForms'>
            <button onClick={() => backComponent()} disabled={activeBtnSpecific != 2 ? state : ''}>anterior</button>
            <button onClick={() => nextComponent()} disabled={activeBtnSpecific != 1 ? state : ''}>siguiente</button>
          </div>

        </article>

        <section>
          <p>otro panel</p>
        </section>
      </section>
      :
      <Home setForm={setForm} />
      }

      <footer>
        <p>Copyright 2023 / prueba react - Santiago Guillen Ramirez</p>
      </footer>
    </div>
  );
}

export default App;
