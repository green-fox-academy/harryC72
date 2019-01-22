
'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';




let temp: string[] = url.split('');
temp.splice(-4, 4);
temp.splice(5, 0, ':');
console.log(temp);
// temp = temp2.splice(5, 0, ':');
url = temp.join('');
let tempString: string = url.concat('bots');
url = tempString;
console.log(url);
