// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, onClicked} = props
  const {imageUrl, name, location, registrationStatus} = eachEvent
  //   console.log(imageUrl, name, location)
  const onImgClick = () => {
    onClicked(registrationStatus)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onImgClick}>
        <img src={imageUrl} alt="event" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
