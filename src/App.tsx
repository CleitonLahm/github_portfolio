import { ThemeProvider } from 'styled-components';

import Sidebar from './containers/Sidebar';
import Projetos from './containers/Projetos';
import Sobre from './containers/Sobre';
import EstiloGlobal, { Container } from './styles';
import temaLight from './themes/light';
import temaDark from './themes/dark';
import { useState } from 'react';

function App() {

  const [estaUsandoTemaDark, setestaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setestaUsandoTemaDark(!estaUsandoTemaDark)
  }


  return(
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
    <EstiloGlobal></EstiloGlobal>
    <Container>
    <Sidebar trocaTema={trocaTema}></Sidebar>
    <main>
      <Sobre></Sobre>
      <Projetos></Projetos>
    </main>
    </Container>
    </ThemeProvider>
  )
}

export default App;

