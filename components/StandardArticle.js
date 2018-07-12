import React, { Component } from 'react'
// import { createClient } from 'contentful'
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';
import moment from 'moment';
// import Layout from '../components/MyLayout';
import SocialLinks from '../components/SocialLinks'
import Link from 'next/link'

class Standard extends Component {

    // static async getInitialProps({ query }) {
    //     // const post = await client.getEntry(query.eid);
    //     const post = await client.getEntry('54mbiCtZ0k0WKaiW6AGGIW') // article
    //     const hero = await client.getAsset(post.fields.heroImage.sys.id)
    //     const authors = await client.getEntry(post.fields.author[0].sys.id) // article

    //     return {
    //         post,
    //         hero,
    //         authors
    //     }
    // }

    render() {
        const { post, hero, authors} = this.props;
        console.log(this.props)

        return (
            <div>
                <div className="standard-article-title">
                    <h1>{post.fields.title}</h1>
                    <SocialLinks/>
                </div>
                <div className="standard-article-hero">
                    <img src={hero.fields.file.url} />
                </div>
                <div className="standard-article-credit">
                    <span>{post.fields.heroImageCaption}</span>
                    <span>{post.fields.heroImageCredit}</span>
                </div>
                <div className="standard-article-author">
                    <span>{authors.fields.title}</span>
                    <span>{moment(post.sys.createdAt).format("MMMM Do YYYY")}</span>
                </div>
    
                <div className="character-body">
                    {renderHTML(markdown.toHTML(post.fields.body))}
                </div>

                <Link href="/newsfeed">
                    <a className="more-newsfeed">More Newsfeed</a>
                </Link>
            </div>
        )
    }
}
export default Standard
