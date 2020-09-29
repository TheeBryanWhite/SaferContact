import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import './Hero.scss'
import HeroMp4 from './video/hero.mp4'
import HeroOgv from './video/hero.ogv'
import LogoSvg from '../../svg/logo-full.svg'

const Hero = props => {

	return (
		<BackgroundImage
			className="hero"
			fluid={props.heroData.childImageSharp.fluid}
			id="hero"
			Tag="section"
		>
			<video 
				autoPlay
				loop
				muted
				preload="auto"
			>
				<source src={HeroMp4} type="video/mp4" />
				<source src={HeroOgv} type="video/ogv" />
			</video>
			<div className="overlay">
				<div className="body container">
					<h1><LogoSvg /><span className="screen-reader-text">Safercontact, dynamic contact tracing solution</span></h1>
					<h2>Providing a more secure, accurate, scalable, and anonymous contact tracing solution.</h2>
					<p>Get in touch with the safercontact team to see how we can help your business get back to work safely.</p>
					<p className="cta"><a href="https://outlook.office365.com/owa/calendar/safercontact@skylytics.com/bookings/" target="_blank" rel="noreferrer">Book a Demo Today</a></p>
				</div>
			</div>
		</BackgroundImage>
	)
}

export default Hero