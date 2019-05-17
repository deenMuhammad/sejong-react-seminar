import React, { Component } from 'react'
import styled from 'styled-components'

//importing components
import Header from '../components/header'
import Menu from '../components/menu'
import Fullpost from './../components/fullpost'
import Footer from '../components/footer'

const SinglePostWrapper = styled.div`
    font-family: 'Dosis', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    color: rgb(100,100,100);
    position: relative;
    background-color: white;
`

export default class SinglePost extends Component {
  render() {
    return (
      <SinglePostWrapper>
        <Header/>
        <Fullpost _id = {this.props.match.params.id}/>
        <Menu/>
        <Footer/>
      </SinglePostWrapper>
    )
  }
}
