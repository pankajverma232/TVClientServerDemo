var resourceLoader;
App.onLaunch = function(options) {
                             var javascriptFiles = [
                                                    `${options.BASEURL}scripts/ResourceLoader.js`,
                                                    `${options.BASEURL}scripts/Presenter.js`
                                                    ];
                             // load ResourceLoader and Presenter in application
                             evaluateScripts(javascriptFiles, function(success) {
                                             if (success) {
                                             resourceLoader = new ResourceLoader(options.BASEURL);
                                             
                                             var index = resourceLoader.loadResource(`${options.BASEURL}templates/menuBarTemplate.js`,
                                                                                     function(resource) {
                                                                                     var doc = Presenter.makeDocument(resource);
                                                                                     doc.addEventListener("select", Presenter.load.bind(Presenter));
                                                                                     navigationDocument.pushDocument(doc);
                                                                                     });
                                             } else {
                                             var alert = createAlert("Evaluate Scripts Error", "There was an error attempting to evaluate the external JavaScript files.\n\n Please check your network connection and try again later.");
                                             navigationDocument.presentModal(alert);
                                             
                                             throw ("Playback Example: unable to evaluate scripts.");
                                             }
                                             
                                             });
    
    
   }



var createAlert = function(title, description) {

    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <alertTemplate>
            <title>${title}</title>
            <description>${description}</description>
          </alertTemplate>
        </document>`

    var parser = new DOMParser();

    var alertDoc = parser.parseFromString(alertString, "application/xml");

    return alertDoc
}


/*  below code is used by Presenter if You implement SearchController */

var buildResults = function(doc, searchText) {

    //simple filter and helper function
    var regExp = new RegExp(searchText, "i");
    var matchesText = function(value) {
        return regExp.test(value);
    }

    //sample data for search example
    var movies = {
        "The Puffin": 1,
        "Lola and Max": 2,
        "Road to Firenze": 3,
        "Three Developers and a Baby": 4,
        "Santa Cruz Surf": 5,
        "Cinque Terre": 6,
        "Creatures of the Rainforest": 7
    };
    var titles = Object.keys(movies);

    //Create parser and new input element
    var domImplementation = doc.implementation;
    var lsParser = domImplementation.createLSParser(1, null);
    var lsInput = domImplementation.createLSInput();

    //set default template fragment to display no results
    lsInput.stringData = `<list>
      <section>
        <header>
          <title>No Results</title>
        </header>
      </section>
    </list>`;

    //Apply filter to titles array using matchesText helper function
    titles = (searchText) ? titles.filter(matchesText) : titles;

    //overwrite stringData for new input element if search results exist by dynamically constructing shelf template fragment
    if (titles.length > 0) {
        lsInput.stringData = `<shelf><header><title>Results</title></header><section id="Results">`;
        for (var i = 0; i < titles.length; i++) {
            lsInput.stringData += `<lockup>
          <img src="${this.resourceLoader.BASEURL}SUB.jpg" width="350" height="520" />
          <title>${titles[i]}</title>
        </lockup>`;
        }
        lsInput.stringData += `</section></shelf>`;
    }

    //add the new input element to the document by providing the newly created input, the context, 
    //and the operator integer flag (1 to append as child, 2 to overwrite existing children)
    lsParser.parseWithContext(lsInput, doc.getElementsByTagName("collectionList").item(0), 2);
}
