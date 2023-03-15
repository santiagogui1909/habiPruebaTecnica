import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { activeBtn } from '../../Reducer/EstateReducer';
import { Link } from 'react-router-dom';

// Components
import FormDataUser from '../FormDataUser';
import FormEmail from '../FormEmail';
import FormAdress from '../FormAdress';
import FormFloor from '../FormFloor';
import FormCheks from '../FormCheks';

const Forms = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.stateBtns);
    const dataUser = useSelector(state => state.formReducer);

    // states
    const [count , setCount] = useState(1);
    const [activeBtnSpecific , setActiveBtnSpecific] = useState(0);
    const [saveInfo , setSaveInfo] = useState(false);
    const [ isResponsive, setIsResponsive] = useState(false);
    const [components , setComponents] = useState();
    const [titleStep , setTitleStep] = useState();
    const [showSteps, setShowSteps] = useState();
  
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
  
    useEffect(() => {
      nextComponent();
    },[]);
  
    useEffect(() => {
      dispatch(activeBtn(true));
    },[count]);
  

    // next step whit use of states
    const nextComponent = () => {
      setCount(count+1);
  
      if (count === 6) {
        setSaveInfo(true);
        setTitleStep('Enviar Formulario')
        setComponents('Ha terminado de llenar con exito el formulario, da click en enviar y pronto habi se contactara contigo');
      }
      showComponet();
    }
  
    // get elements and create a new component
    const showComponet = () => {
      let componentReturn = componentsArray.filter((value) => value.id === count);
      setComponents(React.createElement(componentReturn[0].component));
      setTitleStep(componentReturn[0].path);
    }

    const showResponses = (activeValue) => (activeValue === showSteps) ? setShowSteps(0) : setShowSteps(activeValue);

    return (
        <div>
            <section className='containerForm'>
              <article className='forms'>
                <section className='steps'>
                    <span>paso {count-1}</span>
                    <span>{count === 7 ? 'enviar formulario' : `paso ${count}`}</span>
                </section>

                <h2>{titleStep}</h2>
                <hr className='hrLine' />

                <div className="inputContainer">
                    {components}
                </div>

                {saveInfo ?
                    <div className='boxBtnsForms'>
                        <Link to="/resumen"><button>enviar</button></Link>
                    </div>
                :
                    <div className='boxBtnsForms'>
                      <button onClick={() => nextComponent()} disabled={activeBtnSpecific !== 1 ? state : ''}>siguiente</button>
                    </div>
                }
              </article>

              <section className='columnPanel'>
                  <div className={isResponsive ? 'showModal' : 'mobil'}>
                    <section className="sectionSteps" onClick={ () =>showResponses(1)}>
                      <h3>Datos - Cliente<span className={`icon-down-open ${showSteps === 1 ? 'openSumary1' : 'openSumary2'}`}></span></h3>
                      <p className={`stepsPanel  ${showSteps === 1 ? 'stepsPanel' : 'NoShow'}`}>{dataUser.name}</p>
                    </section>

                    <section className="sectionSteps" onClick={ () =>showResponses(2)}>
                      <h3>Email - Cliente<span className={`icon-down-open ${showSteps === 2 ? 'openSumary1' : 'openSumary2'}`}></span></h3>
                      <p className={`stepsPanel  ${showSteps === 2 ? 'stepsPanel' : 'NoShow'}`}>{dataUser.email}</p>
                    </section>

                    <section className="sectionSteps" onClick={ () =>showResponses(3)}>
                      <h3>Direccion inmueble- Cliente<span className={`icon-down-open ${showSteps === 3 ? 'openSumary1' : 'openSumary2'}`}></span></h3>
                      <p className={`stepsPanel  ${showSteps === 3 ? 'stepsPanel' : 'NoShow'}`}>{dataUser.adress}</p>
                    </section>

                    <section className="sectionSteps" onClick={ () =>showResponses(4)}>
                      <h3>Numero de piso - Cliente<span className={`icon-down-open ${showSteps === 4 ? 'openSumary1' : 'openSumary2'}`}></span></h3>
                      <p className={`stepsPanel  ${showSteps === 4 ? 'stepsPanel' : 'NoShow'}`}>{dataUser.numberFloor}</p>
                    </section>

                    <section className="sectionSteps" onClick={ () =>showResponses(5)}>
                      <h3>Zonas - Cliente<span className={`icon-down-open ${showSteps === 5 ? 'openSumary1' : 'openSumary2'}`}></span></h3>
                      <p className={`stepsPanel  ${showSteps === 5 ? 'stepsPanel' : 'NoShow'}`}>{dataUser.arraySpace}</p>
                    </section>
                  </div>

                  <button className='btnModal' onClick={() => setIsResponsive(!isResponsive)}>{
                    !isResponsive ? 'ver resumen' : 'cerrar resumen'
                  }</button>
                  <Link to="/"><button className='btnCloseProcess'>Cancelar Proceso</button></Link>
              </section>
            </section>
        </div>
    );
};

export default Forms;