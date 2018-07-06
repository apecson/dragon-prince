import React, { Component } from 'react'
import { createClient } from 'contentful'
import _ from 'lodash';
import Layout from '../components/MyLayout'
import Countdown from '../components/Countdown'
import Link from 'next/link';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Index extends Component {

    static async getInitialProps() {
        const posts = await client.getEntries({
            limit: 6,
            order: 'sys.createdAt'
        });
        // Get static About and Video content
        const about = await client.getEntry('2Y0bGanLnGYMKUocyMUA88');
        const video = await client.getEntry('5w382WBzbO2yowQaIeImaE');
        return {
            posts,
            about,
            video
        }
    }

    renderPosts() {
        return _.map(this.props.posts.items, (post, index) => {
            console.log(post);
            return (
                <li key={post.sys.id} className={`post-thumb post-${index}`}>
                    <div className="post-image">

                    </div>
                    <div className="post-content">
                        <h3>{post.fields.title}</h3>
                        <p>{post.fields.summary}</p>
                    </div>
                </li>
            )
        });
    }

    renderAbout() {
        const { about, video } = this.props;

        return (
            <section className="home__about">
                <div className="home__about-inner">
                    <div className="home__about-child home__about-left">
                        <iframe width="557" height="340"
                            src={video.fields.youTubeVideo} frameBorder="0">
                        </iframe>
                    </div>
                    <div className="home__about-child home__about-right">
                        <h2>{about.fields.title}</h2>
                        <p>{about.fields.body}</p>
                        <Link>
                            <button className="btn btn-primary">Explore The World</button>
                        </Link>
                        <Link>
                            <button className="btn btn-primary">Meet The Characters</button>
                        </Link>
                        <Link>
                            <button className="btn btn-primary">Discover The Lore</button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    render() {
        const { posts } = this.props;
        if (!posts) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Layout>
                    <Countdown />
                    <div class="container">
                        <h2>The Latest</h2>
                        <ul>
                            {this.renderPosts()}
                        </ul>
                    </div>
                    {this.renderAbout()}

                </Layout>
            </div>
        )
    }
}
export default Index
