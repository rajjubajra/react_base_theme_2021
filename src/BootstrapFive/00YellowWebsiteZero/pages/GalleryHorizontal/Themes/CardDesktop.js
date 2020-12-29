import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CardDesktop(props) {

  const Card = styled.div`
    position: relative;
    border: 1px solid #999999;
    min-height: 70vh;
    padding: 25px;
  `;

  const LeftBlock = styled.div`
    position: relative;
    border-right: 1px solid rgb(153, 153, 153);
    min-height: 65vh;
  `;

  const Features = styled.div`
    margin-top: 50px;
    position: absolute;
    bottom: 100px;
    left: 40px;

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
        position: absolute;
        bottom: 5px;
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
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
      img{
        position: relative;
        width: 100%;
        box-shadow: rgb(204, 204, 204) 1px 2px 7px 0px;
        outline: rgb(255, 255, 255) solid 1px;
        outline-offset: -2px;
      }
  `;

  return (

    <div className="container mt-5">
      <Card>
        <div className="row">

          <div className="col-lg-6 col-md-6">
            <LeftBlock>
              {/** TITLE */}
              <h2>{props.title}</h2>

              {/** TYPE AND TEXT */}
              <div>[ {props.type} ]</div>

              {/** FEATURES */}
              <Features>
                <h5>Features</h5>
                <div dangerouslySetInnerHTML={{ __html: props.features }} />
              </Features>

              {/** Theme NAVIGATION */}
              <ButtonView>
                <Link
                  target="_blank"
                  to={{
                    pathname: `${props.linkref}`
                  }}>Veiw</Link>
              </ButtonView>

            </LeftBlock>
          </div>

          {/** THUMBNAIL OF THE WEBSITE */}
          <div className="col-lg-6 col-md-6">
            <RightBlock>
              <img src={props.bgImage} alt="background" />
            </RightBlock>
          </div>

        </div>
      </Card>
    </div>

  )
}

export default CardDesktop