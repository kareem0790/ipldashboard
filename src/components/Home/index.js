// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamCardData: [],
  }

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamCardData: updatedData, isLoading: false})
  }

  teamCardsDetails = () => {
    const {teamCardData} = this.state

    return (
      <div className="home-bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="logo-title">IPL Dashboard</h1>
        </div>
        <ul className="team-card-list-container">
          {teamCardData.map(eachItem => (
            <TeamCard key={eachItem.id} cardDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  renderloader = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-bg-container">
        {isLoading ? this.renderloader() : this.teamCardsDetails()}
      </div>
    )
  }
}

export default Home
