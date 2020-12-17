import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hero from '../../Slices/Hero/Hero'
import SubpageHero from '../../Slices/SubpageHero/SubpageHero'
import OneColumnText from '../../Slices/OneColumnText/OneColumnText'
import TwoColumnWithImage from '../../Slices/TwoColumnWithImage/TwoColumnWithImage'
import TwoColumnWithSlider from '../../Slices/TwoColumnWithSlider/TwoColumnWithSlider'
import BoxGrid from '../../Slices/BoxGrid/BoxGrid'
import FormBody from '../../Slices/FormBody/FormBody'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props

    const slice = allSlices.map((slice, index) => {
      
      const isEven = value => {
        if (value%2 === 0) {
          return 'even';
        } else {
          return 'odd'
        }
      }

      const evenOdd = isEven(index);
      
      switch (slice.slice_type) {
        // These are the API IDs of the slices
        case 'hero':
        	return <Hero key={slice.id} input={slice} />
        case 'subpage_hero':
          return <SubpageHero key={slice.id} input={slice} />
        case 'one_column_text':
        	return <OneColumnText key={slice.id} input={slice} place={evenOdd} />
        case 'two_column_with_image':
        	return <TwoColumnWithImage key={slice.id} input={slice} place={evenOdd} />
		    case 'two_column_with_slider':
			    return <TwoColumnWithSlider key={slice.id} input={slice} place={evenOdd} />
		    case 'box_grid':
			    return <BoxGrid key={slice.id} input={slice} place={evenOdd} />
		    case 'form_body':
			    return <FormBody key={slice.id} input={slice} place={evenOdd} />
        default:
        	return null
      }
    })
    return slice
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
