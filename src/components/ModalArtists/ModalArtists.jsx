// #CSS
import "./ModalArtists.css"

function ModalArtists ({
    artists = []
}) 

{
   return (
    <div className="modal-artists">
      {artists.map((artist, index) => (
        <div key={index} className="modal-artists__holder">
          <img 
            className="modal-artists__images" 
            src={artist.image} 
            alt={artist.name} 
          />
          <div className="modal-artists__holder_position">
            <p className="modal-artists__holder_names">{artist.name}</p>
            <p className="modal-artists__holder_information">{artist.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModalArtists;