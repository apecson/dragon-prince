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

const fallback = '//images.ctfassets.net/sykm2zb64bkw/3hRcpuODd6S8uGOicqKoGI/39267d207cc393734d6a30ac0c890c93/moonshadowForm.png';

class Index extends Component {

    static async getInitialProps() {
        const posts = await client.getEntries({
            content_type: 'article',
            // 'fields.articleType[in]': 'Standard Article, Single Video, Gallery, Poll',
            'fields.includeInFeed': 'true',
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
                <div className="row mb-4">
                    <div className="col-8 hero-post large">
                        <div className="post-image">
                            <img className="img-fluid" src={items[0].fields.heroImage ? items[0].fields.heroImage.fields.file.url + '?h=430&w=732&fit=fill' : fallback} />
                        </div>
                        <div className="post-content">
                            <span class={`article-icon ${items[0].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                            {items[0].fields.title}
                            {items[0].fields.summary}
                        </div>
                    </div>
                    <div className="col-4 hero-item ml-auto">
                        <div className="row hero-post mb-4">
                            <div className="post-image">
                                <img className="img-fluid" src={items[1].fields.heroImage ? items[1].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback} />
                            </div>
                            <div className="post-content">
                                <span class={`article-icon ${items[1].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                                {items[1].fields.title}
                            </div>
                        </div>
                        <div className="row hero-post">
                            <div className="post-image">
                                <img className="img-fluid" src={items[2].fields.heroImage ? items[2].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback} />
                            </div>
                            <div className="post-content">
                                <span class={`article-icon ${items[2].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                                {items[2].fields.title}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row hero-row">
                    <div className="col hero-item hero-post">
                        <div className="post-image">
                            <img className="img-fluid" src={items[3].fields.heroImage ? items[3].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback} />
                        </div>
                        <div className="post-content">
                            <span class={`article-icon ${items[3].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                            {items[3].fields.title}

                        </div>
                    </div>
                    <div className="col hero-item hero-post">
                        <div className="post-image">
                            <img className="img-fluid" src={items[4].fields.heroImage ? items[4].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback} />
                        </div>
                        <div className="post-content">
                            <span class={`article-icon ${items[4].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                            {items[4].fields.title}

                        </div>
                    </div>
                    <div className="col hero-item hero-post">
                        <div className="post-image">
                            <img className="img-fluid" src={items[5].fields.heroImage ? items[5].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback} />
                        </div>
                        <div className="post-content">
                            <span class={`article-icon ${items[5].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
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
                <div className="home__about-inner container">
                    <div className="home__about-child home__about-left">
                        <iframe width="557" height="340"
                            src={video.fields.youTubeVideo} frameBorder="0">
                        </iframe>
                    </div>
                    <div className="home__about-child home__about-right">
                        <h2>{about.fields.title}</h2>
                        <p>{about.fields.summary}</p>
                        <div className="about__button-list">
                            <Link href="explore">
                                <button type="button" className="btn btn-primary">Explore The World</button>
                            </Link>
                            <Link href="characters">
                                <button type="button" className="btn btn-primary">Meet The Characters</button>
                            </Link>
                            <Link href="/story-lore">
                                <button type="button" className="btn btn-primary">Discover The Lore</button>
                            </Link>
                        </div>
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
                    <div className="container mt-4 pb-4">
                        <h1 className="page-title">The Latest</h1>
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
