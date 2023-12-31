import React from 'react'
import Header from './Header';
import Mint from './Mint';
import Background from './Background';
import '../css/flexboxes.css'
import '../css/texts.css'
import '../css/buttons.css'
import Roadmap from './Roadmap';
import Team from './Team';

export default function Main() {
  return (
    <>
      <Header></Header>
      <Background>
        <main>
          <Mint></Mint>
          <Roadmap></Roadmap>
          <Team>  </Team>
        </main>
        <footer>
          <p>© 2023 Canary Punks</p>
        </footer>
      </Background>
    </>
  )
}
