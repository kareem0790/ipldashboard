// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails

  return (
    <Link to={`/team-matches/${id}`} className="list-container">
      <img src={teamImageUrl} alt={name} className="list-team-image" />
      <p className="list-team">{name}</p>
    </Link>
  )
}

export default TeamCard
