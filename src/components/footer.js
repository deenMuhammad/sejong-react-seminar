import React, { Component } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    width: 100%;
    margin: 20px 0 0 0;
    padding: 20px;
    border-top: 1px solid rgb(230,230,230);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    .social{
        display: flex;
        align-items: center;
        justify-content: center; 
        img{
            width: 20px;
            margin: 0 5px;
        }
    }
`

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
          Deen's Blog Page
          <p>Follow him: </p>
          <div className='social'>
            <a href="https://www.facebook.com/dinmuhammad.rahimov.7" target="_blank" rel="noopener noreferrer"><img alt='facebook' src={require('./../static/logos/facebook.svg')}/></a>
            <a href="https://www.instagram.com/deen.mukhammad/" target="_blank" rel="noopener noreferrer"><img alt='instagram' src={require('./../static/logos/instagram.svg')}/></a>
            <a href="https://www.linkedin.com/in/deenmuhkhammad/" target="_blank" rel="noopener noreferrer"><img alt='linkedin' src={require('./../static/logos/linkedin.svg')}/></a>
            <a href="https://github.com/deenMuhammad" target="_blank" rel="noopener noreferrer"><img alt='github' src={require('./../static/logos/github.svg')} style={{margin: '0'}}/></a>
            <a href="https://gitlab.com/deenMuhammad" target="_blank" rel="noopener noreferrer"><img alt='gitlab' src={require('./../static/logos/gitlab.svg')} style={{width: '35px', margin: 0}}/></a>
          </div>
          <p>2019</p>
      </FooterWrapper>
    )
  }
}
