// #Components
import ModalArtists from "../../ModalArtists/ModalArtists"

// #Images
import Charles_Mingus from "../../../assets/images/Charles_Mingus.jpg"
import John_Coltrane from "../../../assets/images/John_Coltrane.jpeg"
import Horace_Silver from "../../../assets/images/Horace_Silver.jpg"
import Miles_Davis from "../../../assets/images/miles-davis.jpg"
import Art_Blakey from "../../../assets/images/Art_Blakey.jpg"

function JazzMusicArtist() {

    const jazzArtists = [
    {
        name: "Charles Mingus",
        image: Charles_Mingus,
        info: `Charles Mingus engineered jazz revolution through basement-studio Jazz Workshops where he'd woodshed arrangements with rotating ensembles, starting basslines with walking chromatic descents that coiled tension like Duke Ellington on steroids before unleashing horn sections into controlled chaos—think "Wednesday Night Prayer Meeting" where gospel call-response erupts into bebop polyphony with sudden metric modulations; he'd layer collective improvisation over meticulously notated epics like The Black Saint and the Sinner Lady, balancing 16-piece orchestration with raw quartet interplay, using bass as melodic protagonist while demanding virtuosic solos that served the composition, creating 20-minute suites that fused civil rights fury, spiritual ecstasy, and avant-garde abstraction into what Gunther Schuller called "the most richly conceived work in jazz history.`
    },
    {
        name: "John Coltrane",
        image: John_Coltrane,
        info: `John Coltrane built spiritual jazz cathedrals through modal odysseys that began with "Giant Steps" chromatic cyclone—three tonalities per bar taxing even the fastest improvisers—before evolving into A Love Supreme's quarter-note incantations over suspended D Dorian vamps, his tenor sax evolving from sheets-of-sound density to harmonic meditation where overblowing multiphonics and circular breathing created droning prayer wheels; by Ascension he'd orchestrate free jazz maelstroms pitting seven horns against Elvin Jones' tidal drums, each soloist entering like possessed spirits while Pharoah Sanders' wild cries pierced the collective trance, culminating in Interstellar Space's cosmic duets where bowed bass and keening sax communed beyond terrestrial harmony.`
    },
    {
        name: "Horace Silver",
        image: Horace_Silver,
        info: `Horace Silver perfected soul jazz alchemy by distilling gospel testifying, Latin montunos, and blues shuffles into Blue Note singles that hit like sermons, anchoring quintets with right-hand piano comping that walked basslines while left hand stabbed blues voicings—think "Song for My Father" where bossa nova groove gets sanctified by trombone growls and tenor exhortations; his arrangements deployed call-response riffs with surgical precision, each head built modular so Joe Henderson could stretch over 32-bar forms while Silver's block chords punctuated like preacher's amens, creating dancefloor-ready hard bop that smuggled sophisticated reharmonization behind catchy hooks still licensing car commercials today.`
    },
    {
        name: "Miles Davis",
        image: Miles_Davis,
        info: `Miles Davis reinvented jazz five times through minimalist trumpet sorcery—Birth of the Cool nonet charts deployed French horn and tuba for impressionist voicings he'd phrase with half-valve smears and breathy punctuations; Kind of Blue modal vamps let Coltrane unfurl over "So What"'s two-chord ocean while Miles sketched blue notes like haiku; by Bitches Brew he'd orchestrate electric maelstroms with 13 musicians plus Shorter/Zawinul, cuing polyrhythmic waves through hand signals while Teo Macero sliced studio jams into psychedelic suites, his Harmon-muted entries floating above rhythm-section maelstroms like ghostly transmissions from jazz's future.`
    },
    {
        name: "Art Blakey",
        image: Art_Blakey,
        info: `Art Blakey powered the Jazz Messengers' hard bop academy through volcanic drumming that combined New Orleans second-line bounce with brawny bebop press rolls, driving Benny Golson/Wayne Shorter's riff-based heads with cross-sticking flurries and cymbal sizzles that locked pocket while Benny's mallet bass drum thundered like cathedral bells; he'd anchor 32-bar forms with tidal swing where hi-hat chicks anticipated soloists' entrances, creating telepathic space for Lee Morgan's fiery leads or Shorter's questing tenor while his press-roll fills erupted like punctuation—mentoring three generations through rolling poly-rhythms that made every Messengers album a graduate seminar in swinging with authority.`
    }
]

    return (    
        <ModalArtists 
            artists={jazzArtists}
        />
    );
}

export default JazzMusicArtist;