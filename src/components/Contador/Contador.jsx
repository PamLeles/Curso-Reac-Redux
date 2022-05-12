//aula do contador #1 
import "./Contador.css"
import React, { Component } from "react";

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    //função para incrementar o valor

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };
    
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    setPasso = (e) =>{
        this.setState({
            passo: +e.target.value,

        })
    };

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
                <div>
                    <label htmlFor="passoInput"> Passo: </label>
                    <input id="passoInput"
                        type="number"
                        value={this.state.passo} onChange={this.setPasso} />
                </div>
                
            </div>
        )
    }

}

export default Contador;
