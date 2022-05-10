//desafio repetição

import React from "react";
import './TabelaProdutos.css'
import produtos from '../dados/Produtos';

export const TabelaProdutos = () => {
    return (
        <table className="TabelaProdutos">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preços</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((produto) => {
                    return (
                        <tr key={produto.id}>
                            <td> {produto.id} </td>
                            <td> {produto.NomeProduto} </td>
                            <td> R$ {produto.preco .toFixed(2) .replace('.' ,',')} </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}