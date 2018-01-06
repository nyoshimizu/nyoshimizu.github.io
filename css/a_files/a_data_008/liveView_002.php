(function () {
	function getUrl()
	{
		var url = null;
		if (parent !== window)
			url = document.referrer;
		else
			url = window.location.href;

		return url;
	}

	var url = 'https://live.sekindo.com/live/liveView.php?s=59070&pubUrl=https://www.maketecheasier.com/check-sha1-sha256-sha512-hashes-on-linux/&subId=Unit02&nofr=1' + '&pubUrlAuto=' + encodeURIComponent(getUrl());
	document.write(unescape("%3Cscript src='") + url + unescape("' type='text/javascript'%3E%3C/script%3E"));
})();
