import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';


const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Overview extends Component {

    static async getInitialProps() {
        // Get static About
        const about = await client.getEntry('2Y0bGanLnGYMKUocyMUA88'); // about
        return {
            about
        }
    }

    render() {
        console.log(this.props.about)
        return (
            <Layout>
                <div className="container">
                    <h3>Story & Lore</h3>
                    <h2>Story Overview</h2>
                    <p>{renderHTML(markdown.toHTML(this.props.about.fields.body))}</p>
                    <Link href="/characters"><a>Characters</a></Link>
                    <Link href="/world"><a>World</a></Link>
                </div>
            </Layout>
        )
    }
}
export default Overview
