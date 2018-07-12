import React, { Component } from 'react'
import { createClient } from 'contentful'
import Layout from '../components/MyLayout';
import Link from 'next/link';
import _ from 'lodash';
import moment from 'moment';
import MeetTeam from '../components/ui/MeetTeam'

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class BTS extends Component {

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
            'fields.section': 'UpdatesAndVideos',
            'content_type': 'article',
            order: 'sys.createdAt'
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
                imgUrl = '//images.ctfassets.net/sykm2zb64bkw/3hRcpuODd6S8uGOicqKoGI/39267d207cc393734d6a30ac0c890c93/moonshadowForm.png';
            }
            return (
                <Link key={article.sys.id} href={`/article?eid=${article.sys.id}`}>
                    <li className={`col-6 card text-white bg-transparent article-thumb pinned article-${index}`}>
                        <img className="card-img article-image" height="300" alt={article.fields.title} src={imgUrl} />
                        <div className="card-img-overlay article-content--pinned article-content">
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
            let imgUrl = '';
            if (article.fields.heroImage) {
                imgUrl = `${article.fields.heroImage.fields.file.url}?h=190&w=340&fit=fill`;
            }
            else {
                imgUrl = '//images.ctfassets.net/sykm2zb64bkw/3hRcpuODd6S8uGOicqKoGI/39267d207cc393734d6a30ac0c890c93/moonshadowForm.png';
            }
            return (
                <Link key={article.sys.id} href={`/article?eid=${article.sys.id}`}>
                    <li className={`article-thumb media article-${index}`}>
                        <div className="media-left mr-4 mb-4 article-image-container">
                            <img className="media-object article-image" alt={article.fields.title} width="360" height="200" src={imgUrl} />
                        </div>
                        <div className="media-body article-content">
                            <h3 className="media-heading">{article.fields.title}</h3>
                            <span>{moment(article.sys.updatedAt).format("MMMM Do YYYY")}</span>
                            <p>{article.fields.summary}</p>
                        </div>
                    </li>
                </Link>
            )
        });
    }

    render() {
        const { pinned, articles } = this.props;

        console.log(articles)
        return (
            <Layout>
                <div className="container article-container">
                    <h1 className="page-title">Behind The Scenes</h1>
                    <section className="row mb-4">
                        {this.renderPinned()}
                    </section>
                </div>
                <MeetTeam />
                <div className="container article-container">
                    <hr />
                    <section>
                        {this.renderArticles()}
                    </section>
                </div>
            </Layout>
        )
    }
}
export default BTS
