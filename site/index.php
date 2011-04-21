<html>
<head>
<title>KMZ.ME urlettes</title>
<link rel="stylesheet" href="/style.css" /> 
<style>
.urletter {
	font-weight: bold;
	color: #003;
	font-size: 20pt; 
}
.selectedUrlette, #urlettelink {
	font-size:20pt;
}
input#urletter {
	font-size:20pt;
	width:1em;
	text-align:center;
}
#urlette {
	font-size: 18pt;
}
#url {
	font-size: 14pt;
}
#gobutton {
	font-size: 22pt;
	width: 3em;
	height: 1.5em;
}
.ulb {
	border: 1px solid #888;
}
</style>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script src="jquery-fieldselection.js"></script>
<script language="JavaScript" src="urlettes.js"></script>
<script type="text/javascript"> 
 
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-18073167-1']);
  _gaq.push(['_trackPageview']);
 
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
 
</script></head>
<body>
<div style="width:768px; margin:0 auto 0 auto;">
<h1>Urlettes by <a href="http://kmz.me">KMZ.ME</a></h1>
<div style="float:right"><a id="showHelp" href="javascript:showHelp();">Help</a>
<div id="help" style="display:none">
<a href="javascript:hideHelp();" style="float:right;">Hide Help</a>
<p>A Urlette allows one to query various internet services with just 9 keystrokes</p>
<ol><li>Remeber the URLetter of your favorite services, like g for google, e for ebay, t for twitter</li>
<li>Enter the nine character Urlette starting with the Urletter and folowed by <strong>.kmz.me/</strong></li>
<li>Paste or type your search query</li>
</ol>
<p>How do URLettes work?  No secrets here... It's all <a href="http://kmz.me/readme">documented on github</a>.</p>
</div></div>

<h3 id="helptip"></h3>
<form method="post">
<table style="margin:0 auto 0 auto">
<tr><th colspan="2">URLette:</th><th>Your Query:</th></tr>
<tr class="selectedUrlette"><td>http://<input type="text" size="1" id="urletter"></td><td>.kmz.me/</td><td><input type="text" id="query" style="width:340px"></td><td><input type="button" value="Go" onclick="goToURLette()" class="blue bigrounded" id="gobutton"></td></tr>
</table>
<div id="error" style="color:#f00"></div>
<div id="urletters">
<div style="float:left;font-size:36px;margin: 40px 15px 0 0;">URLetters:</div><script language="JavaScript">showUrletters();</script>
</div>
<h2 id="service"></h2>
<table width="100%" id="result" style="display:none;">
<tr><td id="urlettelink">URLette</td><td><input type="text" name="urlette" id="urlette" style="width:100%"></td>
</div>
<div>
<tr><td>Full URL</td><td><input type="text" name="url" id="url" size="50" style="width:100%"></td></tr>
</table>
</form>
<h2>Recommend a URLette</h2>
Is there a service you'd like to see added here?  Drop me a note by e-mail to <strong>urlettes at kmz dot me</strong> and I'll set it up for you!
<!--<table>
<tr><th class="urletter">URLetter</th><th>Action</th><th>Equivilent</th></tr>
<tr><td class="urletter">g</td><td>Google Search</td><td><td></tr>



igle Search

<h3>Wikipedia</h3>
<h3>
<h3>Maps</h3>
<h4>m.kmz.me/</h4>
-->
</div>
</body>
</html>
