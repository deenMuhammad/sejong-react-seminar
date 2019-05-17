import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

//importing components
import Header from '../components/header'
import Main from '../components/main'
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
`


function App() {
  return (
    <LandingWrapper>
      <Header />
      <Menu />
      <Main>
        <Link to='/singlepost/123' className='item'>
          <div className='featuring'>
            <img src={"http://kosmonita.com/wp-content/uploads/2018/05/placeholder4.png"} alt='featuring_img'/>
            Name of the blog
          </div>
          <div className='short_desc'>short description of the blog. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div className='date'>2019-05-15</div>
        </Link>
        <Link to='/singlepost/123' className='item'>
          <div className='featuring'>
            <img src={"http://kosmonita.com/wp-content/uploads/2018/05/placeholder4.png"} alt='featuring_img'/>
            Name of the blog
          </div>
          <div className='short_desc'>short description of the blog. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div className='date'>2019-05-15</div>
        </Link>
        <Link to='/singlepost/123' className='item'>
          <div className='featuring'>
            <img src={"http://kosmonita.com/wp-content/uploads/2018/05/placeholder4.png"} alt='featuring_img'/>
            Name of the blog
          </div>
          <div className='short_desc'>short description of the blog. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div className='date'>2019-05-15</div>
        </Link>
        <Link to='/singlepost/123' className='item'>
          <div className='featuring'>
            <img src={"http://kosmonita.com/wp-content/uploads/2018/05/placeholder4.png"} alt='featuring_img'/>
            Name of the blog
          </div>
          <div className='short_desc'>short description of the blog. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div className='date'>2019-05-15</div>
        </Link>
      </Main>
      <Footer />
    </LandingWrapper>
  );
}

export default App;
