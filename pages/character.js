import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import { createClient } from 'contentful'
import React, { Component } from 'react'
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';


class Character extends Component {

    static async getInitialProps({ query }) {
        let client = createClient({
            space: process.env.REACT_APP_SPACE,
            accessToken: process.env.REACT_APP_ACCESS_TOKEN
        });

        const character = await client.getEntry(query.eid);
        const hero = await client.getAsset(character.fields.heroImage.sys.id)
        return {
            character,
            hero
        }
    }

    render() {
        const { character, hero } = this.props;
        if (!character) {
            return <div>Loading...</div>
        }
        return (
            <Layout>
                <div className="container">
                    <h3 className="subtitle">Characters</h3>
                    <h1 className="page-title">{character.fields.title}</h1>
                    <img className="character-hero" src={hero.fields.file ? hero.fields.file.url : ''} alt={character.fields.title} />
                    <div className="character-body">
                        {renderHTML(markdown.toHTML(character.fields.body))}
                    </div>
                </div>
            </Layout>
        )
    }
}


export default Character
