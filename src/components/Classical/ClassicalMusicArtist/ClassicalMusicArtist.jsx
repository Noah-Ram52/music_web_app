// #Components
import ModalArtists from "../../ModalArtists/ModalArtists";

// #Images
import Beethoven from "../../../assets/images/Beethoven.jpg"
import Gunnarsson from "../../../assets/images/Gunnarsson.jpg"
import Christophe_Luciani from "../../../assets/images/Christophe_Luciani.jpg"
import Franz_Liszt from "../../../assets/images/Franz_Liszt.jpg"
import Frederic_Chopin from "../../../assets/images/Frederic_Chopin.jpeg"

function ClassicalMusicArtist() {

    const classicalArtistsNames = [
      "Beethoven",
      "Gunnarsson",
      "Christophe Luciani",
      "Franz Liszt",
      "Frederic Chopin"
    ]

       const classicalArtistImages = [
        Beethoven,
        Gunnarsson,
        Christophe_Luciani,
        Franz_Liszt,
        Frederic_Chopin
    ];

    const classicalArtistInformation = [
      `Ludwig van Beethoven forged classical music's emotional core through symphonic architecture that weaponized sonata form against Classical restraint, launching Fourth Symphony's first movement with throbbing unison strings building tectonic tension before explosive horn entries shatter the horizon—his development sections became psychological battlegrounds where motivic cells fragmented into chromatic fugues then reassembled as triumphant recapitulations; the Ninth Symphony's choral finale deploys "Ode to Joy" as secular mass with Turkish march percussion and bass soloist proclaiming brotherhood over orchestral thunder, while late string quartets like Op. 131 dissolve tonality boundaries through continuous seven-movement structures where canons invert across disembodied pizzicato, all composed after total deafness turned inner ear into cosmic cathedral.`, 
      `Gunnarsson (the modern Icelandic composer behind "WATER") constructs post-minimalist cinematic piano works through nature-inspired soundscapes, initiating pieces with distant piano clusters evoking glacial drips that coalesce into rippling arpeggios suggesting flowing streams, gradually introducing pedal-sustained resonances where low-register ostinatos pulse like heartbeats beneath crystalline high-register figurations; his harmonic language blends modal ambiguity with subtle bitonal shifts—think C major ostinato clashing against E-flat pedal points—while dynamic swells build from ppp whispers to ff catharsis through layered ostinati that evoke water's inexorable journey from mountain rivulet to ocean swell, all captured in pristine studio recordings prioritizing spatial reverb over virtuoso display.`, 
      `Christophe Luciani realizes French impressionist piano through coloristic refinement, approaching Debussy's Préludes with pedal points sustained just long enough to blur harmonic contours into atmospheric washes—his "La Cathédrale engloutie" emerges from abyssal bass octaves that swell into chordal surges suggesting sunken bells, each voicing balanced to maximize overtonal shimmer; Ravel's Gaspard de la Nuit finds him navigating "Ondine"'s perpetual motion cascades with liquid touch where rapid alberti patterns maintain evenness while dynamic hairpins trace mythical seduction, his pedaling philosophy preserving phrase contour over literal clarity to let harmonic color emerge organically through French piano's infinite gradations.`, 
      `Franz Liszt engineered piano transcendence through transcendental technique that turned keyboard into orchestra—his Transcendental Études demand parallel tenth leaps, chromatic scales at sixteenth-note velocity, and perpetual motion requiring forearm rotation beyond human anatomy; Hungarian Rhapsodies fuse verbunkos cimbalom strumming patterns with gypsy lament slow sections exploding into lassan-friska dualism where left-hand octaves gallop like Cossack horses beneath right-hand cadenzas deploying augmented sixths and Neapolitan seconds; he pioneered symphonic poem form translating Berlioz's Idee fixe into single-movement tone poems like Les Preludes, each transformation cued by thematic metamorphosis rather than mere development.`, 
      `Frédéric Chopin perfected piano lyricism through salon intimacy scaled to concert grandeur, his Nocturnes unfolding rubato melodies over divided left-hand arpeggios where ornamentation serves emotional truth—think Op. 9 No. 2's famous bel canto line floating above chromatic bass motion that never disrupts cantabile flow; Ballades weaponize ternary form against narrative convention, each outer A section establishing Polish dance topics (mazurka lilt, krakowiak snap) that explode into central episodes of proto-Lisztian bravura before recapitulating transformed; his Études systematize technical transcendence into poetic necessity where Op. 10 No. 3's staccato chromatic thirds demand forearm rotation while black-key étude choreographs pentatonic hand positions into singing melody, every finger independent yet serving higher musical architecture.`
   ]


    return (
     <ModalArtists 
        firstClassicalArtist={classicalArtistImages[0]}
        secondClassicalArtist={classicalArtistImages[1]}
        thirdClassicalArtist={classicalArtistImages[2]}
        fourthClassicalArtist={classicalArtistImages[3]}
        fifthClassicalArtist={classicalArtistImages[4]}
        firstClassicalArtistName={classicalArtistsNames[0]}
        secondClassicalArtistName={classicalArtistsNames[1]}
        thirdClassicalArtistName={classicalArtistsNames[2]}
        fourthClassicalArtistName={classicalArtistsNames[3]}
        fifthClassicalArtistName={classicalArtistsNames[4]}
        firstClassicalArtistInfo={classicalArtistInformation[0]}
        secondClassicalArtistInfo={classicalArtistInformation[1]}
        thirdClassicalArtistInfo={classicalArtistInformation[2]}
        fourthClassicalArtistInfo={classicalArtistInformation[3]}
        fifthClassicalArtistInfo={classicalArtistInformation[4]}
     />
    )
}

export default ClassicalMusicArtist;