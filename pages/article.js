import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import StandardArticle from '../components/StandardArticle'
import GalleryArticle from '../components/GalleryArticle'
import VideoArticle from '../components/VideoArticle'

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Article extends Component {
    // TODO: Set up query and check what type of article it is to send them to correct Article body
    static async getInitialProps({ query }) {
        // const post = await client.getEntry(query.eid);
        const post = await client.getEntry('54mbiCtZ0k0WKaiW6AGGIW') // article
        // const post = await client.getEntry('5IjYjSna7eGmQ0sKMouAGa') // gallery
        // const post = await client.getEntry('2Y0bGanLnGYMKUocyMUA88') // video
        
        const hero = await client.getAsset(post.fields.heroImage.sys.id);
        const authors = await client.getEntry(post.fields.author[0].sys.id) // article
        // const hero = null,
            //   authors = null;

        return {
            post,
            hero,
            authors
        }
    }

    render() {
        const { post, hero, authors} = this.props;
        
        return (
            <Layout>
                <div className="container article-container">
                    <h6>News feed</h6>
                    {/* TODO: Set up router for diffirent article component */}
                    <StandardArticle post={post} hero={hero} authors={authors} />
                    {/* <GalleryArticle post={post} hero={hero} authors={authors} /> */}
                    {/* <VideoArticle post={post} /> */}
                </div>
            </Layout>
        )
    }
}
export default Article
