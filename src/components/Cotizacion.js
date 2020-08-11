import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const CotizacionContainer = styled.div`
margin:3rem auto;

    p{
        text-align:center;
        margin:1rem 0;
    }
`

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    return (
        <CotizacionContainer>
            <p>Precio actual: {resultado.PRICE}</p>
            <p>Precio mas alto del dia: {resultado.HIGHDAY}</p>
            <p>Precio mas bajo del dia: {resultado.LOWDAY}</p>
            <p>Variación para las ultimas 24 horas: {resultado.CHANGEPCT24HOUR}</p>
            <p>Ultima actualización: {resultado.LASTUPDATE}</p>
        </CotizacionContainer>
    )
}

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired,
}

export default Cotizacion
