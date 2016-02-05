import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/squirmdeck";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["slide"]} bgColor="white">
          <Layout>
            <Fill>
              <Heading size={1} fit textColor="black" margin={30}>
                Product Design
              </Heading>
              <Text size={1} textColor="black">
                Building product software with consistent UX
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={2} textColor="black" margin={30}>
                  We need to have clear goals
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  Maintain UX consistency
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} fill textColor="black">
                  Create the best team work culture
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} fill textColor="black">
                  Inspire sustainable design & innovation
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Heading size={3} fill textColor="black" margin={30}>
                  and most importantly...
                </Heading>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <BlockQuote>
            <Quote>DELIVER</Quote>
          </BlockQuote>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  okay, how?
                </Text>

              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} textColor="black" margin={30}>
                  Understand the language
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  Design Principles: [ Visual Perception ]
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={3} textColor="black" margin={30}>
                  The Principles of Gestalt Theory
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  EMERGENCE
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  REIFICATION
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  MULTI-STABILITY
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  INVARIANCE
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <BlockQuote>
            <Quote textColor="black">The whole is other than the sum of the parts.</Quote>
            <Cite>Kurt Koffka</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} fit textColor="black" margin={30}>
                  EMERGENCE
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} fit textColor="black">
                  Emergence is the process of forming
                </Text>
                <Text size={1} fit textColor="black">
                  complex patterns from simple rules.
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="black">
            <Layout>
              <Fill>
                <Heading size={2} fit textColor="white" margin={30}>
                  “Our users come first"
                </Heading>
              </Fill>
            </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Text size={4} textColor="black" margin={30}>
                  When attempting to identify an object, we first seek to identify its outline.
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text textColor="black" margin={30}>
                  We then match this outline pattern against shapes and objects we already know to find a match.
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text textColor="black" margin={30}>
                  Only after the whole emerges through this outline pattern matching, do we start to identify the parts that make up the whole.
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text textColor="black">
                  When designing, keep in mind that people will identify elements first by their general form.
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Layout>
            <Fill>
              <Text size={4} textColor="white">
                A simple well defined object will communicate more quickly than a detailed object with a hard to recognize contour.
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Heading size={1} fit textColor="black" margin={30}>
            REIFICATION
          </Heading>
        </Slide>
        <Slide transition={["spin"]} bgColor="black">
            <Layout>
              <Fill>
                <Heading size={2} fit textColor="white" margin={30}>
                  “Our mind fills in the gap"
                </Heading>
              </Fill>
            </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Text size={6} textColor="white">
            Reification is an aspect of perception in which the object as perceived contains more spatial information than what is actually present.
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Text textColor="black" margin={30}>
            As we attempt to match what we see to the familiar patterns we have stored in memory, there isn’t always an exact match.
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Text textColor="white" margin={30}>
            Instead we find a near match and then fill in the gaps of what we think we should see.
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Text textColor="black">
            Reification suggests that we don’t need to present the complete outline in order of viewers to see it.
          </Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="white">
          <Layout>
            <Fill>
              <Text size={4} textColor="black">
                We can leave out parts of the outline as long as we provide enough of it to allow for a close enough pattern match.
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Heading size={1} fill textColor="black" margin={30}>
            “THE MIND SEEKS TO AVOID UNCERTAINTY"
          </Heading>
          <Appear>
            <Layout>
              <Fill>
                <Text textColor="black">
                  Perceptual experiences moving unstably back and forth between alternative interpretations.
                </Text>
              </Fill>
            </Layout>
          </Appear>

        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Text size={6} textColor="white">
             Some objects can be perceived in more than one way.
          </Text>
        </Slide>
        <Slide transition={["spin"]} bgColor="black">
          <Layout>
            <Fill>
              <Heading size={2} fit textColor="white" margin={30}>
                We avoid this.
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} fit textColor="black" margin={30}>
                  If we don't
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black" margin={30}>
                  We leave to much room for dominant perception to take over.
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} fit textColor="black" margin={30}>
                  If we don't
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black" margin={30}>
                  The harder it will be for our users to perform their tasks.
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="black">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} fit textColor="white" margin={30}>
                  From a design perspective
                </Heading>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black" margin={30}>
                  We don't want to change someone’s perception.
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} fit textColor="white">
                  There should be no alternative.
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="white">
                  Work to strengthen the original intent.
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["spin"]} bgColor="black">
          <Appear>
            <Layout>
              <Fill>
                <Heading textColor="white" margin={30}>
                  INVARIANCE
                </Heading>
                <Text size={6} fit textColor="white">
                  a property of perception in which simple objects are recognized
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading textColor="white">
            "Recognized independently from their rotation, translation and scale"
          </Heading>
        </Slide>
        <Slide transition={["slide"]} align="top right" bgColor="white">
          <Heading textColor="black">
            Since we often encounter objects from different perspectives,
          </Heading>

        </Slide>
        <Slide transition={["spin"]} align="top right" bgColor="white">
          <Text textColor="black">
            we’ve developed an ability to recognize objects despite their different appearance.
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Layout>
            <Fill>
              <Text size={4} textColor="white">
                Imagine if you could only recognize a login form if it was only using the colors black and white.
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Layout>
            <Fill>
              <Text size={4} textColor="black">
                But you could not recognize them once color was added.
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["spin"]} bgColor="white">
          <Layout>
            <Fill>
              <Heading size={4} fit textColor="black" margin={30}>
                Main Idea
              </Heading>
              <Text size={4} textColor="black">
                The gestalt principles speak the core of our UX consistency.
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Layout>
            <Fill>
              <Text size={4} textColor="black">
                Our principles should be about the relationship of our user's perception and what we visually communicate with objects.
              </Text>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} textColor="black" margin={30}>
                  Leverage best practices
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  Leverage research & data
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} textColor="black">
                  Don't be too visionary
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  Ideas must work
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  Establish our standard
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  Communicate
                </Text>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Text size={1} textColor="black">
                  Demonstrate
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} fill textColor="black" margin={30}>
                  Usability
                </Heading>
                <Text size={1} fit textColor="black">
                  Once users learn how to interact with a certain pattern in the system
                </Text>
              </Fill>
            </Layout>
          </Appear>

          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} fill textColor="black" margin={30}>
                  Usability
                </Heading>
              </Fill>
            </Layout>
          </Appear>

          <Appear>
            <Layout>
              <Fill>
                <Text size={1} fit textColor="black">
                  How do we maintain product UX consistency?
                </Text>
              </Fill>
            </Layout>
          </Appear>
        </Slide>


        <Slide transition={["slide"]} bgColor="white">
          <Layout>
            <Fill>
              <Heading size={1} fit textColor="black">
                Create a design system
              </Heading>
              <Text size={1} textColor="black">
                Adopt a successful and sustainable process
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Layout>
            <Fill>
              <Heading size={1} fit textColor="black">
                Clear goals
              </Heading>
              <Text size={1} textColor="black">
                Best practices to maintain UX consistency, the best team work culture, and inspire innovation
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>

          <Appear>
            <Layout>
              <Fill>
                <Heading size={1} fit textColor="white">
                  The Power of product consistency
                </Heading>
              </Fill>
            </Layout>

          </Appear>

          <Appear>
            <Layout>
              <Fill>
                <Text size={1} fill textColor="white">
                  Providing consistent user experience across different components of our products will boost usability of these products.
                </Text>
              </Fill>
            </Layout>

          </Appear>
        </Slide>
      </Deck>
    );
  }
}
