// #Components
import ModalArtists from "../../ModalArtists/ModalArtists"

// #Images
import Dizzy_Eight from "../../../assets/images/Dizzy_Eight.jpg"
import Fabvl from "../../../assets/images/Fabvl.jpg"
import None_Like_Joshua from "../../../assets/images/None_Like_Joshua.jpeg"
import Tyler_Clark from "../../../assets/images/Tyler_Clark.jpg"



function NerdcoreMusicArtist() {

    const nerdcoreArtists = [
        {
            name: "Dizzy Eight",
            image: Dizzy_Eight,
            info: `DizzyEight dominates nerdcore production by self-engineering a signature hybrid of Christian rap conviction and anime storytelling intensity, starting with trap hi-hats and 808s as his backbone before layering video game SFX—think Kingdom Hearts chimes or Final Fantasy summons—over syncopated kicks that mirror character power-up moments; his verses explode with multisyllabic anime arcs like Naruto's Nine-Tails awakening, delivered through rapid-fire double-time flows that shift to melodic hooks for emotional climaxes, all mixed in FL Studio with heavy reverb on faith-infused refrains that echo through YouTube cypher battles where he outpaces competitors with surgical precision on battle rap cadences.`,
        },
        {
            name: "Fabvl",
            image: Fabvl,
            info: `FabvL constructs nerdcore masterpieces through orchestral-level sound design tailored to anime power scaling, opening tracks with subtle piano arpeggios that represent character introspection before slamming into massive hybrid-trap drops with orchestral string stabs synced perfectly to Dragon Ball Super transformations or Marvel snap moments; his production philosophy treats every 8-bar section as a cinematic scene progression, using sidechain compression to make synth leads 'punch through' like Kamehameha waves while his dense, multisyllabic rhyme schemes—packing 12+ syllables per bar—ride the beat switches flawlessly, creating 3-4 minute epic battles where the instrumental evolution mirrors the lyrical narrative escalation.`,
        },
        {
            name: "None Like Joshua",
            image: None_Like_Joshua,
            info: `None Like Joshua perfects commercial nerdcore polish through meticulous anime OST sampling and modern trap architecture, sourcing Attack on Titan cellos or Demon Slayer shamisen riffs as melodic foundations before programming crisp hi-hat triplets and snappy snares that give his villain/hero dialogue raps street cred; he structures songs as character playlists—sinister 808 slides and minor key pads for antagonists like Sukuna, triumphant brass swells and major chord progressions for protagonists like Ichigo—layering his smooth, melodic flow with precise double entendres that reward rewinds, all mastered to YouTube's loudness standards so his tracks hit harder than competitors in recommendation algorithms.`,
        },
        {
            name: "Tyler Clark",
            image: Tyler_Clark,
            info: `Tyler Clark approaches nerdcore with raw, console-native chiptune aggression, ripping Game Boy and Sega Genesis waveforms straight into his DAW to build beats that sound like they boot from cartridge, pairing 8-bit square leads with modern boom-bap drums for maximum nostalgia collision; his production stays deliberately lo-fi with visible aliasing and bitcrushing on the kicks, creating gaming lobby energy where his conversational flow—less braggadocio, more excited fanboy dissection—lands punchlines about speedrunning glitches or raid strats over drum patterns sampled from classic platformers, keeping mixes punchy and uncluttered so every geek reference cuts through clearly.`,
        }
    ]

    return (
        <ModalArtists 
        artists={nerdcoreArtists}
        />
    );
}

export default NerdcoreMusicArtist;