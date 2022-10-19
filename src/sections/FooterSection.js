import React from 'react'
import ExternalLinks from '../components/ExternalLinks'

const FooterSection = () => {
  return (
    <footer>
        <div className="socialmedia">
            <ExternalLinks link="https://facebook.com" icon="fa-brands fa-facebook-f"/>
            <ExternalLinks link="https://instagram.com" icon="fa-brands fa-instagram"/>
            <ExternalLinks link="https://twitter.com" icon="fa-brands fa-twitter"/>
            <ExternalLinks link="https://google.com" icon="fa-brands fa-google"/>
            <ExternalLinks link="https://linkedin.com" icon="fa-brands fa-linkedin"/>
        </div>
        <div>© 2022 Fixxo. All Rights Reserved.</div>
    </footer>
  )
}

export default FooterSection