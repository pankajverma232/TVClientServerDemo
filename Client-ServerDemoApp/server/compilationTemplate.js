var compilationTemplate = function(){ return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<compilationTemplate theme="light">
<list>
<relatedContent>
<itemBanner>
<heroImg src="path to images on your server/Car_Movie_720x1080" />
<row>
<buttonLockup>
<badge src="resource://button-add"/>
<title>Add</title>
</buttonLockup>
<buttonLockup>
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
<title>WWDC Roadtrip Soundtrack</title>
<subtitle>Various Artists</subtitle>
<row>
<text>Instrumental</text>
<text>5 Songs</text>
<text>2015</text>
</row>
</header>
<section>
<description>Songs from your favorite movie</description>
</section>
<section>
<listItemLockup>
<ordinal minLength="2">1</ordinal>
<title>Opening sequence</title>
<decorationLabel>11:14</decorationLabel>
</listItemLockup>
<listItemLockup>
<ordinal minLength="2">2</ordinal>
<title>Fight song</title>
<decorationLabel>3:47</decorationLabel>
</listItemLockup>
<listItemLockup>
<ordinal minLength="2">3</ordinal>
<title>Love theme</title>
<decorationLabel>6:48</decorationLabel>
</listItemLockup>
<listItemLockup>
<ordinal minLength="2">4</ordinal>
<title>Car chase</title>
<decorationLabel>5:21</decorationLabel>
</listItemLockup>
<listItemLockup>
<ordinal minLength="2">5</ordinal>
<title>End credit theme</title>
<decorationLabel>8:03</decorationLabel>
</listItemLockup>
</section>
</list>
</compilationTemplate>
</document>`
}