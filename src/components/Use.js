import React, { useState, Fragment } from 'react';
import { Link } from 'react-scroll';
import nonAlphaNumericCharMap from '../nonAlphaNumericCharMap';

const re = new RegExp('[a-zA-Z0-9]');

const Use = () => {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [copied, setCopied] = useState(false);

  const convertAndCopy = (mode = 'normal') => {
    let cstr = '';

    //Loop through each character in the textarea value and swap it out with the :cs-* equivalent (where possible)
    Array.from(value).forEach(char => {
      // 0-9 and a-z (either case)
      if (re.test(char)) {
        if (mode === 'intensify') {
          cstr += `:cs-${char}-intensifies:`;
        } else if (mode === 'wobble') {
          cstr += `:cs-${char}-wobble:`;
        } else if (mode === 'party') {
          cstr += `:party-cs-${char}:`;
        } else {
          cstr += `:cs-${char}:`;
        }
      } else if (Object.keys(nonAlphaNumericCharMap).includes(char)) {
        // We also have emojis for some of the more common symbols...
        cstr += nonAlphaNumericCharMap[char].csMapping;
      } else {
        // otherwise just add the character as-is
        cstr += char;
      }
    });

    const tempInput = document.createElement('input');
    tempInput.style = 'position: absolute; left: -1000px; top: -1000px';
    tempInput.value = cstr;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  };

  const handleChange = e => {
    const inputValue = e.target.value.toLowerCase();
    setCopied(false);
    setValue(inputValue);

    if (e.target.value.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleCopy = () => {
    convertAndCopy();
    setCopied(true);
  };

  const handleIntensifyCopy = () => {
    convertAndCopy('intensify');
    setCopied(true);
  };

  const handlePartyCopy = () => {
    convertAndCopy('party');
    setCopied(true);
  };

  const handleWobbleCopy = () => {
    convertAndCopy('wobble');
    setCopied(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <h2>Use Comic Sans in slack! (sort of)</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cs-content" className="m_b_sm">
          Your message:
        </label>
        <textarea
          id="cs-content"
          className="m_b_md"
          onChange={handleChange}
          rows="5"
        />
        <div className="button_container">
          <input
            type="submit"
            value="Copy as Comic Sans"
            disabled={disabled}
            onClick={handleCopy}
          />
          <input
            type="submit"
            value="Copy as intense-mode"
            disabled={disabled}
            onClick={handleIntensifyCopy}
          />
          <input
            type="submit"
            value="Copy as party-mode"
            disabled={disabled}
            onClick={handlePartyCopy}
          />
          <input
            type="submit"
            value="Copy as Wobble-mode"
            disabled={disabled}
            onClick={handleWobbleCopy}
          />
        </div>

        {copied && (
          <div className="copied-alert">
            <span role="img" aria-label="yay emoji">
              🎉
            </span>
            <strong>Copied!</strong> Now paste it into a Slack message
          </div>
        )}
      </form>
      <p className="text-sm">
        <strong>Heads up!</strong> Your slack team's account will need to have
        had the emojis added for this to work. See the{' '}
        <Link to="setup" href="#" smooth={true} duration={300}>
          setup
        </Link>{' '}
        section.
      </p>
    </Fragment>
  );
};

export default Use;
