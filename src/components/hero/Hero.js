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
			fluid={props.heroImg.childImageSharp.fluid}
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
					<div className="hero-title" dangerouslySetInnerHTML={{ __html: props.heroData.group[0].nodes[0].primary.hero_title.html }} />
					<div className="hero-subtitle" dangerouslySetInnerHTML={{ __html: props.heroData.group[0].nodes[0].primary.hero_subtitle.html }} />
				</div>
			</div>
		</BackgroundImage>
	)
}

export default Hero