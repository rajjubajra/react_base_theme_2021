import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../Config/dataurl';
import IconClose from '../../../components/Icon/IconClose';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';
import { useSelector } from 'react-redux';
import CopyToClipBoard from '../../../components/CopyToClipBoard';
import { DayMonthCommaYear } from './DateFormat';
import DangerouselySetInnerHtml from './DangerouslySetInnterHtml';
import ColourMode from '../../../components/ColourMode/ColourMode';
import NavigationOne from '../../../components/header/NavigationOne/NavigationOne';
import SocialMediaSticky from '../../../components/socalMedia/SocialMediaSticky';



const sectionStyle = {
  width: "100%",
  minHeight: "80vh",
  padding: "0px 40px"
}
const datestyle = {
  fontWeight: "100"
}
const titleStyle = {
  textTransform: "capitalize",
  fontWeight: "200",
  margin: "20px 0px"
}
const bodyStyle = {
  fontWeight: "100",
}


function BlogReadMore(props) {

  /** DYANMIC THAME COLOUR */


  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);


  /** DYNAMIC THEME COLOUR CLOSED */

  const currentPage = useSelector(state => state.reducerBlogOnePages.currentPage);
  const lastPage = useSelector(state => state.reducerBlogOnePages.lastPage);
  console.log(currentPage, lastPage, "Readmore One")

  /** node id, in order to fetch specific article */
  let { nid } = useParams();
  const dataUrl = `${baseUrl.URL}/node/${nid}?_format=json`;

  /** Set article to specific division */
  const [develBody, setDevelBody] = useState('');
  const [develTitle, setDevelTitle] = useState('');
  const [develCreated, setDevelCreated] = useState('');

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  /** FETCH ARTICLE OF node id */
  useEffect(() => {
    axios({
      method: 'GET',
      url: dataUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log(res.data);
        const { title, body, created } = res.data;
        setDevelTitle(title[0].value);
        setDevelBody(body[0].processed);
        setDevelCreated(created[0].value);
      })
      .catch(err => console.log(err))
  }, [dataUrl])


  return (
    <div className="music-one">

      <div className={colorMode}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />


        <div className="container mt-5 pb-5">

          <div className="row pb-5">
            <div className="col">
              <div className="d-flex justify-content-end">
                <CopyToClipBoard />
                <Link to={`/${pagelink.news}`}>
                  <IconClose />
                </Link>
              </div>

              <section style={sectionStyle}>

                <p style={datestyle}>
                  Date: {DayMonthCommaYear(develCreated)}
                </p>

                <div>
                  <h1 style={titleStyle}>{develTitle}</h1>
                  <div style={bodyStyle}>
                    <p>Article: {nid}</p>
                    <DangerouselySetInnerHtml text={develBody} />
                  </div>
                </div>

              </section>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default BlogReadMore