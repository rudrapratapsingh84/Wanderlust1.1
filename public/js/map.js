mapboxgl.accessToken = "pk.eyJ1IjoiZGVsdGEtc3R1ZHVlbnQiLCJhIjoiY2xvMDk0MTVhMTJ3ZDJrcGR5ZDFkaHl4ciJ9.Gj2VU1wvxc7rFVt5E4KLOQ";
// console.log(process.env.MAP_TOKEN)
const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/streets-v12",
center: [77.2090, 28.6139], // starting position [lng, lat]
zoom: 9, // starting zoom
});