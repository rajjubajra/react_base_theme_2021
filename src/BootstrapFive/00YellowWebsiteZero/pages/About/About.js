import React from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import NavigationTwo from '../../components/header/NavigationTwo/NavigationTwo';
import styled from 'styled-components';
//import { MainMenuShowHide } from '../../components/header/NavigationTwo/Redux/ActionShowHide';


export const About = () => {

  //const dispatch = useDispatch();

  /** COLOUR MODE */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

  /** HOW MAIN NAVIGATION WORKS IN THIS PAGE
   * As About page laoded set the view to 'false'
   * 
   * 
   */


  //const view = useSelector(state => state.reducerShowHide.view);







  const About = styled.section`

  margin: 200px 10px 100px 20px;

  `

  return (
    <div className='yellow-website-zero'>

      <div className={className}>
        <ColourMode />
        <div className="container min-vh-100">
          <div className="row">
            {/** Landing Page is in NAVIGATION PAGE */}
            <NavigationTwo />
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="col"><h1>About</h1></div>
            </div>
            <div className="col-lg-6">

              <About>
                <h2>Hi,</h2>
                <p>Tem ipsum dolor sit amet, consectetur adipisicing elit. Minima sed nostrum culpa expedita excepturi harum commodi, doloribus iusto, mollitia iste sapiente? Id odit dolor quos blanditiis neque unde iusto quia</p>

                <p>Yrem ipsum dolor sit amet consectetur adipisicing elit. Ea odit minus error repellat necessitatibus! Similique sed in quia repellat aperiam nihil. Asperiores ut tempora sunt? Ab iste numquam distinctio magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad vero neque deserunt. Inventore quo aliquam cum, magnam et fugiat autem delectus velit incidunt. Praesentium accusantium ullam autem maiores nulla. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores quo id unde enim veniam, fuga, eligendi iste praesentium minima repellendus repudiandae nam molestias consequuntur est voluptate sequi architecto et.</p>
              </About>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
