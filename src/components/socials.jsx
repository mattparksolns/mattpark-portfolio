import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Link, SvgIcon } from '@material-ui/core'
import TwitterIcon from '../../static/assets/icons/twitter.svg'
import LinkedInIcon from '../../static/assets/icons/linkedin.svg'
import GitHubIcon from '../../static/assets/icons/github.svg'

// type SocialsProps = {
//     className?: string,
// }

const Socials = ({ className }) => {
    const {
        site: {
            siteMetadata: {
                author: { socials },
            },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author {
                        socials {
                            twitter {
                                link
                            }
                            linkedin {
                                link
                            }
                            github {
                                link
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className={className}>
            <Link title="Twitter" target="_blank" rel="noopener noreferrer" href={socials.twitter.link}>
                <SvgIcon component={TwitterIcon} viewBox={'0 -47 512.00004 512'} />
            </Link>
            <Link title="LinkedIn" target="_blank" rel="noopener noreferrer" href={socials.linkedin.link}>
                <SvgIcon component={LinkedInIcon} viewBox={'0 0 24 24'} />
            </Link>
            <Link title="GitHub" target="_blank" rel="noopener noreferrer" href={socials.github.link}>
                <SvgIcon component={GitHubIcon} viewBox={'0 0 24 24'} />
            </Link>
        </div>
    )
}
Socials.propTypes = {
    className: PropTypes.string,
}
export default Socials
