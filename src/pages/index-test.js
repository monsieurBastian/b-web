import * as React from 'react'

import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import { Stack, Text } from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Stack spacing={ 3 }>

        <Text>Hey, I am Bastian and I am</Text>
        <PageHeader>
          A Frontend and Multimedia Design Team Lead at SCOTT Sports, crafting web experiences and help bridging the gap between Marketing and Developers.
        </PageHeader>

      </Stack>
    </Layout>
  )
}

export default IndexPage