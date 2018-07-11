import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Newsfeed extends Component {


    static async getInitialProps() {
        // Get Newsfeed Articles
        const pinned = await client.getEntries({
            'fields.articleType': 'Standard Article',
            'fields.isPinned': true,
            'content_type': 'article',
            order: 'sys.createdAt',
            limit: 2

        });
        const articles = await client.getEntries({
            'fields.articleType': 'Standard Article',
            'content_type': 'article',
            order: 'sys.createdAt'
        });
        console.log(articles);
        return {
            pinned,
            articles
        }
    }

    renderPinned() {
        console.log(this.props.pinned);
        if (!this.props.pinned.items) {
            return <div>Loading...</div>
        }
        return _.map(this.props.pinned.items, (article, index) => {
            return (
                <Link key={article.sys.id} href={`/article?eid=${article.sys.id}`}>
                    <li className={`article-thumb article-${index}`}>
                        <div className="article-image-container">
                            {/* {article.fields.heroImage.fields.file.url ? 'exists' : 'doesnt'} */}
                            {/* <img className="article-image" alt={article.fields.title} src={article.fields.heroImage.fields.file.url ? article.fields.heroImage.fields.file.url : null} /> */}
                        </div>
                        <div className="article-content">
                            <h3>{article.fields.title}</h3>
                            <p>{article.fields.summary}</p>
                        </div>
                    </li>
                </Link>
            )
        });
    }

    renderArticles() {

        if (!this.props.articles.items) {
            return <div>No articles to show</div>
        }
        return _.map(this.props.articles.items, (article, index) => {
            return (
                <Link key={article.sys.id} href={`/article?eid=${article.sys.id}`}>
                    <li className={`article-thumb article-${index}`}>
                        <div className="article-image-container">
                            {/* <img className="article-image" alt={article.fields.title} src={article.fields.heroImage.fields.file.url ? article.fields.heroImage.fields.file.url : null} /> */}
                        </div>
                        <div className="article-content">
                            <h3>{article.fields.title}</h3>
                            <p>{article.fields.summary}</p>
                        </div>
                    </li>
                </Link>
            )
        });
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <h3>Newsfeed</h3>
                    {this.renderPinned()}
                    <ul>
                        {this.renderArticles()}
                    </ul>
                </div>
            </Layout>
        )
    }
}
export default Newsfeed
