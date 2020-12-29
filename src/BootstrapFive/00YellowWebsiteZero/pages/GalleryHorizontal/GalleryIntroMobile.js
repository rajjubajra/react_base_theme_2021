import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



function GalleryIntroMobile(props) {

  const { body, links } = props;

  const Main = styled.main`
      margin-top: 130px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &::before{
        content: '';
        width: 18px;
        height: 62px;
        position: relative;
        left: -16px;
        top: -110px;
        background-color: #999;
      }
      ul{
        padding-inline-start: 5px !important;
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
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Ul = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    padding-inline-start: 0px;
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
    <div className="container pb-5">
      <div className="row">
        <div className="col-sm-12">
          <Main>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Main>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
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
export default GalleryIntroMobile