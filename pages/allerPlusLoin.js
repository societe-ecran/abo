import React from 'react'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import occupy from '../public/occupycityhall.png'
import Seo from '../components/seo/Seo'

const allerPlusLoin = () => {
    const texte = '  Régulièrement alimentée, cette section présente différents types de ressources pour mieux comprendre l’histoire de la police et du système pénal, connaître des luttes et stratégies qui s’y sont opposées, partager des façons de prendre en charge les torts, apprendre d’élans et expériences passés et actuels. En somme différents outils pour aider à défaire la police, la justice et la prison.'
    const titre = 'Aller plus loin'
    const description = "Régulièrement alimentée, cette section présente différents types de ressources pour mieux comprendre l’histoire de la police et du système pénal, connaître des luttes et stratégies qui s’y sont opposées, partager des façons de prendre en charge les torts, apprendre d’élans et expériences passés et actuels. "
    return (
        <div>
            <Layout>
            <Seo title={titre} description={description}/>
                <Intro src={occupy} title={"Aller plus loin"} texte={texte} />

            </Layout>
        </div>
    )
}

export default allerPlusLoin