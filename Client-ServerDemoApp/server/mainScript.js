// this is the entry point for client-server tv apps.
App.onLaunch = function(options){
//console.log('enter in Appl Launch JS ');
//    var templateURL = 'http://localhost:8000/template.tvml';
//    getDocument(templateURL);
    this.BASEURL = options.BASEURL;
evaluateScripts(["http://localhost:8000/stackTemplate.js"], function(success) {
                    if(success) {
                    var resource = stackTemplate.call(this); // get tvml string
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(resource, "application/xml");
                    xml.addEventListener("select", loadCompilation.bind(this));
                    navigationDocument.pushDocument(xml);
                   // getDocument(resource) // pass it to convert in to tvml object
                    }
                });
                
}

                    
                    
App.onExit = function() {
    console.log('App finished');
}

//download tvml from url using XMLHttpRequest
function getDocument(url) {
    var request = new XMLHttpRequest();
    request.responseType = "document";
    request.addEventListener("load", function() {event(request.responseXML);}, false);
    request.open("GET", url, true);
    request.send();
    return request;
}
function event(document){
navigationDocument.pushDocument(document);
}


 function load(event) {
    var ele = event.target,
     videoURL = ele.getAttribute("videoURL");
    if(videoURL) {
        var player = new Player();
        var playlist = new Playlist();
        var mediaItem = new MediaItem("video", videoURL);
        player.playlist = playlist;
        player.playlist.push(mediaItem);
        player.present();
    }
}

function loadRating(event){
    evaluateScripts(["http://localhost:8000/ratingTemplate.js"], function(success) {
                    if(success) {
                  //  if(event.target.getAttribute("title")){
                   
                   var  ratingTemplate =  new init("Rate This Movie");
                   // }
                    
                    var resource = rating.call(this); // get tvml string
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(resource, "application/xml");
                    navigationDocument.pushDocument(xml);
                    }
                    });

}

function loadMenubar(event){
    evaluateScripts(["http://localhost:8000/menuBarTemplate.js"], function(success) {
                    if(success) {
                    var resource = menuBar.call(this); // get tvml string
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(resource, "application/xml");
                    xml.addEventListener("select", load.bind(this));
                    navigationDocument.pushDocument(xml);
                
                    }
                    });

}

function loadDescription(){
    evaluateScripts(["http://localhost:8000/descriptiveTemplate.js"], function(success) {
                    if(success) {
                    var resource = descriptiveTemplate.call(this); // get tvml string
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(resource, "application/xml");
                    xml.addEventListener("select", loadRating.bind(this));
                    navigationDocument.pushDocument(xml);
                    
                    }
                    });
}


function loadCompilation(){
    evaluateScripts(["http://localhost:8000/compilationTemplate.js"], function(success) {
                    if(success) {
                    var resource = compilationTemplate.call(this); // get tvml string
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(resource, "application/xml");
                    xml.addEventListener("select", loadDescription.bind(this));
                    navigationDocument.pushDocument(xml);
                    
                    }
                    });
    
}
