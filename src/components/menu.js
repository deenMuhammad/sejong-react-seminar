import React, { Component } from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
    position: fixed;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    bottom: 20px;
    right: 20px;
    width: 40px;
    border-radius: 20px;
    background-color: white;
    border: 1px solid rgb(230,230,230);
    -webkit-box-shadow: 2px 3px 22px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 3px 22px -3px rgba(0,0,0,0.75);
    box-shadow: 2px 3px 22px -3px rgba(0,0,0,0.75);
    z-index: 2;
    transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    .menu_button{
        width: 100%;
        border-radius: 20px;
        height: 50px;
        display: flex; 
        align-items: center;
        justify-content: center;
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        :active{
            transform: rotate(90deg);
        }
        img{
            cursor: pointer;
            width: 70%;
        }
    }
    .menu_item{
        margin: 5px 0;
        width: 100%;
        border-radius: 20px;
        display: ${props=>props.menu_open?'flex':'none'}; 
        align-items: center;
        justify-content: center;
        img{
            cursor: pointer;
            width: 70%;
        }
    }
`

export default class Menu extends Component {
    constructor(){
        super();
        this.state={
            menu_open: false
        }
    }
    toggle_menu = () =>{
        this.setState({menu_open: !this.state.menu_open})
    }
  render() {
    return (
      <MenuWrapper menu_open={this.state.menu_open}>
          <div className='menu_item'>
            <img alt='home' src={require('./../static/home.svg')} />
          </div>
          <div className='menu_item'>
            <img alt='add_blog' src={require('./../static/add_blog.svg')} />
          </div>
          <div className='menu_button' onClick={this.toggle_menu}>
            {this.state.menu_open?
            <img alt='menu_open' src={require('./../static/menu_close.svg')} />:
            <img alt='menu_open' src={require('./../static/menu_open.svg')} />
            }
          </div>
      </MenuWrapper>
    )
  }
}
