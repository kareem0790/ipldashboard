// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamLatest: [],
    teamRecent: [],
    teamBannerImage: '',
    isLoading: true,
  }

  componentDidMount() {
    this.gettingTeamMatches()
  }

  gettingTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const teamBannerImageUrl = data.team_banner_url
    const latestMatchArray = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpire: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const recentMatchesArray = data.recent_matches.map(eachRecentMatch => ({
      competingTeam: eachRecentMatch.competing_team,
      competingTeamLogo: eachRecentMatch.competing_team_logo,
      date: eachRecentMatch.date,
      firstInnings: eachRecentMatch.first_innings,
      id: eachRecentMatch.id,
      manOfTheMatch: eachRecentMatch.man_of_the_match,
      matchStatus: eachRecentMatch.match_status,
      result: eachRecentMatch.result,
      secondsInnings: eachRecentMatch.second_innings,
      umpire: eachRecentMatch.umpires,
      venue: eachRecentMatch.venue,
    }))

    this.setState({
      teamRecent: recentMatchesArray,
      teamLatest: latestMatchArray,
      teamBannerImage: teamBannerImageUrl,
      isLoading: false,
    })
  }

  gettingTeamMatchesDetails = () => {
    const {teamLatest, teamRecent, teamBannerImage} = this.state

    return (
      <div className="team-matches-bg-container">
        <img src={teamBannerImage} alt="team banner" className="banner-image" />
        <LatestMatch latestMatchDetails={teamLatest} key={teamLatest.id} />
        <ul className="recent-list-container">
          {teamRecent.map(eachRecent => (
            <MatchCard key={eachRecent.id} recentMatchDetails={eachRecent} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-bg-container ${id}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.gettingTeamMatchesDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
