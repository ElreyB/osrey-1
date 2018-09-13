// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  GoToAction,
  Heading,
  Image,
  Layout,
  Link,
  List,
  Notes,
  Quote,
  Slide,
  Text,
  ListItem,
  MarkdownSlides
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import osrey1 from './images/osrey1.jpg';
import oscarOsrey from './oscar-osrey.jpg';
import elreyOsrey from './images/elrey-osrey.jpg';
// import slidesMarkdown from 'raw-loader!markdown.md';

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
  }
  // {
  //   quaternary: 'blue'
  // }
);

const javascript = `const helloWorld = () => 'Hello World';
console.log(helloWorld());`;

const code = `class View extends React.Component {
  componentDidMount() {
    console.log('Hello');
  }

  render() {
    return <div>My View</div>;
  }
}
render(<View />);`;
const repeat = 'repeat';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        // controls={false}
        theme={theme}
        // contentHeight={500}
        // contentWidth={800}
        progress={'number'}
        transition={['slide', 'zoom', 'fade', 'spin']}
        transitionDuration={1000}
        // autoplay={true}
        // autoplayDuration={1000}
      >
        <Slide bgImage={oscarOsrey} bgDarken={0.5} bgPositoin="bottom right">
          <Heading size={2} textFont="primary">
            Hello, My name is Osrey
          </Heading>
          <Image alt={'Osrey'} src={osrey1} height={300} width={300} />
          <Text>Let me tell you a little about myself.......</Text>
        </Slide>

        <Slide
          // maxHeight={200}
          // maxWidth={400}
          notes="<p>talk about how <em>Oscar<em> and <em>Osrey</em> got close over time</p>"
        >
          <Layout>
            <Fill>
              <Text>This is one of my pet Oscar</Text>
            </Fill>
            <Fill>
              <Image
                alt={'Oscar and me'}
                src={oscarOsrey}
                width={402.58}
                height={299}
              />
            </Fill>
          </Layout>
          <Text>He likes to....</Text>
          <List>
            <ListItem>eat toast with a tomatoe spread</ListItem>
            <ListItem>
              tappping on <code style={{ color: 'black' }}>keyboards </code>
              while looking at a screen. Always typing crazy stuff like...
              <CodePane lang="javascript" source={javascript} theme="light" />
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
          </Text>
          <BlockQuote>
            <Quote>I taught him everything</Quote>
            <Cite>Osrey, The Bear King</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          {MarkdownSlides`
        ## Markdown slide
        stuff stuff and more stuff
        ---
        # No more stuff
        `}
          {/* {MarkdownSlides(slidesMarkdown)} */}
        </Slide>
        <Slide>
          <GoToAction slide={2} />
          <ComponentPlayground code={code} />
        </Slide>
      </Deck>
    );
  }
}
