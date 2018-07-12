import React, { Component } from 'react'
import { createClient } from 'contentful'
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';
import Lightbox from 'react-images';
import moment from 'moment';
import SocialLinks from '../ui/SocialLinks'
import Link from 'next/link';


const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Video extends Component {
    constructor () {
        super()
        this.state = {
            video: null,
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const video = await client.getEntry(this.props.post.fields.videos["0"].sys.id); // video
        this.setState({
            video
        })
    }


    render() {
        const { post } = this.props;
        
        console.log(post)
        return (
            <div>
                <div className="standard-article-title">
                    <h1>{post.fields.title}</h1>
                    <SocialLinks/>
                </div>
                <div className="video-article-hero">
                    {this.state.video !== null ? (
                        <iframe width="100%" 
                            height="100%"
                            src={this.state.video.fields.youTubeVideo} 
                            frameBorder="0">
                        </iframe>
                    ) : null }
                </div>
                <div className="article">
                    <p>{moment(post.sys.createdAt).format("MMMM Do YYYY")}</p>
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
export default Video
