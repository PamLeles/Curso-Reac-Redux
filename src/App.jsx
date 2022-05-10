//utilizando arrow function
import './App.css'
import React from 'react'

import DiretaPai from './componets/comunicacao/DiretaPai';
import Usuarioinfo from './componets/condicional/Usuarioinfo';
import ParOuImpar from './componets/condicional/ParOuImpar';
import { TabelaProdutos } from './componets/Repetição/TabelaProdutos';
import { ListaAlunos } from './componets/Repetição/ListaAlunos';
import { Familia } from './componets/Basicos/Familia';
import FamiliaMembro from './componets/Basicos/FamiliaMembro';
import Card from './componets/Layout/Card';
import Aleatorio from './componets/Basicos/Aleatorio';
import Primeiro from './componets/Basicos/Primeiro';
import ComParamentro from './componets/Basicos/ComParametro';
import Fragmento from './componets/Basicos/Fragmento';

export default function App () {
    return (
        <div className="App">
            <h1>Fudamentos React (Arrow)</h1>

            <div className="Cards">
                <Card titulo="#9 - Comunicação Direta" color="#B450E5">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#8 - renderização Condional" color="#505FE5">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <Usuarioinfo usuario={{ nome: 'Fernando' }} />
                    {/*<Usuarioinfo usuario={{email: 'fer@.com'}}/>
                    <Usuarioinfo usuario={{}}/> */}
                </Card>
                <Card titulo="#DesafioRepetição" color="#E9751B">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#6 - Repetição" color="#EE63C4">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#5 - Componente com filhos" color="#00C8f8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>
                <Card titulo="#DesafioAleatório" color="#45B39D">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="#3 - Fragmento" color="#BB8FCE">
                    <Fragmento />
                </Card>
                <Card titulo="#2 - Componente com propriedades" color="#F1948A">
                    <ComParamentro
                        //propriedades 
                        titulo="Situação do Aluno"
                        aluno="Pedro" nota={6.5} />
                </Card>
                <Card titulo=" #1 - Componente " color="#FA6900">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
};