import   "./styles.css";

function TeamCard() {
    return (
      
      <div className="TeamCard">
        <div className= "picture">
          <img src = "https://www.w3schools.com/howto/img_avatar.png"/> 
        </div>
    
        <div className="info">   
            <h1>Nome</h1>  
            <h1>Local</h1>  
        </div>  
      </div>
    );
  }
  
  export default TeamCard;