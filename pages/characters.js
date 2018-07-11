import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Characters extends Component {

    static async getInitialProps() {
        // Get static About and Video content
        const characters = await client.getEntries({
            'fields.section': 'Characters',
            'content_type': 'article'
        });

        return {
            characters
        }
    }

    renderCharacters() {
        return _.map(this.props.characters.items, (character, index) => {
            return (
                <Link key={character.sys.id} href={`/character?eid=${character.sys.id}`}>
                    <div className={`col-4 text-white bg-dark card character-thumb character-${index}`} >
                        <img className="card-img img-fluid character-image" alt={character.fields.title} src={character.fields.heroImage.fields.file.url} />
                        <div className="card-img-overlay character-content">
                            <h3>{character.fields.title}</h3>
                            <p>{character.fields.summary}</p>
                        </div>
                    </div>


                </Link>
            )
        });
    }

    render() {
        //console.log(this.props.characters);
        return (
            <Layout>
                <div className="container pt-4 pb-4">
                    <h3>Characters</h3>
                    <div className="row character-row">
                        {this.renderCharacters()}
                    </div>

                </div>
            </Layout>
        )
    }
}
export default Characters
