    var temp = "";
function init(str){
    temp = str;
}
var rating = function(){

    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<ratingTemplate>
    <title>${temp}</title>
<ratingBadge value="0.6"></ratingBadge>
    <Lockup>
    <title>Go</title>
    </Lockup>
</ratingTemplate>
</document>`
}
