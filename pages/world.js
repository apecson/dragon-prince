import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});
const fallback = '//images.ctfassets.net/sykm2zb64bkw/3hRcpuODd6S8uGOicqKoGI/39267d207cc393734d6a30ac0c890c93/moonshadowForm.png';

class World extends Component {

    title = 'The World of Dragon Prince';

    static async getInitialProps() {
        // Get static About and Video content
        const worlds = await client.getEntries({
            'fields.section': 'World',
            'content_type': 'article',
            order: 'sys.createdAt'
        });

        return {
            worlds
        }
    }

    renderWorld() {
        console.log(this.props.worlds)
        return _.map(this.props.worlds.items, (world, index) => {
            let imgUrl = '';
            if (world.fields.heroImage) {
                imgUrl = `${world.fields.heroImage.fields.file.url}?h=190&w=340&fit=fill`;
            }
            else {
                imgUrl = fallback;
            }
            return (
                <Link key={world.sys.id} href={`/world?eid=${world.sys.id}`}>
                    <div className={`col-4 mb-4 text-white bg-dark card world-thumb world-${index}`} >
                        <img className="card-img img-fluid world-image" height="190" alt={world.fields.title} src={imgUrl} />
                        <div className="card-img-overlay world-content">
                            <h3>{world.fields.title}</h3>
                            <p>{world.fields.summary}</p>
                        </div>
                    </div>


                </Link>
            )
        });
    }

    render() {
        return (
            <Layout>
                <div className="container pt-4 pb-4">
                    <h3 className="subtitle">Story & Lore</h3>
                    <h1 className="page-title">{this.title}</h1>
                    <div className="row character-row mt-4 mb-4">
                        {this.renderWorld()}
                    </div>
                </div>
            </Layout>
        )
    }
}
export default World
