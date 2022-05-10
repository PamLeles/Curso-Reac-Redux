//aula de repetições 

import React from "react";
import alunos from '../data/alunos'

export const ListaAlunos = (props) => {
    return (
        <div>
            {alunos.map((aluno) => {
                return (
                    <ul key={aluno.id} style={{ listStyle: "none" }}>
                        {aluno.id} {aluno.nome} -&gt; {aluno.nota}
                    </ul>
                )
            })}

        </div>
    )

}