import React, { Component } from 'react'
import Layout from '../components/MyLayout';

class CreativeTeam extends Component {

    render() {
        return (
            <Layout>
                <div className="container article-container">
                    <h3 className="subtitle">Behind The Scenes</h3>
                    <h1 className="page-title">Creative Team</h1>
                    <section className="creative-wrapper">
                        <article className="row creative-member">
                            <div className="col-12 col-md-3">
                                <img className="creative-image image-fluid" alt="AARON  EHASZ" src="/static/creative/aaron.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">AARON EHASZ</h3>
                                <span>EXECUTIVE PRODUCER -- WONDERSTORM</span>
                                <p>From Uncharted and League of Legends to becoming The Dragon Prince, Justin helps make things awesome. His goal as Executive Producer at Wonderstorm is to tell great stories that are accessible to any audience without “dumbing it down.”He’s inspired by great fantasies and sci-fi epics, but also by taking hikes, traveling to new places, and hanging out with his family and seeing what they love. Justin is a huge gamer and loves playing board-games and video-games. He plays EVERYTHING... except sports games. His favorite game of all time is The Legend of Zelda: Ocarina of Time.</p>
                            </div>
                        </article>
                        
                        <article className="row creative-member">
                            <div className="col-12 col-md-3">
                                <img className="creative-image" alt="JUSTIN RICHMOND" src="/static/creative/justin.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">JUSTIN RICHMOND</h3>
                                <span>EXECUTIVE PRODUCER -- WONDERSTORM</span>
                                <p>From Uncharted and League of Legends to becoming The Dragon Prince, Justin helps make things awesome. His goal as Executive Producer at Wonderstorm is to tell great stories that are accessible to any audience without “dumbing it down.”He’s inspired by great fantasies and sci-fi epics, but also by taking hikes, traveling to new places, and hanging out with his family and seeing what they love.  Justin is a huge gamer and loves playing board-games and video-games. He plays EVERYTHING... except sports games. His favorite game of all time is The Legend of Zelda: Ocarina of Time.</p>
                            </div>
                        </article>

                        <article className="row creative-member">
                            <div className="col-12 col-md-3">
                                <img className="creative-image" alt="GIANCARLO VOLPE" src="/static/creative/giancarlo.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">GIANCARLO VOLPE</h3>
                                <span>EXECUTIVE PRODUCER -- WONDERSTORM</span>
                                <p>A veteran from the Avatar: The Last Airbender team, Giancarlo is now the Showrunner for The Dragon Prince at Wonderstorm. He has not only developed the visual storytelling style for the series, but has also been a part of voice directing, editing, design, and more. He’s inspired by blurring the lines between animation and live action. Outside of work, Giancarlo plays video-games -- especially Overwatch, which consumes most of his life. He loves eating pizza and pasta, and when he sweats, olive oil comes out of his pores, because he loves living up to the stereotypes of his people.</p>
                            </div>
                        </article>
                        
                        <article className="row creative-member">
                            <div className="col-12 col-md-3">
                                <img className="creative-image" alt="EDISON YAN" src="/static/creative/edison.PNG" />
                            </div>
                            <div className="col-12 col-md-9">
                                <h3 className="media-heading">EDISON YAN</h3>
                                <span>ART DIRECTOR -- BARDEL ENTERTAINMENT</span>
                                <p>As Art Director for The Dragon Prince at Bardel, Edison helps create the visuals for the whole show. This means taking a script and working with artists of all specialties to bring it to the screen. He’s inspired by all his coworker artists, artists from cyberspace, Ghibli movies, and soundtracks from his favorite movies, video-games, and anime.  Edison’s free time is taken up by drawing and painting, watching videos on Netflix and YouTube, and playing with his dogs. He also plays video-games, and has recently re-played his favorite game of all time, Final Fantasy VI.</p>
                            </div>
                        </article>
                    </section>
                </div>
            </Layout>
        )
    }
}
export default CreativeTeam
