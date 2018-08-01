import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import { createClient } from 'contentful'
import React, { Component } from 'react'
import { markdown } from 'markdown';
import renderHTML from 'react-render-html';
import ShareBlock from '../components/ui/ShareBlock'

let client = createClient({
    space: "sykm2zb64bkw",
    accessToken: "9424211d562951847401a3cbf1ab7bd6c266a6b20c7b68f7500e8b1de8fc1e14"
});

class Character extends Component {
    constructor () {
        super()
        this.state = {
            hero: null,
            images: null
        }
    }

    static async getInitialProps({ query }) {
        const character = await client.getEntry(query.eid);

        return {
            character
        }
    }

    componentDidMount() {
        this.getData();
        this.getPhotoUrl();
    }
    
    async getData() {
        const hero = await client.getAsset(this.props.character.fields.heroImage.sys.id);

        this.setState({
            hero
        })
    }

    getPhotoUrl = (character) => {
        const self = this;
        // let ids = this.props.post.fields.photos || [];
        // console.log(character)
        // var promises = ids.map(photo => {
        //     return client.getAsset(photo.sys.id).then((res) => {
        //         return res
        //     })
        // })

        // Promise.all(promises).then((images) => {
        //     self.setState({
        //         images
        //     })
        // })
    }
    getImg = () => {

        const { images } = this.state;

        if (images.length > 0) {
            return images.map(image => <figure key={image.sys.id}  alt={image.fields.title} style={{backgroundImage: `url(${image.fields.file.url}?h=320&w=480&fit=fill)`}} /> );
        } else {
            return null
        }
    }

    render() {
        const { character } = this.props,
              { hero, images } = this.state;
        if (!character) {
            return <div>Loading...</div>
        }
        return (
            <Layout>
                <div className="container mt-4">
                    <h3 className="subtitle mb-0">Characters</h3>
                    <div className="standard-article-title">
                        <h1>{character.fields.title ? character.fields.title : null}</h1>
                        <ShareBlock/>
                    </div>
                    <img className="character-hero" src={hero ? hero.fields.file.url : ''} alt={character.fields.title} />
                    <div className="character-body">
                        {renderHTML(markdown.toHTML(character.fields.body))}
                    </div>
                    <div className="gallery-article-gallery">
                        {this.state.images ? this.getImg() : null}
                    </div>
                </div>
            </Layout>
        )
    }
}


export default Character
