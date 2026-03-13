// ====================================================================
// CLASSICAL VIDEOS FUNCTION
// ====================================================================

  // Youtube Thumbnail Formula:
  // https://i.ytimg.com/vi/[VIDEO_ID]/mqdefault.jpg

export function getClassicalVideos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { 
          title: "Beethoven - Symphony No. 5", 
          videoId: "sbTVZMJ9Z2I",  
          thumbnail: "https://i.ytimg.com/vi/sbTVZMJ9Z2I/mqdefault.jpg", 
          channel: "Rousseau" 
        },
        { 
          title: "Beethoven - Moonlight Sonata", 
          videoId: "BV7RkEL6oRc", 
          thumbnail: "https://i.ytimg.com/vi/BV7RkEL6oRc/mqdefault.jpg",
          channel: "Rousseau" },

        { 
          title: "by Gunnarsson - WATER", 
          videoId: "CxKR1smmiNo", 
          thumbnail: "https://i.ytimg.com/vi/CxKR1smmiNo/mqdefault.jpg",
          channel: "by Gunnarsson" 
        },
        { 
          title: "One Thousand Stars For You", 
          videoId: "hajZ6_thqms", 
          thumbnail: "https://i.ytimg.com/vi/hajZ6_thqms/mqdefault.jpg", 
          channel: "Christophe Luciani" 
        },
        { 
          title: "Liszt - La Campanella", 
          videoId: "H1Dvg2MxQn8", 
          thumbnail: "https://i.ytimg.com/vi/H1Dvg2MxQn8/mqdefault.jpg", 
          channel: "Rousseau" },
        { 
          title: "Chopin - Etude Op. 10 No. 4", 
          videoId: "oHiU-u2ddJ4",
          thumbnail: "https://i.ytimg.com/vi/oHiU-u2ddJ4/mqdefault.jpg", 
          channel: "Rousseau"
        }
      ]);
    }, 500);
  });
}

// ====================================================================
// JAZZ VIDEOS FUNCTION
// ====================================================================


export function getJazzVideos() {
  return new Promise((resolve) => {
     setTimeout(() => {
      resolve([
       { 
          title: "Fables Of Faubus", 
          videoId: "CutrIZzTJl0",  
          thumbnail: "https://i.ytimg.com/vi/CutrIZzTJl0/mqdefault.jpg", 
          channel: "Charles Mingus" 
        },
        { 
          title: "Blue Train (Remastered 2003/Rudy Van Gelder Edition)", 
          videoId: "HT_Zs5FKDZE", 
          thumbnail: "https://i.ytimg.com/vi/HT_Zs5FKDZE/mqdefault.jpg",
          channel: "John Coltrane"
         },

        { 
          title: "Song For My Father", 
          videoId: "mKf1x3CALAE", 
          thumbnail: "https://i.ytimg.com/vi/mKf1x3CALAE/mqdefault.jpg",
          channel: "Horace Silver" 
        },
        { 
          title: "Equinox", 
          videoId: "9Zyr0IDaRXQ", 
          thumbnail: "https://i.ytimg.com/vi/9Zyr0IDaRXQ/mqdefault.jpg", 
          channel: "John Coltrane" 
        },
        { 
          title: "Miles Davis - All Blues (Audio) (Official Audio)", 
          videoId: "-488UORrfJ0", 
          thumbnail: "https://i.ytimg.com/vi/-488UORrfJ0/mqdefault.jpg", 
          channel: "Miles Davis" 
        },
        { 
          title: "Moanin'", 
          videoId: "oHiU-u2ddJ4",
          thumbnail: "https://i.ytimg.com/vi/oHiU-u2ddJ4/mqdefault.jpg", 
          channel: "Art Blakey"
        }
    ]);
    }, 500);
  });
}



// ====================================================================
// NERDCORE VIDEOS FUNCTION (SAME LOGIC, DIFFERENT GENRE)
// ====================================================================

export function getNerdcoreVideos() {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve([
       { 
          title: 'SUNG JIN WOO RAP SONG | "Limitless" | DizzyEight ft. Jamar Rose [Solo Leveling AMV]', 
          videoId: "elulJJxASXw",  
          thumbnail: "https://i.ytimg.com/vi/elulJJxASXw/mqdefault.jpg", 
          channel: "Dizzy Eight" 
        },
        { 
          title: "SUNG JIN WOO RAP SONG | Limitless II | DizzyEight x Jamar Rose [Solo Leveling AMV]", 
          videoId: "HK6N05s7bQU", 
          thumbnail: "https://i.ytimg.com/vi/HK6N05s7bQU/mqdefault.jpg",
          channel: "Dizzy Eight"
         },

        { 
          title: 'Vigilante Deku Rap - "Lost" | FabvL [My Hero Academia]', 
          videoId: "7C4uuz2dBDA", 
          thumbnail: "https://i.ytimg.com/vi/7C4uuz2dBDA/mqdefault.jpg",
          channel: "Fabvl" 
        },
        { 
          title: 'SHIGARAKI RAP "NØTHING" | FabvL ft. NemRaps [My Hero Academia]', 
          videoId: "TZTng1oClVY", 
          thumbnail: "https://i.ytimg.com/vi/TZTng1oClVY/mqdefault.jpg", 
          channel: "Fabvl" 
        },
        { 
          title: 'YORIICHI RAP - “In My Blood” | NLJ & Tyler Clark | Demon Slayer Rap', 
          videoId: "21r5Of9ttqs", 
          thumbnail: "https://i.ytimg.com/vi/21r5Of9ttqs/mqdefault.jpg", 
          channel: "None Like Joshua and Tyler Clark" 
        },
        { 
          title: 'KOKUSHIBO RAP - "Humanity" | NLJ & Tyler Clark | Demon Slayer Rap', 
          videoId: "ITQN2YpV0SM",
          thumbnail: "https://i.ytimg.com/vi/ITQN2YpV0SM/mqdefault.jpg", 
          channel: "None Like Joshua and Tyler Clark"
        }
    ]);
    }, 500);
  });
}