var Template = function(){ return `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <menuBarTemplate>
    <menuBar>
  
    <menuItem id="navigation_genres" data-identifier="index" template="http://localhost:8000/albumTemplate.js" presentation="menuBarItemPresenter" >
    <title>Albums</title>
    </menuItem>
    
    <menuItem template="http://localhost:8000/stackTemplate.js" presentation="menuBarItemPresenter">
    <title>Top Movies</title>
    </menuItem>
    
    <menuItem template="http://localhost:8000/compilationTemplate.js" presentation="menuBarItemPresenter">
    <title>Badlapur</title>
    </menuItem>
    
    <menuItem id="navigation_edit" data-identifier="edit">
    <title>Edit</title>
    </menuItem>
    
    <menuItem id="navigation_settings_add" data-identifier="add_settings">
    <title>Add Settings</title>
    </menuItem>
    
    </menuBar>
    </menuBarTemplate>
    
    </document>`
}
