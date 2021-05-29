const splash = document.querySelector ('.splash')

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

player.on('ended', function(){
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 500);
});


