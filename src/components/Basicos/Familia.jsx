//aula componete com filho #1
//aula com componente com filho #2
import React, { cloneElement } from 'react';


export const Familia = (props) => {
    return (
        <div>
            {props.children.map((child, i) => {
                    return cloneElement(child,{...props, key: i });
                })
            }
        </div>
    )
};
