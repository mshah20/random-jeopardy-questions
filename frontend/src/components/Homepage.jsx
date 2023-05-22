import "./Homepage.css";
import Question from "./Question";

const Homepage = () => {

  return(
    <div className="homepage-container" id="homepage-container">
      <h1 className="header">Random Jeopardy Questions!</h1>
      <Question />
    </div>
  );
}

export default Homepage;