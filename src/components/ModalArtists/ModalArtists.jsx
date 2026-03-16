// #CSS
import "./ModalArtists.css"

function ModalArtists ({
    firstClassicalArtist, 
    secondClassicalArtist, 
    thirdClassicalArtist,
    fourthClassicalArtist,
    fifthClassicalArtist,
    firstClassicalArtistName,
    secondClassicalArtistName,
    thirdClassicalArtistName,
    fourthClassicalArtistName,
    fifthClassicalArtistName,
    firstJazzArtist, 
    secondJazzArtist, 
    thirdJazzArtist,
    fourthJazzArtist,
    fifthJazzArtist,
    firstJazzArtistName,
    secondJazzArtistName,
    thirdJazzArtistName,
    fourthJazzArtistName,
    fifthJazzArtistName,
    firstNerdcoreArtist, 
    secondNerdcoreArtist, 
    thirdNerdcoreArtist,
    fourthNerdcoreArtist,
    firstNerdcoreArtistName,
    secondNerdcoreArtistName,
    thirdNerdcoreArtistName,
    fourthNerdcoreArtistName,
    firstClassicalArtistInfo,
    secondClassicalArtistInfo,
    thirdClassicalArtistInfo,
    fourthClassicalArtistInfo,
    fifthClassicalArtistInfo,
    firstJazzArtistInfo,
    secondJazzArtistInfo,
    thirdJazzArtistInfo,
    fourthJazzArtistInfo,
    fifthJazzArtistInfo,
    firstNerdcoreArtistInfo,
    secondNerdcoreArtistInfo,
    thirdNerdcoreArtistInfo,
    fourthNerdcoreArtistInfo
}) 

{
    
    const artistNames = [
    firstClassicalArtistName || firstJazzArtistName || firstNerdcoreArtistName,
    secondClassicalArtistName || secondJazzArtistName || secondNerdcoreArtistName,
    thirdClassicalArtistName || thirdJazzArtistName || thirdNerdcoreArtistName,
    fourthClassicalArtistName || fourthJazzArtistName || fourthNerdcoreArtistName,
    fifthClassicalArtistName || fifthJazzArtistName 
]

   const artistImages = [
    firstClassicalArtist || firstJazzArtist || firstNerdcoreArtist, 
    secondClassicalArtist || secondJazzArtist || secondNerdcoreArtist, 
    thirdClassicalArtist || thirdJazzArtist || thirdNerdcoreArtist, 
    fourthClassicalArtist || fourthJazzArtist || fourthNerdcoreArtist, 
    fifthClassicalArtist || fifthJazzArtist
]

   const artistDescription = [
    firstClassicalArtistInfo || firstJazzArtistInfo || firstNerdcoreArtistInfo,
    secondClassicalArtistInfo || secondJazzArtistInfo || secondNerdcoreArtistInfo,
    thirdClassicalArtistInfo || thirdJazzArtistInfo || thirdNerdcoreArtistInfo,
    fourthClassicalArtistInfo || fourthJazzArtistInfo || fourthNerdcoreArtistInfo,
    fifthClassicalArtistInfo || fifthJazzArtistInfo
   ]


    return (
        <div className="modal-artists">
            <div className="modal-artists__holder">
                <img className="modal-artists__images" src={artistImages[0]}  />
                <div className="modal-artists__holder_position">
                <p className="modal-artists__holder_names">{artistNames[0]}</p>
                <p className="modal-artists__holder_information">{artistDescription[0]}</p>
                </div>
            </div>
            <div className="modal-artists__holder">
                <img className="modal-artists__images" src={artistImages[1]}  />
                <div className="modal-artists__holder_position">
                <p className="modal-artists__holder_names">{artistNames[1]}</p>
                <p className="modal-artists__holder_information">{artistDescription[1]}</p>
                </div>
            </div>
            <div className="modal-artists__holder">
                <img className="modal-artists__images" src={artistImages[2]}  />
                 <div className="modal-artists__holder_position">
                 <p className="modal-artists__holder_names">{artistNames[2]}</p>
                 <p className="modal-artists__holder_information">{artistDescription[2]}</p>
                 </div>
            </div>
            <div className="modal-artists__holder">
                <img className="modal-artists__images" src={artistImages[3]}  />
                <div className="modal-artists__holder_position">
                <p className="modal-artists__holder_names">{artistNames[3]}</p>
                <p className="modal-artists__holder_information">{artistDescription[3]}</p>
                </div>
            </div>
            {(artistNames[4] && artistImages[4] && artistDescription[4]) && (
            <div className="modal-artists__holder">
                <img className="modal-artists__images" src={artistImages[4]}  />
                <div className="modal-artists__holder_position">
                <p className="modal-artists__holder_names">{artistNames[4]}</p>
                <p className="modal-artists__holder_information">{artistDescription[4]}</p>
                </div>
            </div>
            )}
        </div>
    );
}

export default ModalArtists;