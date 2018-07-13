import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import StandardArticle from '../components/articles/StandardArticle'
import GalleryArticle from '../components/articles/GalleryArticle'
import VideoArticle from '../components/articles/VideoArticle'
import DefaultArticle from '../components/articles/DefaultArticle'

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Article extends Component {
    // TODO: Set up query and check what type of article it is to send them to correct Article body
    static async getInitialProps({ query }) {
        const post = await client.getEntry(query.eid);

        // Using for dev forcing article type
        // const post = await client.getEntry('54mbiCtZ0k0WKaiW6AGGIW') // article
        // const post = await client.getEntry('5IjYjSna7eGmQ0sKMouAGa') // gallery
        // const post = await client.getEntry('2Y0bGanLnGYMKUocyMUA88') // video
    
        return {
            post
        }
    }

    articleRouter = (post) => {
        let view;

        switch(post.fields.articleType) {
            case 'Standard Article':
                view = <StandardArticle post={post} />
                break;
            case 'Gallery':
                view = <GalleryArticle post={post} />
                break;
            case 'Single Video':
                view = <VideoArticle post={post} />
                break;
            default:
                view = <DefaultArticle post={post} />
                break;
        }

        return view;
    }

    render() {
        const { post } = this.props;
        
        console.log(post)
        return (
            <Layout>
                <div className="container article-container">
                    <h3 className="subtitle">News Feed</h3>
                    {this.articleRouter(post)}
                </div>
            </Layout>
        )
    }
}
export default Article
