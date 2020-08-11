import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import SpinnerMotion from './components/SpinnerMotion'
import axios from 'axios';

const Contenedor = styled.div`
  max-width:1366px;
  margin:auto;
`

const Heading = styled.h1`
  text-align:center;
  padding:2rem 0;
  position:relative;
  margin-bottom:3rem;
  
  span.punto{
    color:var(--color-green);
    font-size:3rem;
  }

  ::after{
    content:'';
    width:5rem;
    height:.5rem;
    background-color: var(--color-green);
    display:block;
    position:absolute;
    left:0%;
    bottom:-.5rem;
    animation:bottom 3s ease-in-out infinite;

    @media(min-width: 768px){
      left:10%;
      width:10rem;
      animation:noBottom 7s ease-in-out infinite;
    }
  }

  @keyframes noBottom{
    50%{ left:calc(90% - 10rem); }
  }

  @keyframes bottom{
    50%{ left:calc(100% - 5rem); }
  }
`

const BodyFlex = styled.div`
  .left{
    height:5rem;
  }
`

function App() {

  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptomoneda] = useState('')
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect( ()=>{
    if(moneda === '') return;

    const consultaAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

      const respuesta = await axios.get(url)

      setCargando(true)

      setTimeout(()=> {
        setCargando(false)
        setResultado(respuesta.data.DISPLAY[criptomoneda][moneda])
      }, 1500)
    }
    consultaAPI()
  }, [moneda, criptomoneda])

  const Componente = (cargando) ? <SpinnerMotion /> : <Cotizacion resultado={resultado}/>

  return ( 
    <Contenedor>
      <Heading>Cotizador de criptomonedas<span className="punto">.</span> </Heading>
      <BodyFlex>
          <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda}/>

          {Componente}
      </BodyFlex>
    </Contenedor>
  );
}

export default App;
