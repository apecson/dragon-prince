
import Button from './Button'

const MeetTeam = (props) => (
    <section className="section-meet">
        <div className="container article-container">
            <h3>Meet the Team</h3>
            <div className="col-12 meet-wrapper">
                <img className="" src="" alt=""/>
                <img className="" src="" alt=""/>
                <div className="" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit 
                        amet lacus accumsan et viverra justo commodo. Proin sodales 
                        pulvinar sic tempor. Sociis natoque penatibus et magnis dis 
                        parturient montes, nascetur ridiculus mus. Nam fermentum, 
                        nulla luctus pharetra vulputate, felis tellus mollis orci, 
                        sed rhoncus pronin sapien nunc accuan eget.
                    </p>
                    <div className="meet-links" >
                        <a href="/creative-team">
                            <Button text="Creative Team" size="large" />
                        </a>
                        <a href="/cast">
                            <Button text="Cast" size="large" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default MeetTeam
