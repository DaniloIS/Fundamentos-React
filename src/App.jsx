import React from 'react';

import Card from './components/layout/Card';
import FirstComponent from './components/basics/FirstComponent';
import WithParams from './components/basics/WithParams';
import Fragment from './components/basics/Fragment';
import Random from './components/basics/Random';
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import ListStudents from './components/repetition/ListStudents';
import TableProducts from './components/repetition/TableProducts';
import PairOrOdd from './components/conditional/PairOrOdd';
import UserInfo from './components/conditional/UserInfo';
import DirectFather from './components/comunication/DirectFather';
import IndirectFather from './components/comunication/IndirectFather';
import Input from './components/form/Input';
import Counter from './components/counter/Counter';
import Mega from './components/mega/Mega';

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

                <Card title="#7 - Desafio Repetição" color="#889">

                    <TableProducts  />

                </Card>

                <Card title="#8 - Renderização Condicional" color="#982">

                    <PairOrOdd value={20} />
                    <UserInfo user={{ name: 'Danilo' }} />

                </Card>

                <Card title="#9 - Comunicação Direta" color="#59323C">

                    <DirectFather />

                </Card>

                <Card title="#10 - Comunicação Indireta" color="#8BAD39">

                    <IndirectFather />

                </Card>

                <Card title="#11 - Componente Controlado (Input)" color="#E45">

                    <Input />

                </Card>

                <Card title="#12 - Contador" color="#424242">

                    <Counter startNumber={10} />

                </Card>

                <Card title="#13 - Mega" color="#424242">

                    <Mega num={10} />

                </Card>

            </div>
            
        </div>
    );

}