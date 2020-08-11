import React, { useState } from 'react'
import styled from '@emotion/styled';

const SelectContain = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    @media(min-width: 769px){
        margin:0 5rem;
        }
`

const SelectCoin = styled.select`
    outline:none;
    border:none;
    background-color: var(--color-blac);
    width:15rem;
    padding:1rem;
    margin:2rem 0;
    appearance: none;
    border-radius:.1rem;
    box-shadow:3px -3px 3px black, -3px 3px 3px rgba(255,255,255,.1);
`

const useCrypto = (label, initialState, opciones) => {

    const [ state , setState ] = useState('');

    const Seleccionar = () => (
        <SelectContain>
            <label> {label} </label>
            <SelectCoin onChange={ e => setState(e.target.value)} value={state}>
                <option value="">Seleccionar Cryptomoneda</option>
                {
                    opciones.map(opcion => (
                        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}> {opcion.CoinInfo.FullName} </option>
                    ))
                }
            </SelectCoin>
        </SelectContain>
    )

    return [ state, Seleccionar, setState ]
}

export default useCrypto
