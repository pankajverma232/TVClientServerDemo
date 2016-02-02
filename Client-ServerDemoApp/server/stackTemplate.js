//This file outlines the catalogTemplate.
var Template = function() {
    this.BASEURL = "http://localhost:8000/"
    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<stackTemplate>
<banner>
<title>Available Action Movies</title>
</banner>

<collectionList>

<banner>
<title>Todays Movies</title>
</banner>



<shelf>
<section>

<lockup videoURL="http://www.rwdevcon.com/videos/Ellen-Shapiro-Starting-Over.mp4">
<img src="${this.BASEURL}images/ellen.png" width="500" height="400" />
<title>Movie 1</title> </lockup>
<lockup videoURL="http://www.rwdevcon.com/videos/Jake-Gundersen-Opportunity.mp4">
<img src="${this.BASEURL}images/jake.png" width="500" height="400" />
<title>Movie 1</title> </lockup>
<lockup videoURL="http://www.rwdevcon.com/videos/Kim-Pedersen-Finishing.mp4">
<img src="${this.BASEURL}images/kim.png" width="500" height="400" />
<title>Movie 1</title> </lockup>
<lockup videoURL="http://www.rwdevcon.com/videos/Tammy-Coron-Possible.mp4">
<img src="${this.BASEURL}images/tammy.png" width="500" height="400" />
<title>Movie 1</title> </lockup>


<lockup videoURL="http://www.rwdevcon.com/videos/Saul-Mora-NSBrief.mp4">
<img src="${this.BASEURL}images/saul.png" width="500" height="400" />
<title>Movie 1</title> </lockup>
</section>

</shelf>



</collectionList>
</stackTemplate>
</document>`
}