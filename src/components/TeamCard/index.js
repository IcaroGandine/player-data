import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

function rgb(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}

function TeamCard() {
  const cardColors = {
    headerBgColor: rgb(246, 110, 31),
    titleBgColor: rgb(147, 22, 166),
  };

  const shortNameStyles = {
    background: cardColors.headerBgColor,
  };

  const fullNameStyles = {
    background: cardColors.titleBgColor,
  };

  return (
    <div class="card border-light mb-3" className="TeamCard">
      <div
        class="card-header"
        className="TeamShortName"
        style={shortNameStyles}
      >
        PHX
      </div>
      <div class="card-body" style={fullNameStyles} >
        <h5 className="TeamFullName">
          Phoenix Suns
        </h5>

        <div className="wrapper">
          <div class="card-text" className="TeamDescription">
            City: Phoenix <br />
            Conference: West
          </div>
          <div className="picture">
            <img
              src="https://logodetimes.com/times/phoenix-suns/logo-phoenix-suns-256.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
