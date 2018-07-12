import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class World extends Component {

    title = 'The World of Dragon Prince';

    static async getInitialProps() {
        // Get static About and Video content
        // const overview = await client.getEntry();

        return {

        }
    }

    render() {
        return (
            <Layout>
                <div className="container pt-4 pb-4">
                    <h3 className="subtitle">Story & Lore</h3>
                    <h1 className="page-title">{this.title}</h1>
                </div>
            </Layout>
        )
    }
}
export default World
