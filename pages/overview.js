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

    title = 'Story Overview';

    static async getInitialProps() {
        // Get static About
        const about = await client.getEntry('2Y0bGanLnGYMKUocyMUA88'); // about
        return {
            about
        }
    }

    render() {
        // console.log(this.props.about)
        return (
            <Layout>
                <div className="container pt-4">
                    <h3 className="subtitle">Story & Lore</h3>
                    <h1 className="page-title">{this.title}</h1>
                    <p>{renderHTML(markdown.toHTML(this.props.about.fields.body))}</p>
                    <div class="row">
                        <div class="col-sm-6">
                            <div className="card text-white bg-dark mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Characters</h5>
                                    <Link href="/characters"><a href="#" className="btn btn-primary">Meet the Characters</a></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div className="card text-white bg-dark mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">World</h5>
                                    <Link href="/world"><a href="#" className="btn btn-primary">Explore the World</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout >
        )
    }
}
export default Overview
