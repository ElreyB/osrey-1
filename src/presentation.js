// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  Link,
  List,
  Notes,
  Slide,
  Text,
  ListItem,
  Markdown
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import osrey1 from './images/osrey1.jpg';
import oscarOsrey from './images/oscar-osrey.jpg';
import elreyOsrey from './images/elrey-osrey.jpg';
import slidesMarkdown from 'raw-loader!markdown.md';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'red',
    secondary: '#1DDBE7'
  },
  {
    primary: {
      name: 'Cabin Sketch',
      googleFont: true
    },
    secondary: 'Helvetica'
  },
  {
    quaternary: 'blue'
  }
);

// const slideTwoNotes =
//   <p>talk about how <em><Oscar/em> and <em>Osrey</em> got close over time</p>
// };

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        // controls={false}
        theme={theme}
        contentHeight={500}
        contentWidth={800}
        progress={'number'}
        transition={['slide', 'zoom', 'fade', 'spin']}
        transitionDuration={1000}
        // autoplay={true}
        // autoplayDuration={1000}
      >
        <Slide controlColor={'blue'}>
          <Heading size={2} textFont="primary">
            Hello, My name is Osrey
          </Heading>
          <Image alt={'Osrey'} src={osrey1} height={300} width={300} />
          <Text>Let me tell you a little about myself.......</Text>
        </Slide>

        <Slide
          maxHeight={200}
          maxWidth={400}
          notes="<p>talk about how <em>Oscar<em> and <em>Osrey</em> got close over time</p>"
        >
          <Text>This is one of my pet Oscar</Text>
          <Image
            alt={'Oscar and me'}
            src={oscarOsrey}
            width={402.58}
            height={299}
          />
          <Text>He likes to....</Text>
          <List>
            <ListItem>eat toast with a tomatoe spread</ListItem>
            <ListItem>
              tappping on keyboards while looking at a screen.(don't know why)
            </ListItem>
            <ListItem>and hangout with my other pet Elrey</ListItem>
          </List>
        </Slide>

        <Slide
          progressColor="yellow"
          // transition={['fade', 'zoom']}
          transitionIn={['spin']}
          transitionOut={['zoom']}
          transitionDuration={3000}
        >
          <Notes>
            <h3>somthing</h3>
            <h5>other stuff</h5>
          </Notes>
          <Text>This is Elrey aka Personal Butler</Text>
          <Image
            alt={'Elrey and me'}
            src={elreyOsrey}
            width={300}
            height={300}
          />
          <Text>
            He is the best. We play together, he feeds, cleans up after me, and
            he is so{' '}
            <Link href={'http://elrey.dance/'} target={'_blank'}>
              talented.
            </Link>
            (I taught him everything)
          </Text>
        </Slide>
        {/* {MarkdownSlides`
        ## Markdown slide
        stuff stuff and more stuff
        ---
        # No more stuff
        `} */}
        {/* {MarkdownSlides(slidesMarkdown)} */}
      </Deck>
    );
  }
}
