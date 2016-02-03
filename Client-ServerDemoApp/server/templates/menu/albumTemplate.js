//This file outlines the catalogTemplate.
var Template = function() {
    this.BASEURL = "http://localhost:8000/"
    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<stackTemplate>
<banner>
<title>Available Albume</title>
</banner>

<collectionList>



<shelf>
<section>

    <lockup template="http://localhost:8000/templates/musicTemplates/Badlapur.js">
    <img src="http://localhost:8000/music/Badlapur/Folder.jpg" width="500" height="400" />
    <title>Tanu Weds Manu</title> </lockup>

    <lockup template="http://localhost:8000/templates/musicTemplates/TWMR.js">
    <img src="http://localhost:8000/music/Tanu%20Weds%20Manu%20Returns/Folder.jpg" width="500" height="400" />
    <title>Tanu Weds Manu Returns</title> </lockup>
    
    <lockup template="http://localhost:8000/compilationTemplate.js">
    <img src="http://localhost:8000/music/Khamoshiyan/Folder.jpg" width="500" height="400" />
    <title>Khamoshiyan</title> </lockup>

    <lockup template="http://localhost:8000/compilationTemplate.js">
    <img src="http://localhost:8000/music/Action%20Jackson/Folder.jpg" width="500" height="400" />
    <title>Action Jackson</title> </lockup>
    
    
    
    <lockup template="">
    <img src="http://localhost:8000/music/Happy%20Ending/Folder.jpg" width="500" height="400" />
    <title>Happy Ending</title> </lockup>
    
    <lockup template="">
    <img src="http://localhost:8000/music/Hawaizaada/Folder.jpg" width="500" height="400" />
    <title>Hawaizaada</title> </lockup>
    
    <lockup template="">
    <img src="http://localhost:8000/music/I%20%5B2015%5D/Folder.jpg" width="500" height="400" />
    <title>I</title> </lockup>
    
    <lockup template="">
    <img src="http://localhost:8000/music/Kill%20Dil/Folder.jpg" width="500" height="400" />
    <title>Kill 20Dil</title> </lockup>
    
    <lockup template="http://localhost:8000/templates/musicTemplates/MrX.js">
    <img src="http://localhost:8000/music/Mr.%20X/Folder.jpg" width="500" height="400" />
    <title>Mr. X</title> </lockup>
    
</section>
</shelf>





</collectionList>
</stackTemplate>
</document>`
}