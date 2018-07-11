import Countdown, { getTimeDifference } from 'react-countdown-now';

// Random component
const Completionist = () => <div className="countdown">Watch on Netflix today</div>;

// Renderer callback with condition
const renderer = ({ event, days, hours, minutes, seconds, completed }) => {

    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <div className="countdown">{event} {days} days, {hours} hours, {minutes} minutes, {seconds} seconds</div>;
    }
};

const CountBanner = (props) => (

    <Countdown
        date={props.date}
        renderer={renderer}
        event={props.event}
    />
)

export default CountBanner
