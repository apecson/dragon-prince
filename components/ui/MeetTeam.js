import Link from 'next/link';

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
                    <Link href="/creative-team">
                        <button>CREATIVE TEAM</button>
                    </Link>
                    <Link href="/cast">
                        <button>CAST</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
)

export default MeetTeam
