import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    width: 100%;
    margin: 50px 200px 10px 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(230,230,230);
    @media screen and (max-width: 1000px) {
        margin: 20px 10px;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
    .hero{
        margin: 10px;
        height: 250px;
        border-radius: 50%;
    }
    .text{
        text-decoration: none;
        margin: 10px;
        font-size: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .reference{
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          .item{
            margin-right: 10px;
            b{
              color: black;
              margin: 0 10px;
            }
          }
        }
    }
`

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
           <img className='hero' alt='hero' src={require('../static/hero.png')}/>
           <div className='text'>
            <h2>Deen's Simple Blogging Page</h2>
            <p>follow <i>deen </i><a href="https://github.com/deenMuhammad">@github</a></p>
            <div className='reference'>
              <div className='item'>followers: <b>12K</b></div>
              <div className='item'>claps: <b>100K</b></div>
              <div className='item'>blogs: <b>10K</b></div>
            </div>
           </div>
      </HeaderWrapper>
    )
  }
}
