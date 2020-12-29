import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




function GalleryIntroDesktop(props) {

  const { body, links } = props;

  const Main = styled.main`
      width: 100%;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &::before{
        content: '';
        position: relative;
        width: 10px;
        height: 70px;
        background: #666666;
        left: 56px;
        top: -170px;
        float: left;
        margin: 0px;
      }
      &::after{
        content: '';
        position: absolute;
        width: 10px;
        height: 150px;
        background: #666666;
        right: -20px;
      }
      ul{
        position: relative;
        li{
          list-style: none;
          &::before{
            content: '';
            width: 25px;
            height: 11px;
            background: #666666;
            display: block;
            position: relative;
            left: -39px;
            top: 17px;
          }
        }
      }
  `;

  const Box = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Ul = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 40px;
  `

  const Li = styled.li`
    border: 5px solid rgb(102, 102, 102);
    outline: rgba(160, 160, 160, 0.54) solid 1px;
    outline-offset: -30px;
    list-style: none;
  `;

  const Anc = styled.span`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    
    font-family: "Mrs Saint Delafield", cursive;
    font-size: clamp(3.5rem, 3vw, 1rem);
    text-align: center;
    `


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Main>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Main>
        </div>

        <div className="col-lg-6">
          <Box>
            <Ul>
              {
                links.length > 0
                && links.map((item, index) => {
                  return <Li key={index}>
                    <Link to={item.link}>
                      <Anc>{item.title}</Anc>
                    </Link>
                  </Li>
                })
              }
            </Ul>
          </Box>
        </div>
      </div>
    </div>
  )
}
export default GalleryIntroDesktop