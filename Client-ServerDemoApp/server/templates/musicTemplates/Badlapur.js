var Template = function(){


    var BASEURL = "http://localhost:8000/music/";
   var moiveName = "Badlapur";
   var url = BASEURL+moiveName+"/";
   var count = 0;
   var music = [{
    title : "01%20-%20Badlapur%20-%20Jee%20Karda%20%5BDJMaza.Info%5D.mp3",
    length  : "4:45"
},
{
    title :  "02%20-%20Badlapur%20-%20Jeena%20Jeena%20%5BDJMaza.Info%5D.mp3",
    length  : "5:35"
},
{
    title :  "03%20-%20Badlapur%20-%20Jee%20Karda%20%28Rock%20Version%29%20%5BDJMaza.Info%5D.mp3",
    length  : "6:12"
},
{
    title :  "04%20-%20Badlapur%20-%20Judaai%20%5BDJMaza.Info%5D.mp3",
    length  : "4:53"
},
{
    title : "05%20-%20Badlapur%20-%20Jeena%20Jeena%20%28Remix%29%20%5BDJMaza.Info%5D.mp3",
    length  : "4:44"
}];
   




    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<compilationTemplate theme="light">
<list>

    <relatedContent>
        <itemBanner>
            <heroImg src= "${url}Folder.jpg" />
            <row>

                <buttonLockup template="${this.BASEURL}ratingTemplate.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <badge src="resource://button-rate"/>
                    <title>Rate</title>
                </buttonLockup>

                <buttonLockup>
                    <badge src="resource://button-shuffle"/>
                    <title>Shuffle</title>
                </buttonLockup>

            </row>
        </itemBanner>
    </relatedContent>

    <header>
         <title>${decodeURIComponent(moiveName)}</title>
        <subtitle>Soundtrack : ${decodeURIComponent(moiveName)}</subtitle>
        <row>   
            <text>6 Songs</text>
            <text>2015</text>
        </row>
    </header>
    <section>
        <description>No description available</description>
    </section>
    <section>

        <listItemLockup mediaURL="${url+music[count].title}">
        <ordinal minLength="2">${count}</ordinal>
        <title>${decodeURIComponent(music[count].title)}</title>
        <decorationLabel>${music[count++].length}</decorationLabel>
        </listItemLockup>


        <listItemLockup mediaURL="${url+music[count].title}">
        <ordinal minLength="2">${count}</ordinal>
        <title>${decodeURIComponent(music[count].title)}</title>
        <decorationLabel>${music[count++].length}</decorationLabel>
        </listItemLockup>


        <listItemLockup mediaURL="${url+music[count].title}">
        <ordinal minLength="2">${count}</ordinal>
        <title>${decodeURIComponent(music[count].title)}</title>
        <decorationLabel>${music[count++].length}</decorationLabel>
        </listItemLockup>


        <listItemLockup mediaURL="${url+music[count].title}">
        <ordinal minLength="2">${count}</ordinal>
        <title>${decodeURIComponent(music[count].title)}</title>
        <decorationLabel>${music[count++].length}</decorationLabel>
        </listItemLockup>


        <listItemLockup mediaURL="${url+music[count].title}">
        <ordinal minLength="2">${count}</ordinal>
        <title>${decodeURIComponent(music[count].title)}</title>
        <decorationLabel>${music[count++].length}</decorationLabel>
        </listItemLockup>
   
    </section>
</list>
</compilationTemplate>
</document>`
}