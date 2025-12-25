import React from 'react'
import "./PrivacyPolicy.scss"
const PrivacyPolicy = () => {
  return (
    <>
       <div className="privacy-parent parent">
      <div className="privacy container">
        <h1 className="title">Privacy Policy</h1>

        <h3 className="title3">Who We Are</h3>
        <p>
          Our website address is: <a href="https://onkarworld.com">https://onkarworld.com</a>
        </p>

        <h3>Data Collection</h3>
        <p>
        Onkar Worlds does not collect any personal data from visitors. We only collect user information from the contact form.
        </p>

        <h3>Cookies</h3>
        <p>
          Our website does not use cookies to collect personal data. Any cookies used are strictly for website functionality and are not used to track personal information.
        </p>

          <p>
            An anonymized string created from your email address  may be provided to the Gravatar service to see if you are
            using it. The Gravatar service privacy policy is available. After approval of your comment,
            your profile picture is visible to the public in the context of your
            comment.
          </p>
          <h3>Media</h3>
          <p>
            {" "}
            
            <span>
              {" "}
              If you upload images to the website, you should avoid uploading
              images with embedded location data (EXIF GPS) included. Visitors
              to the website can download and extract any location data from
              images on the website.
            </span>
          </p>

        <h3>Data Sharing</h3>
        <p>
          Since we do not collect personal data, we do not share any data with third parties.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about our privacy practices, please contact us at <a href="mailto:info@onkarworld.com">info@onkarworld.com</a>.
        </p>
      </div>
    </div>
    </>
  )
}

export default PrivacyPolicy
