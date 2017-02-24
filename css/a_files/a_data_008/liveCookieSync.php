	function callCookieSync(url)
	{
		try
		{
			var oImg = document.createElement("img");
			oImg.setAttribute('src', url);
			oImg.setAttribute('height', '0px');
			oImg.setAttribute('width', '0px');
			oImg.style.display = "none";
			document.body.appendChild(oImg);
		}
		catch(e)
		{
			var code = '<img src="'+url+'" height="0px" width="0px" ></img>';
			document.write(code);
		}
	};		callCookieSync("https://idsync.rlcdn.com/447736.gif?partner_uid=576e1398e3890");
