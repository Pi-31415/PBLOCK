var urllist = ['youtube.com', 'paingthet.com', 'outlook', 'mail', 'mail.google.com', 'paypal', 'ibo', '.me', '.life', 'edx.org', '.org', '.edu', 'coursera', 'github', 'zw.paingthet.com', 'protonmail', 'lin.ai', 'learningchinesethroughstories.com', 'dictation.io', 'instapaper', 'translate.google.com', 'levels.io', 'www.economist.com', 'calendar.google.com', 'docs.google.com', 'linkedin.com', 'www.w3schools.com', 'news.ycombinator.com', 'extensions', 'drive.google.com'];
var url = window.location.href;
var i;
for (i = 0; i < urllist.length; i++) {
    if (url.includes(urllist[i]) == true) {
        alert("Porn");
    } else if (url.includes(urllist[i]) == false) {
        alert("Not Porn");
    }
}