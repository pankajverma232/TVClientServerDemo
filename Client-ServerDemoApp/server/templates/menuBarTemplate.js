var Template = function(){ return `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <menuBarTemplate>
    <menuBar>
  
    <menuItem id="navigation_genres" data-identifier="index" template="http://localhost:8000/templates/menu/albumTemplate.js" presentation="menuBarItemPresenter" >
    <title>Albums</title>
    </menuItem>
    
    <menuItem template="http://localhost:8000/templates/menu/stackTemplate.js" presentation="menuBarItemPresenter">
    <title>Top Movies</title>
    </menuItem>
    
    <menuItem template="http://localhost:8000/templates/musicTemplates/Badlapur.js" presentation="menuBarItemPresenter">
    <title>Badlapur</title>
    </menuItem>
    
       
    <menuItem template="http://localhost:8000/templates/extra/descriptiveTemplate.js" presentation="menuBarItemPresenter">
    <title>About</title>
    </menuItem>
    
    </menuBar>
    </menuBarTemplate>
    
    </document>`
}
