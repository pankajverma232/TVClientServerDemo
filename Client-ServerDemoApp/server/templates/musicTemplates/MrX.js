var Template = function(){
    var BASEURL = "http://localhost:8000/music/";
   var moiveName = "Mr.%20X";
   var url = BASEURL+moiveName+"/";
   var count = 0;
   var music = [{
    title : "01%20-%20Mr.%20X%20-%20Tu%20Jo%20Hain%20%5BDJMaza.Info%5D.mp3",
    length  : "4:45"
},
{
    title :  "02%20-%20Mr.%20X%20-%20Mr.%20X%20%5BDJMaza.Info%5D.mp3",
    length  : "5:35"
},
{
    title :  "03%20-%20Mr.%20X%20-%20Saad%20Shukrana%20%5BDJMaza.Info%5D.mp3",
    length  : "6:12"
},
{
    title :  "04%20-%20Mr.%20X%20-%20Alif%20Se%20%5BDJMaza.Info%5D.mp3",
    length  : "4:53"
},
{
    title : "05%20-%20Mr.%20X%20-%20Teri%20Khushboo%20%28Male%20Version%29%20%5BDJMaza.Info%5D.mp3",
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
   
    </section>
</list>
</compilationTemplate>
</document>`
}