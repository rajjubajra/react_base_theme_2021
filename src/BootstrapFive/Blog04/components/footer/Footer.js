import React from 'react'
import SocialMedia from '../../components/socalMedia/SocialMedia';
import FooterNav from './FooterNav';
import FormNine from '../SubscriptionForm/FormNine';

function Footer() {


  return (
    <footer className="mb-5">
      <div className="container mt-5 mb-5">
        {/** SUBSCRIPTION FORM */}
        <div className="row mt-5 mb-5">
          <FormNine />
        </div>

        {/** FOOTER CONTENTS */}
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-1 col-md-1 col-sm-12 d-none d-lg-block d-xl-block">
            <SocialMedia />
          </div>

          <div className="col-lg-11 col-md-11 col-sm-12">
            <div className="row justify-content-center">
              <h1>YW - Blog One</h1>
            </div>
            <div className="row justify-content-center">
              <FooterNav />
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8 col-sm-11">
                <p className="medium-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate tempore aliquam illo quasi! Fugit rem nemo numquam libero! Vitae quas alias itaque accusantium molestias sapiente sunt laborum odit voluptas.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
