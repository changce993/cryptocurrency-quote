import React from 'react'
import styled from '@emotion/styled'

const Spinner = styled.div`
    width:1rem;
    height:1rem;
    margin:2rem auto;
    background-color: var(--color-green);
    animation:on 1.5s ease-in-out infinite;

    @keyframes on {
        25%{
            transform:scale(.5) rotate(-90deg);
        }
        50% {
            border-radius:50%;
            transform:scale(2) rotate(180deg);
            opacity:.5;
            box-shadow:0 0 5px var(--color-green);
        }
        75%{
            transform:scale(.5) rotate(-90deg);
        }
    }
`

const SpinnerMotion = () => {
    return (
            <Spinner />
    )
}

export default SpinnerMotion
