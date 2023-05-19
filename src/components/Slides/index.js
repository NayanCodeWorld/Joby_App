import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'
import Slide from '../Slide'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class Slides extends Component {
  state = {
    slideList: initialSlidesList,
    activeSlide: initialSlidesList[0],
  }

  onAddSlide = () => {
    const {slideList, activeSlide} = this.state
    console.log(activeSlide)
    const domyObj = {
      heading: 'Heading',
      description: 'Description',
      id: v4(),
    }
    const activeIndex = slideList.findIndex(each => each.id === activeSlide.id)

    slideList.splice(activeIndex + 1, 0, domyObj)
    this.setState({
      slideList,
      activeSlide: {...domyObj},
    })
  }

  onHandleHeadingChange = event => {
    this.setState(prv => ({
      activeSlide: {
        ...prv.activeSlide,
        heading: event.target.value,
      },
    }))
  }

  onHandleDescriptionChange = event => {
    this.setState(prv => ({
      activeSlide: {
        ...prv.activeSlide,
        description: event.target.value,
      },
    }))
  }

  onChangeActive = index => {
    const {slideList} = this.state
    const active = slideList[index]
    this.setState({
      activeSlide: {...active},
    })
  }

  renderSlideList = () => {
    const {slideList, activeSlide} = this.state
    return (
      <ol className="slide-list">
        {slideList.map((item, index) => {
          const onChangeActiveSlide = () => {
            this.onChangeActive(index)
          }
          const activeCss = item.id === activeSlide.id ? 'active' : ''
          return (
            <li
              className={`slide-item ${activeCss}`}
              key={item.id}
              onClick={onChangeActiveSlide}
              testid={`slideTab${index + 1}`}
            >
              <p className="count">{index + 1}</p>
              <Slide data={item} index={index} />
            </li>
          )
        })}
      </ol>
    )
  }

  render() {
    const {activeSlide} = this.state
    const {heading, description} = activeSlide

    return (
      <div className="main-body">
        <div className="slide-list-container">
          <button
            type="button"
            className="app-slide-btn"
            onClick={this.onAddSlide}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="button-img"
            />
            New
          </button>
          {this.renderSlideList()}
        </div>
        <div className="slide-view-container">
          <div className="view-card" testid="slide">
            <input
              onChange={this.onHandleHeadingChange}
              value={heading}
              className="view-card-heading"
            />
            <input
              onChange={this.onHandleDescriptionChange}
              value={description}
              className="view-card-description"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Slides
