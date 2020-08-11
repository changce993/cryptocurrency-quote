import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ErrorComponent = styled.div`
    margin:3rem 0;
    padding:1rem;
    border-bottom:1px solid var(--color-green);
`

const Error = ({ mensaje }) => {
    return (
        <ErrorComponent>
            {mensaje}
        </ErrorComponent>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired,
}

export default Error
