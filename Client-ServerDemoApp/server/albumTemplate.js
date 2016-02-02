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
<lockup template="http://localhost:8000/compilationTemplate.js">

<img src="http://localhost:8000/Badlapur/Folder.jpg" width="500" height="400" />

<title>Tanu Weds Manu</title> </lockup>
<lockup template="http://localhost:8000/compilationTemplate.js">
<img src="http://localhost:8000/Tanu%20Weds%20Manu%20Returns%20%5B2015-MP3-VBR-320Kbps%5D%20-%20%5BDJMaza%5D/Folder.jpg" width="500" height="400" />
<title>Badlapur</title> </lockup>
    
    <lockup template="http://localhost:8000/compilationTemplate.js">
    
    <img src="http://localhost:8000/Khamoshiyan%20%5B2015-MP3-VBR-320Kbps%5D%20-%20%5BDJMaza%5D/Folder.jpg" width="500" height="400" />
    
    <title>Khamoshiyan</title> </lockup>


</section>
</shelf>





</collectionList>
</stackTemplate>
</document>`
}