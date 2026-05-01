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
            className="modal-artists__image" 
            src={artist.image} 
            alt={artist.name} 
          />
          <div className="modal-artists__holder-position">
            <p className="modal-artists__holder-names">{artist.name}</p>
            <p className="modal-artists__holder-information">{artist.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModalArtists;