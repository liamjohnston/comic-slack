import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import imgMenu from '../img/slack-menu.jpg';
import imgAddToSlack from '../img/add-to-slack.jpg';

const zipPath = `${process.env.PUBLIC_URL}/files/`;

const Setup = () => (
  <Fragment>
    <section>
      <header>
        <h2 className="m_t_0">How it works</h2>
      </header>
      <div>
        <p className="m_t_0">
          Basically, we'll add a bunch of Comic Sans characters as images to
          your custom emoji list in Slack. Then you can use the{' '}
          <Link to="compose" href="#" smooth={true} duration={500}>
            message composer
          </Link>{' '}
          to convert your boring text into glorious Comic Sans.
        </p>
        <p>
          Follow the setup guide below and you'll be impressing your colleagues
          in no time.
        </p>
      </div>
    </section>

    <section>
      <header>
        <h3 className="m_t_0 m_b_sm">Step 1.</h3>
        <h2 className="m_t_0">Get the 'emojis'</h2>
      </header>
      <div>
        <p className="m_t_0">
          <a href={`${zipPath}characters.zip`} download>
            &#11015; Download the images
          </a>{' '}
          (zip, ~1.5MB).
        </p>
        <p>Unzip it.</p>
      </div>
    </section>

    <section>
      <header>
        <h3 className="m_t_0 m_b_sm">Step 2.</h3>
        <h2 className="m_t_0">Enable bulk emoji uploading</h2>
      </header>
      <div>
        <p className="m_t_0">
          Add the{' '}
          <a
            href="https://chrome.google.com/webstore/detail/slack-emoji-tools/anchoacphlfbdomdlomnbbfhcmcdmjej"
            rel="noopener noreferrer"
            target="_blank"
          >
            Slack Emoji Tools
          </a>{' '}
          Chrome extension.
        </p>
        <p>This will make step 3 a breeze.</p>
      </div>
    </section>

    <section>
      <header>
        <h3 className="m_t_0 m_b_sm">Step 3.</h3>
        <h2 className="m_t_0">Add the emojis to Slack</h2>
      </header>
      <div>
        <p className="m_t_0">Go to the 'Customize Slack' screen:</p>
        <img src={imgMenu} alt="Menu showing link to Customize Slack" />
        <p>
          The Chrome extension you just added should have enable a bulk upload
          area on this screen. Simply drag and drop the contents of the
          'characters' folder.
        </p>
        <img src={imgAddToSlack} alt="Bulk adding emojis." />
      </div>
    </section>

    <section>
      <h2 className="m_t_0">Profit</h2>
      <div>
        <p className="m_t_0">
          You're ready to Slack in style. Head over to the{' '}
          <Link to="compose" href="#" smooth={true} duration={500}>
            message composer
          </Link>{' '}
          and type your message.
        </p>
      </div>
    </section>

    <section>
      <header>
        <h2 className="m_t_0">Known issues</h2>
      </header>
      <div>
        <ul className="m_t_0">
          <li>
            Comic Slack uses images, not a font. So you can forget about
            kerning.
          </li>
          <li>
            I've had to remove transparency from each image so that they are
            still readable with Slack's dark mode.
          </li>
          <li>
            Comic Slack currently only supports a-z, 0-9 and a small selection
            of the most common symbols. Any other characters you type will
            render in whatever garbage font Slack usually uses ;)
          </li>
        </ul>
      </div>
    </section>
  </Fragment>
);

export default Setup;
