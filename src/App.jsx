import React from 'react';

import Card from './components/layout/Card';
import FirstComponent from './components/basics/FirstComponent';
import WithParams from './components/basics/WithParams';
import Fragment from './components/basics/Fragment';
import Random from './components/basics/Random';
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import ListStudents from './components/repetition/ListStudents';

import './App.css';

export default function App() {
    return(
        <div className="App">

            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card title="#1 - Primeiro Componente" color="#080">

                    <FirstComponent /> 

                </Card>

                <Card title="#2 - Com parametro" color="#008">

                    <WithParams name="Danilo" note={9.5} />

                </Card>

                <Card title="#3 - Fragmento" color="#800">

                    <Fragment />

                </Card>

                <Card title="#4 - Desafio Aleatório" color="#120">

                    <Random min={1} max={50} />

                </Card>

                <Card title="#5 - Componente com Filhos" color="#021">

                    <Family lastName="Santos">
                        <FamilyMember name="Danilo" />
                        <FamilyMember name="Diego" />
                        <FamilyMember name="Dinah" />
                        <FamilyMember name="José" />
                    </Family>

                </Card>

                <Card title="#6 - Repetição" color="#529">

                    <ListStudents  />

                </Card>

            </div>
            
        </div>
    );

}