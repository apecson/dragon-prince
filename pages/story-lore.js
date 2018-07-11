import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';


const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class StoryLore extends Component {

    static async getInitialProps() {
        // Get static About and Video content
        const about = await client.getEntry('2Y0bGanLnGYMKUocyMUA88');
        const video = await client.getEntry('5w382WBzbO2yowQaIeImaE');
        return {
            about,
            video
        }
    }

    render() {
        return (
            <Layout>
                <div class="container">
                    <h3>Story & Lore</h3>

                </div>
            </Layout>
        )
    }
}
export default StoryLore
