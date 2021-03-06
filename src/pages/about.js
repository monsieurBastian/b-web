import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import { Stack, Text } from '@chakra-ui/react'

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <Stack spacing={ 2 }>
        <PageHeader>
          Get to know me better
        </PageHeader>

        <Text>
          I am a Fribourg-based Frontend Designer and Developer crafting web experiences and helping bridging the gap between Marketing and Developers at <Link to="https://www.scott-sports.com">SCOTT Sports</Link>.
        </Text>

        <Text>
          I started my professionnal career by an apprenticeship as an IT specialist at <Link to="https://www.swisscom.ch">Swisscom</Link> and continued to study Computer Science at <Link to="https://www.hefr.ch/fr/">the University of Applied Sciences in Fribourg</Link>. But I discovered it wasn't completely the path I wanted.
        </Text>

        <Text>
          I decided to stop and flew to Brisbane, Australia, for four month to learn English.
        </Text>

        <Text>
          Back in Switzerland with that new skill, I started a new apprenticeship as Graphic Designer and worked for <Link to="https://www.nespresso.com">Nespresso</Link> for over 5 years.
        </Text>

        <Text>
          But with the skills I acquired, I was able to position myself where Graphic Design and Computer Science/Programming meet, in Web Design and Development field. And in 2011, I joined SCOTT Sports, first as a Graphic Designer but soon helping the web team on-demand. As the website grew fast, I quickly moved in a Frontend Designer and Developer role, where I now manage a team of 6.
        </Text>

        <Text>
          But life isn't only about Web. I am a sport enthusiast who fell into triathlon and just completed my first Ironman (in Thun in 2021). I am also slightly geek and love creative and digital tools. I am curious, always learning and sharing experiences.
        </Text>

        <Text>
          We can also simply share a coffee or a beer. Cheers
        </Text>

        <Text>
          Bastian
        </Text>
      </Stack>
  
    </Layout>
  )
}

export default AboutPage

/* 
<h1 className="title">About</h1>
<h2 className="subtitle">Learn who I am</h2>

<div className="columns is-centered">
  <div className="column is-four-fifths content">
    <h2>In Short</h2>
    <p>
      <ul>
        <li>Anniversaire: 27.04</li>
        <li>Taille: 184 cm</li>
        <li>Poids: 83 kg</li>
        <li>Club: <Link to="https://www.sclys.ch/">Ski-Club Lys Albeuve-Neirivue</Link></li>
        <li>Coach: Pete aka <Link to="https://www.kona-coaching.com/">#konacoaching</Link></li>
      </ul>
    </p>

    <h2>The long story</h2>
    <p>
      Depuis toujours attir?? par le sport, j'en ai essay?? beaucoup: football, judo, badminton, unihockey, baseball, kung fu, v??lo, ??? Mais pourquoi faire 1 sport quand on peut en faire 3?
    </p>
    <p>
      J'ai particip?? ?? mon premier triathlon ?? 13 ans. C'??tait le triathlon interne du CS Neirivue:
      <ul>
        <li>quelques centaines de m??tres ?? la piscine de Bulle</li>
        <li>~12 km de v??lo jusqu'?? la halle de gym de Neirivue</li>
        <li>~4 km de course, Neirivue - Gare de Lessoc et retour</li>
      </ul>
      Le tout en 0:51:23.
    </p>
    <p>
      J'ai ensuite fait plus de v??lo que de course ou de natation. Mais j'avais le virus. J'ai particip?? ?? mon second triathlon ?? la fin de ma premi??re ann??e d'ECDD, au Coll??ge du Sud ?? Bulle (1995). Je ne me souviens pas des distances mais un temps en dessous de l'heure qui m'a valu une glace ;)
    </p>
    <p>
      Beaucoup de choses se sont pass??es ensuite, avec plus ou moins de sport. Et en 2011, je suis arriv?? chez SCOTT Sports. ?? c??toyer des cyclistes, skieurs ou triathl??tes, ce n'??tait qu'une question de temps avant que le virus ne me reprenne.
    </p>
    <p>
      En 2015, je participe au XTerra Switzerland:
      <ul>
        <li>1,5 km de natation</li>
        <li>32 km de VTT</li>
        <li>10 km de trail running</li>
      </ul>
      R??alis?? en 03:03.52
    </p>
    <p>
      ?? 40 ans (2020), je voulais me lancer un d??fi. J'ai d??cid?? que ce serait l'Ironman Switzerland ?? Thoune:
      <ul>
        <li>3,8 km de natation</li>
        <li>180,2 km de v??lo</li>
        <li>42,2 km de course ?? pieds</li>
      </ul>
    </p>
  </div>
</div> */