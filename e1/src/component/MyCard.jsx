import componentsImage from '../assets/componentsImage';
import stateImage from './assets/state.png';
import eventsImage from './assets/events.png';
const MyHeader = (props) => {
  return (
    <div>
      <ul id="concepts">
        <li className="concept">
          <img src={componentsImage} alt={"TODO:" + props.title[0]} />
          <h2>TODO:{props.title[0]}</h2>
          <p>TODO: {props.description[0]}</p>
        </li>
        <li className="concept">
          <img src={stateImage} alt={props.title[1]} />
          <h2>TODO:{props.title[1]}</h2>
          <p>TODO: {props.description[1]}</p>
        </li>
        <li className="concept">
          <img src={eventsImage} alt={"TODO:" + props.title[2]} />
          <h2>TODO:{props.title[2]}</h2>
          <p>TODO: {props.description[2]}</p>
        </li>
      </ul>
    </div>
  );
};

export default MyHeader;
