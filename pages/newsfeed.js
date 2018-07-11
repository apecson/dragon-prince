import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

const fallback = '//images.ctfassets.net/sykm2zb64bkw/3hRcpuODd6S8uGOicqKoGI/39267d207cc393734d6a30ac0c890c93/moonshadowForm.png';

class Newsfeed extends Component {

    static async getInitialProps() {
        // Get Newsfeed Articles
        const pinned = await client.getEntries({
            'fields.articleType[in]': 'Standard Article, Single Video, Gallery, Poll',
            'fields.isPinned': 'true',
            'content_type': 'article',
            order: 'sys.createdAt',
            limit: 2

        });
        const articles = await client.getEntries({
            'fields.articleType[in]': 'Standard Article, Single Video, Gallery, Poll',
            'content_type': 'article',
            order: 'sys.createdAt'
        });
        console.log(pinned);
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
                    <li className={`card bg-dark text-white article-thumb pinned article-${index}`}>
                        <img className="card-img article-image" alt={article.fields.title} src={article.fields.heroImage ? article.fields.heroImage.fields.file.url : fallback} />
                        <div className="card-img-overlay article-content">
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
                    <li className={`article-thumb media article-${index}`}>
                        <div className="media-left mr-4 mb-4 article-image-container">
                            <img className="media-object article-image" alt={article.fields.title} width="360" height="200" src={article.fields.heroImage ? article.fields.heroImage.fields.file.url : fallback} />
                        </div>
                        <div className="media-body article-content">
                            <h3 className="media-heading">{article.fields.title}</h3>
                            {/* {article.sys.updatedAt} */}
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
                <div className="container pt-4 pb-4">
                    <h3>News Feed</h3>
                    <ul className="list-unstyled">
                        {this.renderPinned()}
                    </ul>
                    <ul className="list-unstyled">
                        {this.renderArticles()}
                    </ul>
                </div>
            </Layout>
        )
    }
}
export default Newsfeed
