import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title defer="false">About - B-web</title>
        <link rel="canonical" href="https://b-web.ch" />
      </Helmet>

      <Layout>
        <section className="section">
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
                  <li>Club: Ski-Club Lys Albeuve-Neirivue</li>
                  <li>Coach: Pete aka #konacoaching</li>
                </ul>
              </p>

              <h2>The long story</h2>
              <p>
                Depuis toujours attiré par le sport, j'en ai essayé beaucoup: football, judo, badminton, unihockey, baseball, kung fu, vélo, … Mais pourquoi faire 1 sport quand on peut en faire 3?
              </p>
              <p>
                J'ai participé à mon premier triathlon à 13 ans. C'était le triathlon interne du CS Neirivue:
                <ul>
                  <li>quelques centaines de mètres à la piscine de Bulle</li>
                  <li>~12 km de vélo jusqu'à la halle de gym de Neirivue</li>
                  <li>~4 km de course, Neirivue - Gare de Lessoc et retour</li>
                </ul>
                Le tout en 0:51:23.
              </p>
              <p>
                J'ai ensuite fait plus de vélo que de course ou de natation. Mais j'avais le virus. J'ai participé à mon second triathlon à la fin de ma première année d'ECDD, au Collège du Sud à Bulle (1995). Je ne me souviens pas des distances mais un temps en dessous de l'heure qui m'a valu une glace ;)
              </p>
              <p>
                Beaucoup de choses se sont passées ensuite, avec plus ou moins de sport. Et en 2011, je suis arrivé chez SCOTT Sports. À côtoyer des cyclistes, skieurs ou triathlètes, ce n'était qu'une question de temps avant que le virus ne me reprenne.
              </p>
              <p>
                En 2015, je participe au XTerra Switzerland:
                <ul>
                  <li>1,5 km de natation</li>
                  <li>32 km de VTT</li>
                  <li>10 km de trail running</li>
                </ul>
                Réalisé en 03:03.52
              </p>
              <p>
                À 40 ans (2020), je voulais me lancer un défi. J'ai décidé que ce serait l'Ironman Switzerland à Thoune:
                <ul>
                  <li>3,8 km de natation</li>
                  <li>180,2 km de vélo</li>
                  <li>42,2 km de course à pieds</li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage