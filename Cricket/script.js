// Array of 10 Best Cricket Players
const players = [
    {
        name: "Sachin Tendulkar",
        imageUrl: "https://i.pinimg.com/564x/a9/6e/56/a96e567b90b78b43fea0184fb2c277ec.jpg",
        country: "India",
        stats: "Matches: 664, Runs: 34357, Centuries: 100",
        achievements: "Most runs in international cricket"
    },
    {
        name: "Virat Kohli",
        imageUrl: "https://i.pinimg.com/736x/30/41/27/304127744db7e2305abbfd34207c5689.jpg",
        country: "India",
        stats: "Matches: 462, Runs: 25461, Centuries: 76",
        achievements: "Fastest to 8,000, 9,000, 10,000 ODI runs"
    },
    {
        name: "MS Dhoni",
        imageUrl: "https://i.pinimg.com/564x/92/f7/63/92f763417c5c4209ba3252129a091120.jpg",
        country: "India",
        stats: "Matches: 538, Runs: 17266, Centuries: 16",
        achievements: "Led India to World Cup victories"
    },
    {
        name: "Ricky Ponting",
        imageUrl: "https://i.pinimg.com/564x/62/47/9c/62479c9a3877b6b1c644bea2650f8041.jpg",
        country: "Australia",
        stats: "Matches: 560, Runs: 27483, Centuries: 71",
        achievements: "Two-time World Cup-winning captain"
    },
    {
        name: "Brian Lara",
        imageUrl: "https://i.pinimg.com/564x/cf/0a/4d/cf0a4d202beb70da58acc7f9507f359e.jpg",
        country: "West Indies",
        stats: "Matches: 430, Runs: 22358, Centuries: 53",
        achievements: "Highest individual score in a Test match"
    },
    {
        name: "Jacques Kallis",
        imageUrl: "https://i.pinimg.com/564x/5d/9c/69/5d9c69041918cd84cb6bbfc8a6e6a7f1.jpg",
        country: "South Africa",
        stats: "Matches: 519, Runs: 25534, Wickets: 577",
        achievements: "One of the greatest all-rounders"
    },
    {
        name: "Shane Warne",
        imageUrl: "https://i.pinimg.com/564x/df/f3/19/dff319c299c918c51504b655a7e26f45.jpg",
        country: "Australia",
        stats: "Matches: 339, Wickets: 1001",
        achievements: "700 Test wickets"
    },
    {
        name: "Muttiah Muralitharan",
        imageUrl: "https://i.pinimg.com/564x/ec/c9/e9/ecc9e9c4e1571629bb3d037396d1bcbe.jpg",
        country: "Sri Lanka",
        stats: "Matches: 495, Wickets: 1347",
        achievements: "Highest wicket-taker in Tests and ODIs"
    },
    {
        name: "Wasim Akram",
        imageUrl: "https://i.pinimg.com/564x/d9/61/c1/d961c153f7dae647812f02c0fc8f78a8.jpg",
        country: "Pakistan",
        stats: "Matches: 460, Wickets: 916",
        achievements: "Master of swing bowling"
    },
    {
        name: "sir don Bradman",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Don_Bradman_1930.jpg",
        country: "Australia",
        stats: "Matches: 52, Wickets:2",
        achievements: "Master of swing bowling"
    }
   
];

// Display Players on the Website
const playerList = document.getElementById('player-list');

players.forEach(player => {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');

    playerCard.innerHTML = `
        <img src="${player.imageUrl}" alt="${player.name}">
        <h3>${player.name}</h3>
        <p> <strong>Country:</strong> ${player.country}</p>
        <p><strong>Stats:</strong> ${player.stats}</p>
        <p><strong>Achievements:</strong> ${player.achievements}</p>
    `;

    playerList.appendChild(playerCard);
});

// Top Matches Section
const topMatches = [
    {
        match: "India vs Sri Lanka, 2011 World Cup Final",
        description: "India chased 275 to win the World Cup, with MS Dhoni leading from the front.",
        videoUrl: "https://youtu.be/3SG8D5heqSg?si=0UnXmdeELsO7aUkd"
    },
    {
        match: "Australia vs England, 2005 Ashes",
        description: "The 2005 Ashes series is considered one of the best in cricket history.",
        videoUrl: "https://youtu.be/NB_uc2j5yOY?si=JwM3ymNRqVbhmecU"
    }
];

const matchList = document.getElementById('match-list');
topMatches.forEach(match => {
    const matchCard = document.createElement('div');
    matchCard.classList.add('match-card');

    matchCard.innerHTML = `
        <h3>${match.match}</h3>
        <p>${match.description}</p>
        <a href="${match.videoUrl}" target="_blank">Watch Highlights</a>
    `;

    matchList.appendChild(matchCard);
});

// map


let cordinate=[
    {
        name:"virat kohli",
        country:"india",
        lat:28.644800,
        lon:77.216721
      },
         {
        name:"sachin tendulkar",
        country:"india",

        lat:19.0760,
        lon:72.8777 
      },
         {
        name:"ricky ponting",
        country:"australia",

        lat:-42.8821,
        lon:147.3272
      } ,
        {
        name:"Brian lara",
        country:"West Indies",

        lat:10.6918,
        lon:-61.2225
      },
      {
        name:"Ms Dhoni",
        country:"india",

        lat: 23.344315,
        lon:85.296013
      },
      {
        name:"sir don bradman",
        country:"australia",

        lat:34.6387,
        lon:148.0241
      },
      {
        name:"Jackques Kalis",
        country:"south africa",

        lat:30.5595,
        lon: 22.9375
      },
      {
        name:"Shane Warne",
        country:"Australia",

        lat:	-37.840935,
        lon:144.9631
      },
      {
        name:"Murlitharan",
        country:"Sri Lanka",

        lat:28.644800,
        lon:77.216721
      },
      {
        name:"Wasim Akram",
        country:"Pakistan",

        lat:28.644800,
        lon:77.216721
      },{
        name:"Donald Bradman",
        country:"Australia",

        lat:28.644800,
        lon:77.216721
      }
]


let map;

function initMap() {
    
    map = L.map('player-map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    updateMap();
}

function updateMap() {
    if (map) {
        map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        cordinate.forEach(player => {
            L.marker([player.lat, player.lon])
                .addTo(map)
                .bindPopup(`<b>${player.name}</b><br>${player.country}`);
        });
    }
}

initMap()
