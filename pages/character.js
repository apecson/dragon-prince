import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import { createClient } from 'contentful'
import React, { Component } from 'react'
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});


class Character extends Component {

    static async getInitialProps({ query }) {

        const character = await client.getEntry(query.eid);
        const hero = await client.getAsset(character.fields.heroImage.sys.id)
        return {
            character,
            hero
        }
    }

    render() {
        const { character, hero } = this.props;
        //console.log(this.props.hero)
        //console.log(character);
        if (!character) {
            return <div>Loading...</div>
        }
        return (
            <Layout>
                <div class="container">
                    <h3>Characters</h3>
                    <h2>{character.fields.title}</h2>
                    <img className="character-hero" src={hero.fields.file.url} alt={character.fields.title} />
                    <div className="character-body">
                        {renderHTML(markdown.toHTML(character.fields.body))}
                    </div>
                </div>
            </Layout>
        )
    }
}


export default Character
