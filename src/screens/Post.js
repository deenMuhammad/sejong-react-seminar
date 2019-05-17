import React, { Component } from 'react'
import styled from 'styled-components'

//importing components
import Header from '../components/header'
import Poster from '../components/poster'
import Footer from '../components/footer'
import Menu from '../components/menu'

const LandingWrapper = styled.div`
  font-family: 'Dosis', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: rgb(100,100,100);
  position: relative;
  background-color: white;
`

export default class PostBlog extends Component {
  render() {
    return (
      <LandingWrapper>
        <Header/>
        <Menu />
        <Poster />
        <Footer />
      </LandingWrapper>
    )
  }
}
