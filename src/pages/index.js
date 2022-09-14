import * as React from 'react'
import { graphql } from 'gatsby'

import { Stack, Text } from '@chakra-ui/react'
import { StoryblokComponent, storyblokEditable, useStoryblokState } from 'gatsby-source-storyblok'

import LayoutStoryblok from '../components/layout-storyblok'
import PageHeader from '../components/page-header'

const IndexPage = ({ data }) => {
  let story = data.storyblokEntry
  story = useStoryblokState( story )

  const components = story.content.body.map( blok => (<StoryblokComponent blok={ blok } key={ blok._uid } />) )

  return (
    <LayoutStoryblok pageTitle="Home Page">
      <Stack spacing={ 3 } { ...storyblokEditable( story.content ) }>
        <h1>{ story.name }</h1>
        { components }
      </Stack>
      <Stack spacing={ 3 }>
        <Text>Hey, I am Bastian and I am</Text>
        <PageHeader>
          A Frontend and Multimedia Design Team Lead at SCOTT Sports, crafting web experiences and help bridging the gap between Marketing and Developers.
        </PageHeader>
      </Stack>
    </LayoutStoryblok>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`