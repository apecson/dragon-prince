import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import _ from 'lodash';
import Link from 'next/link';

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

const fallback = '/static/fallback.jpg';

class Newsfeed extends Component {

    title = 'News Feed';

    static async getInitialProps() {
        // Get Newsfeed Articles
        const pinned = await client.getEntries({
            'fields.articleType[in]': 'Standard Article, Single Video, Gallery, Poll',
            'fields.isPinned': 'true',
            'content_type': 'article',
            order: 'fields.releaseDate',
            limit: 2
        });

        const articles = await client.getEntries({
            'fields.articleType[in]': 'Standard Article, Single Video, Gallery, Poll',
            'content_type': 'article',
            order: 'fields.releaseDate'
        });

        return {
            pinned,
            articles
        }
    }

    renderPinned() {
        if (!this.props.pinned.items) {
            return <div>Loading...</div>
        }
        return _.map(this.props.pinned.items, (article, index) => {
            let imgUrl = '';
            if (article.fields.heroImage) {
                imgUrl = `${article.fields.heroImage.fields.file.url}?h=300&w=538&fit=fill`;
            }
            else {
                imgUrl = fallback;
            }
            return (
                <Link key={article.sys.id} href={`/article?eid=${article.sys.id}`}>
                    <li className={`col-sm-12 col-md-6 mb-4 card text-white bg-transparent article-thumb pinned article-${index}`}>
                        <img className="card-img article-image image-wrapper" height="300" style={{backgroundImage: `url('${imgUrl}')`}}  />
                        <div className="card-img-overlay article-content--pinned article-content">

                            <h3>{article.fields.title}</h3>
                            <p>{article.fields.summary}</p>
                            <span class="article-icon quiz"></span>

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
            let imgUrl = '';
            if (article.fields.heroImage) {
                imgUrl = `${article.fields.heroImage.fields.file.url}?h=190&w=340&fit=fill`;
            }
            else {
                imgUrl = fallback;
            }
            return (
                <Link key={article.sys.id} href={`/article?eid=${article.sys.id}`}>
                    <article className="row bts-article">
                        <div className="col-12 col-md-4 mb-2">
                            <img className="media-object article-image image-wrapper" width="360" height="200" style={{backgroundImage: `url('${imgUrl}')`}} />
                            <span class="newsfeed-icon"></span>
                        </div>
                        <div className="col-12 col-md-8">
                            <h3 className="media-heading">{article.fields.title}</h3>
                            {/* {article.sys.updatedAt} */}
                            <p>{article.fields.summary}</p>
                        </div>
                    </article>
                </Link>
            )
        });
    }

    render() {
        return (
            <Layout>
                <div className="container pt-4 pb-4">
                    <h1 className="page-title">{this.title}</h1>
                    <ul className="list-unstyled row mb-5">
                        {this.renderPinned()}
                    </ul>
                    <ul className="list-unstyled article-feed-list">
                        {this.renderArticles()}
                    </ul>
                </div>
            </Layout>
        )
    }
}
export default Newsfeed
