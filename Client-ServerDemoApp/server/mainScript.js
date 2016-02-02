// this is the entry point for client-server tv apps.
App.onLaunch = function(options){
//console.log('enter in Appl Launch JS ');
//    var templateURL = 'http://localhost:8000/template.tvml';
//    getDocument(templateURL);
    
    this.BASEURL = options.BASEURL;
//evaluateScripts(["http://localhost:8000/stackTemplate.js"], function(success) {
//                    if(success) {
//                    var resource = stackTemplate.call(this); // get tvml string
//                    var parser = new DOMParser();
//                    var xml = parser.parseFromString(resource, "application/xml");
//                    xml.addEventListener("Select", getJSONDocument("http://localhost:8000/MediaTreck.json"));
//                    navigationDocument.pushDocument(xml);
//                   // getDocument(resource) // pass it to convert in to tvml object
//                    }
//                });
//
//    evaluateScripts(["http://localhost:8000/descriptiveTemplate.js"], function(success) {
//                    if(success) {
//                    var resource = descriptiveTemplate.call(this); // get tvml string
//                    var parser = new DOMParser();
//                    var xml = parser.parseFromString(resource, "application/xml");
//                    xml.addEventListener("Select", getJSONDocument("http://localhost:8000/MediaTreck.json"));
//                    navigationDocument.pushDocument(xml);
//                    // getDocument(resource) // pass it to convert in to tvml object
//                    }
//                    });
    
    evaluateScripts(["http://localhost:8000/descriptiveTemplate.js"], function(success) {
                    if(success) {
                   
                    var resource = Template.call(this); // get tvml string
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(resource, "application/xml");
                    xml.addEventListener("Select", getJSONDocument("http://localhost:8000/MediaTreck.json"),false);
                    navigationDocument.pushDocument(xml);
                    }
                    });
}
                    
App.onExit = function() {
    console.log('App finished');
}

//download tvml from url using XMLHttpRequest
function getDocument(url) {
    var request = new XMLHttpRequest();
     request.responseType = 'json';
   // request.responseType = "document";
    request.addEventListener("load", function() {event(request.responseXML);}, false);
    request.open("GET", url, true);
    request.send();
    return request;
}
function event(document){
navigationDocument.pushDocument(document);
}

function getJSONDocument(url) {
    var request = new XMLHttpRequest();
    request.responseType = 'json';
  
    request.addEventListener("load", function() {loadCompilation(request.responseText);}, false);
    request.open("GET", url, true);
    request.send();
   // return request;
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
                   
                 new init("Rate This Movie");
                   // }
                    
                    var resource = rating.call(this); // get tvml string
//                    var resource = ratingTemplate.rating();
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(resource, "application/xml");
                    navigationDocument.pushDocument(xml);
                    }
                    });

}
function playMedia(event){
    var ele = event.target,
    videoURL = ele.getAttribute("audioURL");
  videoURL = "http://localhost:8000/Badlapur/01%20-%20Badlapur%20-%20Jee%20Karda%20%5BDJMaza.Info%5D.mp3";
    if(videoURL) {
        var player = new Player();
        var playlist = new Playlist();
        var mediaItem = new MediaItem("audio", videoURL);
        player.playlist = playlist;
        player.playlist.push(mediaItem);
        player.present();
    }

}

function loadMenubar(event){
    evaluateScripts(["http://localhost:8000/menuBarTemplate.js"], function(success) {
                    if(success) {
                    var resource = menuBar.call(this); // get tvml string
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(resource, "application/xml");
                    xml.addEventListener("Select", load.bind(this));
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
                    xml.addEventListener("Select", loadRating.bind(this));
                    navigationDocument.pushDocument(xml);
                    
                    }
                    });
}


function loadCompilation(document){
    evaluateScripts(["http://localhost:8000/compilationTemplate.js"], function(success) {
                    if(success) {
                    var obj = JSON.parse(document);                    
                    var resource =  Template(obj);
                    
                   // var resource = compilationTemplate.call(this); // get tvml string
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(resource, "application/xml");
                    xml.addEventListener("Select", playMedia.bind(this));
                    navigationDocument.pushDocument(xml);

                    }
                                     });
    
    
   }
