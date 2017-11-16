/**
 * presentr-boilerplate | slides.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */


/**
 * List of all the slide of our presentation
 */
const slidesConfig = {
  slide1: {
    type: 'simple',
    header: 'Hello World!',
    notes: 'Notes for speakers view.',
  },
  slide2: {
    type: 'list',
    header: 'This is a list',
    subHeader: 'Sup there!',
    list: ['List Item 1', 'List Item 2', 'List Item 3'],
    background: require('./assets/background.jpg'),
  },
  slide3: {
    type: 'quote',
    quote: 'It compiles... Ship it!',
    author: 'Someone',
  },
};

export default slidesConfig;
