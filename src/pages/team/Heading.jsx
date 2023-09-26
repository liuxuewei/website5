import { Text } from './../../containers/Languages';

const Heading = () => {
    return (
        <div className="heading">
            <h1 className="fw-bold"><Text tid="team.heading.title" /> <span className="red-word"><Text tid="team.heading.span" /></span></h1>
            <p className="grey fw-medium pt-2"><Text tid="team.heading.description" /></p>
        </div>
    )
}

export default Heading;