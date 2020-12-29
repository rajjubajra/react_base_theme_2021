import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



function CardTablet(props) {

  const Card = styled.div`
    position: relative;
    border: 1px solid #999999;
    min-height: 70vh;
    padding: 25px;
  `;

  const Features = styled.div`
    margin: 50px 0px;
    padding-left: 25px;
    h5{
      text-transform: uppercase;
      letter-spacing: 4px;
    }

    ul{
      padding-inline-start: 20px;
      li{
        list-style: square;
      }
    }
    `;

  const ButtonView = styled.div`
    a{
        margin: 0px 25px;
        color: #ffffff;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 12px;
        text-decoration: none;
        padding: 7px 20px;
        width: 130px;
        background-color: #666666;
        text-align: center;
    }
    a:hover{
      background-color: #000000;
      transition: background-color 1s;
    }
    `;

  /** Right Column */
  const RightBlock = styled.div`
    margin: 30px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
      img{
        position: relative;
        width: 90%;
        box-shadow: rgb(204, 204, 204) 1px 2px 7px 0px;
        outline: rgb(255, 255, 255) solid 1px;
        outline-offset: -2px;
      }
  `;

  return (

    <div className="container mt-5">
      <Card>

        <div className="row">
          {/** TITLE */}
          <div className="col"><h2>{props.title}</h2></div>
        </div>

        {/** TYPE AND TEXT */}
        <div className="row">
          <div className="col">
            [ {props.type} ]
          </div>
        </div>

        <div className="row">
          {/** THUMBNAIL OF THE WEBSITE */}
          <div className="col">
            <RightBlock>
              <img src={props.bgImage} alt="background" />
            </RightBlock>
          </div>
        </div>

        <div className="row">
          {/** FEATURES */}
          <div className="col">
            <Features>
              <h5>Features</h5>
              <div dangerouslySetInnerHTML={{ __html: props.features }} />
            </Features>
          </div>
        </div>

        {/** Theme NAVIGATION */}
        <div className="row">
          <div className="col">
            <ButtonView>
              <Link
                target="_blank"
                to={{
                  pathname: `${props.linkref}`
                }}>Veiw</Link>
            </ButtonView>
          </div>
        </div>

      </Card>
    </div>
  )
}

export default CardTablet