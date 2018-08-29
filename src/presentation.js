// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  Link,
  List,
  Slide,
  Text,
  ListItem
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import osrey1 from './images/osrey1.jpg';
import oscarOsrey from './images/oscar-osrey.jpg';
import elreyOsrey from './images/elrey-osrey.jpg';

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
        <Slide colorControl={'blue'}>
          <Heading size={2} textFont="primary">
            Hello, My name is Osrey
          </Heading>
          <Image alt={'Osrey'} src={osrey1} height={300} width={300} />
          <Text>Let me tell you a little about myself.......</Text>
        </Slide>
        <Slide>
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
        <Slide>
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
      </Deck>
    );
  }
}
