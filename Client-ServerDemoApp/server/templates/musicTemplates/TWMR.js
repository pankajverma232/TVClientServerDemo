var Template = function(){
    var BASEURL = "http://localhost:8000/music/";
   var moiveName = "Tanu%20Weds%20Manu%20Returns";
   var url = BASEURL+moiveName+"/";
   var count = 0;
   var music = [{
    title : "01%20-%20TWMR%20-%20Banno%20%5BDJMaza.Info%5D.mp3",
    length  : "4:45"
},
{
    title :  "02%20-%20TWMR%20-%20Move%20On%20%5BDJMaza.Info%5D.mp3",
    length  : "5:35"
},
{
    title :  "03%20-%20TWMR%20-%20Mat%20Ja%20Re%20%5BDJMaza.Info%5D.mp3",
    length  : "6:12"
},
{
    title :  "04%20-%20TWMR%20-%20Ghani%20Bawri%20%5BDJMaza.Info%5D.mp3",
    length  : "4:53"
},
{
    title : "05%20-%20TWMR%20-%20Old%20School%20Girl%20%5BDJMaza.Info%5D.mp3",
    length  : "4:44"
},
{
    title :  "07%20-%20TWMR%20-%20Ho%20Gaya%20Hai%20Pyar%20%5BDJMaza.Info%5D.mp3",
    length  : "4:53"
}];
   
    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<compilationTemplate theme="light">
<list>

    <relatedContent>
        <itemBanner>
            <heroImg src= "${url}Folder.jpg" />
            <row>

                <buttonLockup template="${this.BASEURL}templates/extra/ratingTemplate.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
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