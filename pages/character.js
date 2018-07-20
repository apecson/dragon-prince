import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import { createClient } from 'contentful'
import React, { Component } from 'react'
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';

let client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Character extends Component {
    constructor () {
        super()
        this.state = {
            hero: null
        }
    }

    static async getInitialProps({ query }) {
        const character = await client.getEntry(query.eid);

        return {
            character
        }
    }

    componentDidMount() {
        this.getData();
    }
    
    async getData() {
        const hero = await client.getAsset(this.props.character.fields.heroImage.sys.id);

        this.setState({
            hero
        })
    }

    render() {
        const { character } = this.props,
              { hero } = this.state;
        if (!character) {
            return <div>Loading...</div>
        }
        return (
            <Layout>
                <div className="container">
                    <h3 className="subtitle">Characters</h3>
                    <h1 className="page-title">{character.fields.title}</h1>
                    <img className="character-hero" src={hero ? hero.fields.file.url : ''} alt={character.fields.title} />
                    <div className="character-body">
                        {renderHTML(markdown.toHTML(character.fields.body))}
                    </div>
                </div>
            </Layout>
        )
    }
}


export default Character
