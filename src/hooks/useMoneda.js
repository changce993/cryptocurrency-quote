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
    background-color: var(--color-black);
    box-shadow:3px -3px 3px black, -3px 3px 3px rgba(255,255,255,.1);
    width:15rem;
    padding:1rem;
    margin:2rem 0;
    appearance: none;
    border-radius:.1rem;
`

const useMoneda = (label, initialState, coins) => {

    const [ state , setState ] = useState('');

    const Seleccionar = () => (
        <SelectContain>
            <label> {label} </label>
            <SelectCoin onChange={ e => setState(e.target.value)} value={state}>
                <option value="">Selecciona moneda</option>
                {
                    coins.map(coin => (
                        <option key={coin.codigo} value={coin.codigo}> {coin.nombre} </option>
                    ))
                }
            </SelectCoin>
        </SelectContain>
    )

    return [ state, Seleccionar, setState ]
}

export default useMoneda
