import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import burger0 from './burger0.png';
import burger1  from '../../Resources/burger1.jpg';
import burger2  from '../../Resources/burger2.png';
import PropTypes from 'prop-types';



const items = [
  {
    src: burger2,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: burger0,
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: burger1,
    altText: '',
    caption: '',
    header: ''
  }
];

const ImageCarousel = () => <UncontrolledCarousel items={items} />;

UncontrolledCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool, // default: true
  controls: PropTypes.bool, // default: true
  autoPlay: PropTypes.bool, // default: true
};

export default ImageCarousel;
