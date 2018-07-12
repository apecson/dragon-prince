import React, { Component } from 'react'
import { createClient } from 'contentful'
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';
import Lightbox from 'react-images';
import moment from 'moment';
import SocialLinks from '../components/SocialLinks'
import Link from 'next/link'

const client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Gallery extends Component {
    constructor () {
        super()
        this.state = {
            images: null,
            open: false
        }
    }

    componentDidMount() {
        this.getPhotos();
    }
    
    getPhotos = () => {
        const self = this;
        let ids = this.props.post.fields.photos;

        var promises = ids.map(photo => {
            return client.getAsset(photo.sys.id).then((res) => {
                return res
            })
        })

        Promise.all(promises).then((images) => {
            self.setState({
                images
            })
        })
    }
    getDivs = () => {
        const { images } = this.state;
        return images.map(image => <img key={image.sys.id} style={{backgroundImage: `url(${image.fields.file.url})`}} /> );
    }

    render() {
        const { post, hero, authors} = this.props;

        return (
            <div>
              <div className="standard-article-title">
                    <h1>{post.fields.title}</h1>
                    <SocialLinks/>
                </div>
                <div className="standard-article-hero">
                    {/* TODO: SET HERO on Gallery */}
                    {/* <img src={hero.file.url} /> */}
                </div>
                <div className="article">
                    <p>{moment(post.sys.createdAt).format("MMMM Do YYYY")}</p>
                </div>

                <div className="character-body">
                    {renderHTML(markdown.toHTML(post.fields.body))}
                </div>

                <div className="gallery-article-gallery">
                    {this.state.images !== null ? this.getDivs() : null}
                </div>

                {/* <Lightbox key={image.sys.id} images={[{ src: image.fields.file.url }, { src: image.fields.file.url }]} isOpen={this.state.open} onClose={() => {this.setState({open: false})}} /> */}
                <Link href="/newsfeed">
                    <a className="more-newsfeed">More Newsfeed</a>
                </Link>
            </div>
        )
    }
}
export default Gallery
