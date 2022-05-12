//utilizando arrow function
import './App.css'
import React from 'react'

import  Input  from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import Usuarioinfo from './components/condicional/Usuarioinfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import { TabelaProdutos } from './components/Repetição/TabelaProdutos';
import { ListaAlunos } from './components/Repetição/ListaAlunos';
import { Familia } from './components/Basicos/Familia';
import FamiliaMembro from './components/Basicos/FamiliaMembro';
import Card from './components/Layout/Card';
import Aleatorio from './components/Basicos/Aleatorio';
import Primeiro from './components/Basicos/Primeiro';
import ComParamentro from './components/Basicos/ComParametro';
import Fragmento from './components/Basicos/Fragmento';

export default function App() {
    return (

        <div className="App">
            <h1>Fudamentos React (Arrow)</h1>

            <div className="Cards">
                <Card titulo="#11 - Componente Controlado" color="#61D63A">
                    <Input></Input>
                </Card>
                <div className="Cards">
                    <Card titulo="#10 - Comunicação Indireta" color="#199A30">
                        <IndiretaPai></IndiretaPai>
                    </Card>
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
            </div>
        </div>

    )
}