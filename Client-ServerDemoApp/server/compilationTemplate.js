var mediaFiles ;
var info;
//function init(dict){
//    mediaFiles = dict.media.mediaFiles;
//    info = dict.media.info
//    banner = dict.media.banner;
//}
var Template = function(){
    var dict = this.extra;
    mediaFile = dict.media.mediaFiles[1];
    info = dict.media.info
    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<compilationTemplate theme="light">
<list>
<relatedContent>
<itemBanner>
<heroImg src= "${mediaFile.banner}" />
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
    <title>${info.title}</title>
    <subtitle>${mediaFile.subtitle}</subtitle>
<row>
   
<text>6 Songs</text>
<text>2015</text>
</row>
</header>
<section>
    <description>${info.description}</description>
</section>
<section>
    <listItemLockup mediaURL="${mediaFile.media0.url}">
    <ordinal minLength="2">1</ordinal>
    <title>${decodeURIComponent(mediaFile.media0.title)}</title>
    <decorationLabel>${mediaFile.media0.length}</decorationLabel>
</listItemLockup>
    <listItemLockup mediaURL="${mediaFile.media1.url}">>
    <ordinal minLength="2">2</ordinal>
    <title>${decodeURIComponent(mediaFile.media1.title)}</title>
    <decorationLabel>${mediaFile.media1.length}</decorationLabel>
    </listItemLockup>
    <listItemLockup mediaURL="${mediaFile.media2.url}">>
    <ordinal minLength="2">3</ordinal>
    <title>${decodeURIComponent(mediaFile.media2.title)}</title>
    <decorationLabel>${mediaFile.media2.length}</decorationLabel>
    </listItemLockup>
    <listItemLockup mediaURL="${mediaFile.media3.url}">>
    <ordinal minLength="2">4</ordinal>
    <title>${decodeURIComponent(mediaFile.media3.title)}</title>
    <decorationLabel>${mediaFile.media3.length}</decorationLabel>
    </listItemLockup>
    <listItemLockup mediaURL="${mediaFile.media4.url}">>
    <ordinal minLength="2">5</ordinal>
    <title>${decodeURIComponent(mediaFile.media4.title)}</title>
    <decorationLabel>${mediaFile.media4.length}</decorationLabel>
    </listItemLockup>
    <listItemLockup mediaURL="${mediaFile.media5.url}">>
    <ordinal minLength="2">6</ordinal>
    <title></title>
    <decorationLabel>${mediaFile.media5.length}</decorationLabel>
    </listItemLockup>
    </section>
</list>
</compilationTemplate>
</document>`
}