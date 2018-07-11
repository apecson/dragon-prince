import React, { Component } from 'react'
import { createClient } from 'contentful'
import _ from 'lodash';
import Layout from '../components/MyLayout'
import CountBanner from '../components/Countdown'
import Link from 'next/link';
import Connect from '../components/Connect';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Index extends Component {

    static async getInitialProps() {
        const posts = await client.getEntries({
            content_type: 'article',
            'fields.articleType[in]': 'Standard Article, Single Video, Gallery, Poll',
            limit: 6,
            order: 'sys.createdAt'
        });
        // Get static About and Video content
        const about = await client.getEntry('2Y0bGanLnGYMKUocyMUA88'); // about
        const video = await client.getEntry('5w382WBzbO2yowQaIeImaE'); // video
        const countdown = await client.getEntry('6e0O82QvFSU04akAUaQkWu'); //countdown
        return {
            posts,
            about,
            video,
            countdown,
        }
    }

    renderPosts() {

        const { items } = this.props.posts;
        console.log(items)
        if (!items) {
            return <div>Loading...</div>
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col hero-post large">
                        <div className="post-image">
                            <img src={items[0].fields ? items[0].fields.photos[0].fields.file.url : null} />
                        </div>
                        <div className="post-content">
                            {items[0].fields.title}
                            {items[0].fields.summary}
                        </div>
                    </div>
                    <div className="col ml-auto">
                        <div className="row hero-post">
                            <div className="post-image">
                                {/* <img src={items[1].fields.photos[0].fields.file.url} /> */}
                            </div>
                            <div className="post-content">
                                {items[1].fields.title}
                            </div>
                        </div>
                        <div className="row hero-post">
                            <div className="post-image">
                                {/* <img src={items[2].fields.photos[0].fields.file.url} /> */}
                            </div>
                            <div className="post-content">
                                {items[2].fields.title}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col hero-post">
                        <div className="post-image">
                            {/* <img src={items[0].fields.photos[0].fields.file.url} /> */}
                        </div>
                        <div className="post-content">
                            {items[3].fields.title}

                        </div>
                    </div>
                    <div className="col hero-post">
                        <div className="post-image">
                            {/* <img src={items[0].fields.photos[0].fields.file.url} /> */}
                        </div>
                        <div className="post-content">
                            {items[4].fields.title}

                        </div>
                    </div>
                    <div className="col hero-post">
                        <div className="post-image">
                            {/* <img src={items[0].fields.photos[0].fields.file.url} /> */}
                        </div>
                        <div className="post-content">
                            {items[5].fields.title}

                        </div>
                    </div>
                </div>
            </div>
        )
        // return _.map(this.props.posts.items, (post, index) => {
        //     return (
        //         <li key={post.sys.id} className={`post-thumb post-${index}`}>
        //             <div className="post-image">

        //             </div>
        //             <div className="post-content">
        //                 <h3>{post.fields.title}</h3>
        //                 <p>{post.fields.summary}</p>
        //             </div>
        //         </li>
        //     )
        // });
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
                        <p>{about.fields.summary}</p>
                        <Link href="explore">
                            <button className="btn btn-primary">Explore The World</button>
                        </Link>
                        <Link href="characters">
                            <button className="btn btn-primary">Meet The Characters</button>
                        </Link>
                        <Link href="/story-lore">
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
                    <CountBanner date={this.props.countdown.fields.targetDate} event={this.props.countdown.fields.body} />
                    <div className="container mt-1 pb-4">
                        <h2>The Latest</h2>
                        {this.renderPosts()}
                    </div>
                    {this.renderAbout()}
                    <Connect />
                </Layout>
            </div>
        )
    }
}
export default Index
