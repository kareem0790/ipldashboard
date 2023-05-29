// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    venue,
    umpire,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="opposite-team-innings">
          <div>
            <p className="opposite-team-name">{competingTeam}</p>
            <p className="team-match-date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="opposite-team-logo"
          />
        </div>
        <hr className="line" />
        <div className="opposite-team-details">
          <h1 className="first-innings-heading">First Innings</h1>
          <p className="first-innings-result">{firstInnings}</p>
          <h1 className="second-innings-heading">Second Innings</h1>
          <p className="second-innings-result">{secondInnings}</p>
          <h1 className="man-of-the-match-heading">Man Of The Match</h1>
          <p className="man-of-the-match-result">{manOfTheMatch}</p>
          <p className="umpire-heading">Umpires</p>
          <p className="umpire-result">{umpire}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
