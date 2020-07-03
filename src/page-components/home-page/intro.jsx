import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles, createStyles, Typography, Link } from '@material-ui/core'

const useStyles = makeStyles(({ spacing, breakpoints }) =>
    createStyles({
        root: {
            position: 'relative',
            // backgroundImage: `linear-gradient(180deg, ${palette.background.default}, ${palette.background.paper})`,
            paddingBottom: spacing(5),
        },
        intro: {
            position: 'relative',
            fontSize: '5.41666667vw',
            [breakpoints.down('sm')]: {
                width: '90%',
                fontSize: '8.57vw',
            },
            [breakpoints.down('xs')]: {
                width: '100%',
                fontSize: '9.2vw',
            },
            '& > a': {
                fontWeight: 900,
            },
        },
        description: {
            position: 'relative',
            textAlign: 'right',
            fontSize: 38.4,
            [breakpoints.down('sm')]: {
                fontSize: '4vw',
            },
            [breakpoints.down('xs')]: {
                fontSize: '5vw',
                textAlign: 'left',
            },
        },
    }),
)
const Intro = () => {
    const classes = useStyles()
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author {
                        socials {
                            linkedin {
                                link
                            }
                        }
                    }
                }
            }
        }
    `)
    const socials = data.site.siteMetadata.author.socials
    return (
        <section className={`${classes.root} contentWrapper`}>
            <Typography className={classes.intro} variant="h1" gutterBottom>
                My name is
                <Link
                    title="LinkedIn"
                    color={'secondary'}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    href={socials.linkedin.link}
                >
                    {' '}
                    Matt
                    <br />
                    Park.{' '}
                </Link>
                I&#39;m a New York
                <br />
                City based software
                <br />
                engineer.
            </Typography>
            <Typography className={classes.description} variant="h1">
                Forward Thinker
                <br />
                Problem Solver
                <br />
                Web Tinkerer
                <br />
            </Typography>
        </section>
    )
}
export default Intro
