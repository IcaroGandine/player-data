import   "./styles.css";

function PlayerCard() {
    return (
      
      <div className="PlayerCard">
        <div className= "picture">
          <img src = "https://www.w3schools.com/howto/img_avatar.png"/> 
        </div>
    
        <div className="info">   
            <h4>Nome:</h4> 
            <h4>Altura</h4> 
            <h4>Time</h4> 
            <h4>Peso</h4> 
        </div>  
      </div>
    );
  }
  
  export default PlayerCard;