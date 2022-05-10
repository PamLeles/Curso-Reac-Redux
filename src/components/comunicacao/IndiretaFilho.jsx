//aula de comunicação indireta
//aula de componente com Estados
import React from "react";


const IndiretaFilho = (props) => {

    const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
    const gerarNerd = () => Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button onClick={() => {
                props.quandoClicar('João', gerarIdade(), gerarNerd())
            }}>
                Fornecer mais informações
            </button >
        </div >
    )
}

export default IndiretaFilho;