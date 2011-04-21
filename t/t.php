<html><head><title>redirecting...</title>
<body><script language="JavaScript">
var loc="http://twitter.com/\#!/search/<?echo $_GET['query']?>"+(location.hash!=''?escape(location.hash):'');
window.location.href=loc;
</script></body></html>
