var urlettes = [
	{urletter:'a',name:'Amazon',equiv:'http://www.amazon.com/s/?field-keywords='},
	{urletter:'b',name:'Bing',equiv:'http://www.bing.com/search?q='},
	{urletter:'d',name:'Wiktionary',equiv:'http://en.wiktionary.org/wiki/'},
	{urletter:'g',name:'Google',equiv:'http://www.google.com/search?q='},
	{urletter:'i',name:'Images',equiv:'http://www.google.com/search?q='},
	{urletter:'m',name:'Maps',equiv:'http://maps.google.com/?q='},
	{urletter:'q',name:'Wikiquotes',equiv:'http://en.wikiquote.org/wiki/'},
	{urletter:'s',name:'Shopping',equiv:'http://www.google.com/search?tbs=shop%3A1&q='},
	{urletter:'t',name:'Twitter',equiv:'http://twitter.com/#!/search/'},
	{urletter:'w',name:'Wikipedia',equiv:'http://en.wikipedia.org/wiki/'}
];
var thisUrlette=urlettes[2];
var query='';
//$().ready(function() {

function showUrletters() {
	document.write('<table width="420"><tr>');
	for(var i=0;i<urlettes.length;i++) {
		var urlette=urlettes[i];
		var thisEvent = ' onclick="clickUrletter('+i+');"';
		document.write('<td class="urletter"'+thisEvent+'>' + urlette.urletter + '</td><td'+thisEvent+'>' + urlette.name + '</td>');
		if (i % 3==2) {
			document.write('</tr><tr>');
		}
	}
	document.write('</tr></table>');
}
function clickUrletter(index) {
	useUrlette(index);
	$('#urletter').val(thisUrlette.urletter);
}
function useUrlette(index) {
	thisUrlette = urlettes[index];
	calcUrlette();
	try {$('#helptip').html("Now enter your search query");
	} catch(e){alert(e)}
	$('#urletters').hide();
	$('#result').show();
	$('#service').html(thisUrlette.name + " URLette");
	$('#query').focus();
}
function checkUrletter(event) {
	var urletter = String.fromCharCode(event.charCode);
	for(var i=0; i<urlettes.length;i++) {
		if (urlettes[i].urletter==urletter) {
			useUrlette(i);
			calcUrlette();
			return true;
		}
	}
	$('#error').html('Sorry "'+urletter+'" is not a valid urletter');
	return false;
}
var oneMoreBack=false;
var qlen=0;
function queryKeyDown(event) {
	qlen=$('#query').val().length;
}
function checkQuery(event) {
//	var qlen=$('#query').val().length;
	
	var range = $('#query').getSelection();
	//if (range.start==0 && oneMoreBack==true && (event.keyCode == 37 || event.keyCode == 8)) {
	//	oneMoreBack=false;
	//} else 
	if (range.start==0 && qlen==0 && (event.keyCode == 37 || event.keyCode == 8)) {
		showURLetterTip();
		$('#urletter').select();
	} else if(event.keyCode== 13) {
		goToURLette();
		return false;
	} 
	else {
		query=$('#query').val() + String.fromCharCode(event.charCode);
		calcUrlette();
	}
//	$('#error').html(range.start + ' - ' + event.keyCode);
	return true;
}
var thisURLette = '';
function calcUrlette() {
//	var query = $('#query').val();
	thisURLette = 'http://'+thisUrlette.urletter+'.kmz.me/'+query;
	var url = thisUrlette.equiv+query;
	$('#urlette').val(thisURLette);
	$('#urlettelink').html('<a href="'+$('#urlette').val()+'" target="_new">URLette</a>');
	$('#url').val(url);
	$('#error').html('');

}
function showURLetterTip() {
	$('#helptip').html("Click or type a URLetter");
	$('#urletters').show();
	$('#result').hide();
}
function goToURLette() {
	if (thisURLette != '') {
		document.location.href= thisURLette;
	} else {
		$('#error').html('at least select a urletter');
	}
}
$().ready(function () { 
	$('#urletter').keypress(checkUrletter);
	$('#query').keydown(queryKeyDown);
	$('#query').keyup(checkQuery);
	$('#urletter').mouseup(function() {this.select();
		showURLetterTip();
	});
//	$('#urletter').focus(function() {$('#helptip').html("Click or type a URLetter");});
	$('#urletter').focus();
	$('#url').click(function() {this.select()});
	$('#urlette').click(function() {this.select()});
	showURLetterTip();
});
function showHelp() {
	$('#showHelp').hide();
	$('#help').show();
}
function hideHelp() {
        $('#showHelp').show();
        $('#help').hide();
}
