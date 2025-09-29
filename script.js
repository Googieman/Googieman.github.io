// Initialize map centered on India
var map = L.map('map').setView([22.0, 78.0], 5);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marker data
var artLocations = [
  {
    name: "Madhubani, Bihar",
    coords: [26.37, 86.03],
    description: "Madhubani art is a traditional folk painting style from Bihar, known for intricate patterns, bright colors, and motifs from mythology and nature.",
    image: "images/madhubani.jpg"
  },
  {
    name: "Warli, Maharashtra",
    coords: [19.50, 73.50],
    description: "Warli paintings use simple geometric shapes to depict daily life, farming, animals, and festivals in Maharashtra.",
    image: "images/warli.jpg"
  },
  {
    name: "Pattachitra, Odisha",
    coords: [20.26, 85.84],
    description: "Pattachitra is a scroll painting style with intricate details and vibrant colors, depicting stories of Jagannath and Krishna.",
    image: "images/pattachitra.jpg"
  },
  {
    name: "Kalamkari, Andhra Pradesh",
    coords: [16.50, 80.64],
    description: "Kalamkari is hand-painted or block-printed textile art using natural dyes, depicting mythological scenes and floral designs.",
    image: "images/kalamkari.jpg"
  },
  {
    name: "Tanjore, Tamil Nadu",
    coords: [10.79, 78.70],
    description: "Tanjore paintings are known for rich colors, gold foil, and 3D-like depictions of Hindu deities.",
    image: "images/tanjore.jpg"
  },
  {
    name: "Gond, Madhya Pradesh",
    coords: [22.97, 81.78],
    description: "Gond art uses dots and lines to create stylized depictions of animals, plants, and folklore, emphasizing storytelling.",
    image: "images/gond.jpg"
  },
  {
    name: "Phad, Rajasthan",
    coords: [26.91, 74.62],
    description: "Phad paintings are long scrolls depicting epic stories of local heroes, gods, and folk legends, used by bards for storytelling.",
    image: "images/phad.jpg"
  },
  {
    name: "Cheriyal, Telangana",
    coords: [17.39, 78.48],
    description: "Cheriyal scroll paintings are stylized storytelling art with bright colors and mythological themes.",
    image: "images/cheriyal.jpg"
  },
  {
    name: "Kerala Mural Paintings, Kerala",
    coords: [10.52, 76.21],
    description: "Kerala mural paintings are traditional frescoes depicting Hindu mythology, legends, and epics, created with natural pigments and intricate detailing on temple walls.",
    image: "images/kerala_mural.jpg"
  }
];

// Add markers to map
artLocations.forEach(function(location) {
  var marker = L.marker(location.coords).addTo(map);
  marker.bindPopup(`
    <b>${location.name}</b><br>
    ${location.description}<br>
    <img src="${location.image}" width="200">
  `);
});
