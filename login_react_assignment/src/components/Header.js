import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Header = (props) => (<div>
  <Background>
   <Title>Photon-Estore</Title>
    <SubTitle>Photon is the largest and fastest growing provider of omni-channel and digital experiences serving over 34% of the Fortune 100's as their digital innovation partner.</SubTitle>
  </Background>
</div>);




const Background = styled.div`
  background: url('images/category_header.jpg');
  height: 200px;
  border-radius: 15px;
`;

const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size:4em;
  color:white;
  padding-top:80px;
  text-align:center;
`

const SubTitle = styled.h3`
  font-size:0.7em;
  color:white;
  text-align:center;
`
export default Header;