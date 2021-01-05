import React from 'react'
import NavigationOne from '../components/header/NavigationOne/NavigationOne';


export const About = () => {
  return (
    <div className='photography-one'>
      <NavigationOne />
      <div className="container min-vh-100 mt-5">
        <div className="row">
          <div className="col"><h1>About</h1></div>
          <div>
            <img src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/lens-1223583_1280.jpg"
              alt="about" />
          </div>
          <div className="mt-5">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore harum minima assumenda, magni autem, nesciunt tenetur dignissimos qui ea ducimus rem voluptas nihil fuga. Vero id ut suscipit eum odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora, officiis maiores, voluptatem ipsum non corporis ad, reprehenderit rem adipisci in cum dolor ipsa delectus alias qui aspernatur labore ullam?</p>
            <p>Tpsum dolor sit, amet consectetur adipisicing elit. Voluptate facere porro cupiditate doloribus suscipit consequatur distinctio corporis veritatis laudantium incidunt reiciendis dolor, quidem soluta in quia adipisci itaque laborum doloribus suscipit consequatur distinctio corporis veritatis laudantium incidunt reiciendis dolor, quidem soluta in quia adipisci itaque laborum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
