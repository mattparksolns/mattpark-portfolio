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
            width: '70%',
            [breakpoints.down('sm')]: {
                width: '90%',
                fontSize: '8.57vw',
            },
            [breakpoints.down('xs')]: {
                width: '100%',
                fontSize: '9.2vw',
            },
            '@media only screen and (max-width: 250px)': {
                fontSize: '8.666667vw',
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

    const {
        site: {
            siteMetadata: {
                author: {
                    name,
                    socials: { linkedin },
                },
            },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author {
                        name
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

    return (
        <section className={`${classes.root} contentWrapper`}>
            <Typography className={classes.intro} variant="h1" gutterBottom>
                My name is
                <Link
                    title="LinkedIn"
                    color={'secondary'}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    href={linkedin.link}
                >
                    {` ${name}. `}
                </Link>
                I&#39;m a New York City based software engineer.
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
