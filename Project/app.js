const splash = document.querySelector ('.splash')

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

player.on('ended', function(){
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 500);
});

// var map = new Datamap({
//     element: document.getElementById('map'),
//     fills: {
//         defaultFill: 'rgb(0, 28, 81)' // Any hex, color name or rgb/rgba value
//     }
// });

var zoom = new Datamap({
    element: document.getElementById('map'),
    scope: 'world',
    // Zoom in on Europe
    setProjection: function(element) {
        var projection = d3.geo.equirectangular()
          .center([25, 40])
          .rotate([0, -8])
          .scale(650)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        var path = d3.geo.path()
          .projection(projection);
    
        return {path: path, projection: projection};
      },
    fills: {
        defaultFill: 'rgb(0, 28, 81)' , // Any hex, color name or rgb/rgba value
        white: 'white'
    },
    geographyConfig: {
    highlightFillColor: 'rgb(251,102,64)',
    },
    data: {
    'KAZ': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'GEO': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'CHN': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'MNG': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'IRN': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'SYR': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'TKM': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'DZA': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'MAR': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'LBY': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'TUN': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'EGY': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'UZB': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'KGZ': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'LBN': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'PSE': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'ISR': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'TJK': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'AFG': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'PAK': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'IND': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'NPL': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'IRQ': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'CAN': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'SAU': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'JOR': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'MRT': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'ESH': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'KWT': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'QAT': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'ARE': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'OMN': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'BTN': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'BGD': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    'MLI': { 
        fillKey: 'white',
        highlightFillColor: 'white',
        highlightBorderColor:'white' },
    }
});