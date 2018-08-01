import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout'
import CountBanner from '../components/Countdown'
import Link from 'next/link';
import Connect from '../components/Connect';
import Button from '../components/ui/Button'
const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

const fallback = '/static/fallback.jpg';

class Index extends Component {

    static async getInitialProps() {
        const posts = await client.getEntries({
            content_type: 'article',
            'fields.articleType[in]': 'Standard Article, Single Video, Gallery, Poll',
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
        if (!items) {
            return <div>Loading...</div>
        }

        return (
            <div className="container px-0">
                <div className="row grid-wrapper">
                    <Link prefetch href={`article?eid=${items[0].sys.id}`}>
                        <div className="card col-sm-12 col-md-8 col-12 hero-post large">
                            <img className="card-img img-fluid home-image-wrapper" style={{backgroundImage: `url('${ items[0].fields.heroImage ? items[0].fields.heroImage.fields.file.url + '?h=430&w=732&fit=fill' : fallback}')`}}  />
                            <div className="card-img-overlay post-content">
                                <span className={`article-icon ${items[0].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                                {items[0].fields.title}
                                {items[0].fields.summary}
                            </div>
                        </div>
                    </Link>

                    <div className="col-sm-12 col-md-4 col-12 special-column hero-item ml-auto">
                        <Link prefetch href={`article/?eid=${items[1].sys.id}`}>
                            <div className="card stackable row hero-post mb-4">
                                <img className="card-img img-fluid home-image-wrapper"  style={{backgroundImage: `url('${ items[1].fields.heroImage ? items[1].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback}')`}} />
                                <div className="card-img-overlay post-content">
                                    <span className={`article-icon ${items[1].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                                    {items[1].fields.title}
                                </div>
                            </div>
                        </Link>
                        <Link prefetch href={`article/?eid=${items[2].sys.id}`}>
                            <div className="card stackable row hero-post">
                                <img className="card-img img-fluid home-image-wrapper"  style={{backgroundImage: `url('${ items[2].fields.heroImage ? items[2].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback}')`}} />
                                <div className="card-img-overlay post-content">
                                    <span className={`article-icon ${items[2].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                                    {items[2].fields.title}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="row hero-row">
                    <Link prefetch href={`article/?eid=${items[3].sys.id}`}>
                        <div className="col-sm-12  col-md-4 col-12 hero-item hero-post">
                            <img className="card-img img-fluid home-image-wrapper"  style={{backgroundImage: `url('${ items[3].fields.heroImage ? items[3].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback}')`}} />
                            <div className="card-img-overlay post-content">
                                <span className={`article-icon ${items[3].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                                {items[3].fields.title}
                            </div>
                        </div>
                    </Link>
                    <Link prefetch href={`article/?eid=${items[4].sys.id}`}>
                        <div className="col-sm-12 col-md-4 col-12 hero-item hero-post">
                            <img className="card-img img-fluid home-image-wrapper"  style={{backgroundImage: `url('${ items[4].fields.heroImage ? items[4].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback}')`}} />
                            <div className="card-img-overlay post-content">
                                <span className={`article-icon ${items[4].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                                {items[4].fields.title}
                            </div>
                        </div>
                    </Link>
                    <Link prefetch href={`article/?eid=${items[5].sys.id}`}>
                        <div className="col-sm-12 col-md-4 col-12 hero-item hero-post">
                            <img className="card-img img-fluid home-image-wrapper"  style={{backgroundImage: `url('${ items[5].fields.heroImage ? items[5].fields.heroImage.fields.file.url + '?h=203&w=355&fit=fill' : fallback}')`}} />
                            <div className="card-img-overlay post-content">
                                <span className={`article-icon ${items[5].fields.articleType.split(' ').join('-').toLowerCase()}`}></span>
                                {items[5].fields.title}
                            </div>
                        </div>
                    </Link>
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
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <iframe width="100%" height="340"
                                src={`${video.fields.youTubeVideo}?rel=0&showinfo=0`} frameBorder="0">
                            </iframe>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h2>{about.fields.title}</h2>
                            <p>LONG AGO... Xadia was one land, rich in magic and wonder.</p>
                            <p>But a thousand years ago, humans (who are born without innate magical powers) discovered that by harvesting magical creatures, they could use Dark Magic.</p>
                            <p>Horrified by what they saw, the dragons and elves drove all the humans out of Xadia and into the west. And so the continent was divided in two. For centuries, the human kingdoms and Xadia were divided. The king of the dragons, Thunder, defended the border.</p>
                            <p>But a few months ago, a human wizard tricked and killed Thunder, leaving the border unguarded.</p>
                            <p>Now, the world stands on the brink of all-out war...</p>
                            <div className="about__button-list">
                                <Button link="/world" text="World" size="large" />
                                <Button link="/characters" text="Characters" size="large" />
                                <Button link="/overview" text="Lore" size="large" />
                            </div>
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
