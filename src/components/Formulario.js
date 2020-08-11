import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import axios from 'axios'

import ErrorComponent from '../components/Error'

import useMoneda from '../hooks/useMoneda'
import useCrypto from '../hooks/useCrypto'


const Contenedor = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const SelectContain = styled.div`
    display:flex;
    flex-direction:column;

    @media(min-width: 769px){
        flex-direction:row;
        margin:2rem 0;
    }
`

const Boton = styled.input`
    background:transparent;
    outline:none;
    border:none;
    padding:.5rem 2rem;
    border-radius:.1rem;
    border:1px solid var(--color-green);
    transition:.3s;
    color:var(--color-green);

    :hover{
        cursor:pointer;
        background:var(--color-green);
        color:var(--color-white);
        box-shadow:0 0 .1rem var(--color-green);
    }
`

const Formulario = ({ setMoneda, setCriptomoneda }) => {

    const [listCrypto, setListCrypto] = useState([])
    const [error, setError] = useState(false)

    const coins = [
        {codigo: 'USD', nombre:'Dolar estadounidense'},
        {codigo: 'MXN', nombre:'Peso mexicano'},
        {codigo: 'CNY', nombre:'Yuan chino'},
        {codigo: 'ARS', nombre:'Peso argentino'},
        {codigo: 'EUR', nombre:'Euro'},
        {codigo: 'CAD', nombre:'Dolar canadiense'},
        {codigo: 'COP', nombre:'Peso colombiano'},
        {codigo: 'GBP', nombre:'Libra esterlina'}
    ]

    const [ stateCoin, SeleccionarCoin ] = useMoneda('Elige tu moneda', '', coins);
    const [ stateCrypto, SeleccionarCrypto ] = useCrypto('Elige una criptomoneda', '', listCrypto);

    useEffect( () => {
        const consultaAPI = async ()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await axios.get(url)

            setListCrypto(respuesta.data.Data)
        }
        consultaAPI()
    },[])

    const cotizarMoneda = e => {
        e.preventDefault();

        if(stateCoin === '' || stateCrypto === '' ){
            setError(true)
            return
        }
        setError(false)
        setMoneda(stateCoin)
        setCriptomoneda(stateCrypto)
    }

    return (
        <Contenedor onSubmit={cotizarMoneda}>
            <SelectContain>
                <SeleccionarCrypto />
                <SeleccionarCoin />
            </SelectContain>
            <Boton type="submit" value="Calcular" />

            {error ? <ErrorComponent mensaje='Todos los campos son obligatorios' /> : null}
        </Contenedor>
    )
}

Formulario.propTypes = {
    setCriptomoneda: PropTypes.func.isRequired,
    setMoneda: PropTypes.func.isRequired
}

export default Formulario
