// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = recentMatchDetails

  const matchStatusColor = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="match-card-list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-image"
      />
      <p className="match-card-competing-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-status ${matchStatusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
