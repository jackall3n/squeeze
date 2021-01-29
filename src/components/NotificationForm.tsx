import React, { useState } from 'react';

function NotificationForm() {
  const [active, setActive] = useState(false)

  return (
    <>

      <button id="subscribe" onClick={() => setActive(true)}>
        click here to be sent a heads up when the squeeze is probably starting to get squoze
      </button>

      {active && (
        <article id="mc_embed_signup">
          <form action="https://bonner.us7.list-manage.com/subscribe/post?u=ed1bdca530f1a8ad3a0f57d09&amp;id=7bfcf862c8"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                target="_blank"
                noValidate onSubmit={console.log}>
            <b>k i'm building that, gimme ur info and I'll do my best to keep you up to date</b>
            <p>
              <label htmlFor="mce-EMAIL">email 4 email alert</label>
              <input type="email" value="" name="EMAIL" id="mce-EMAIL" />
            </p>
            <p className="mc-field-group size1of2">
              <label htmlFor="mce-PHONE">phone 4 text alert</label>
              <input type="text" name="PHONE" value="" id="mce-PHONE" />
            </p>
            <div id="mce-responses">
              <div id="mce-error-response" style={{ display: "none" }} />
              <div id="mce-success-response" style={{ display: "none" }} />
            </div>
            <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
              <input type="text"
                     name="b_ed1bdca530f1a8ad3a0f57d09_7bfcf862c8"
                     tabIndex={-1} value="" /></div>
            <p><input type="submit" value="Subscribe for updates" name="subscribe" id="mc-embedded-subscribe" /></p>
          </form>
        </article>
      )}

    </>
  )
}

export default NotificationForm;
