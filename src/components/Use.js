import React, { Component, Fragment } from 'react'
//import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Link } from 'react-scroll'

const re = new RegExp('[a-zA-Z0-9]')

class Use extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            comicsansified: '',
            disabled: true,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.convertIt = this.convertIt.bind(this)
    }

    convertIt() {
        const str = this.state.value
        let cstr = ''

        for (var i = 0, len = str.length; i < len; i++) {
            //0-9 and a-z (either case)
            if (re.test(str[i])) {
                cstr += `:cs-${str[i]}:`

                //We also have emojis for some of the more common symbols...
                //The following is a bit yuck, but emoji filenames can't
                //contain special characters so we have to make some stuff up.
            } else if (str[i] === ' ') {
                cstr += ':cs-s-sp:'
            } else if (str[i] === '?') {
                cstr += ':cs-s-qm:'
            } else if (str[i] === '!') {
                cstr += ':cs-s-em:'
            } else if (str[i] === '&') {
                cstr += ':cs-s-amp:'
            } else if (str[i] === '@') {
                cstr += ':cs-s-at:'
            } else if (str[i] === ',') {
                cstr += ':cs-s-com:'
            } else if (str[i] === '$') {
                cstr += ':cs-s-dol:'
            } else if (str[i] === '.') {
                cstr += ':cs-s-fs:'
            } else if (str[i] === '#') {
                cstr += ':cs-s-hash:'
            } else if (str[i] === '%') {
                cstr += ':cs-s-pc:'
            } else {
                cstr += str[i]
            }
        }
        this.setState({ comicsansified: cstr })

        str === ''
            ? this.setState({ disabled: true })
            : this.setState({ disabled: false })
    }

    handleChange(e) {
        const value = e.target.value.toLowerCase()
        this.setState(
            {
                copied: false,
                value,
            },
            () => {
                this.convertIt()
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        const { comicsansified, disabled, copied } = this.state
        return (
            <Fragment>
                <h2>Use Comic Sans in slack! (sort of)</h2>
                <form id="cs-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="cs-content" className="m_b_sm">
                        Your message:
                    </label>
                    <textarea
                        id="cs-content"
                        className="m_b_md"
                        onChange={this.handleChange}
                        rows="5"
                    />
                    <CopyToClipboard
                        text={comicsansified}
                        onCopy={() => this.setState({ copied: true })}
                    >
                        <input
                            type="submit"
                            value="Copy as Comic Sans"
                            disabled={disabled}
                        />
                    </CopyToClipboard>

                    {copied && (
                        <div className="copied-alert">
                            <span role="img" aria-label="yay emoji">
                                🎉
                            </span>
                            <strong>Copied!</strong> Now paste it into a Slack
                            message
                        </div>
                    )}
                </form>
                <p className="text-sm">
                    <strong>Heads up!</strong> Your slack team's account will
                    need to have had the emojis added for this to work. See the{' '}
                    <Link to="setup" href="#" smooth={true} duration={300}>
                        setup
                    </Link>{' '}
                    section.
                </p>
            </Fragment>
        )
    }
}

export default Use
