// this is the code which will be injected into a given page...
(function ()
{
	var nomeCookie = "pulador_";
	function createCookie (name, value, days)
	{
		var expires;
		if (days)
		{
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		else
		{
			expires = "";
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}
	function getCookie(c_name)
	{
		if (document.cookie.length > 0)
		{
			c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1)
			{
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1)
				{
					c_end = document.cookie.length;
				}
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return 0;
	}

	if(tabId)
	{
		//se aba não tem código rodando
		if(parseInt(getCookie(nomeCookie+tabId)) === 0)
		{
			//grava um cookie pra indicar que essa aba está com código rodando
			createCookie(nomeCookie+tabId, tabId, 365);
			var link = window.location.href;
			var intervalo = setInterval(function ()
			{
				console.log("rodando "+tabId);
				try
				{
					//fecha aquele bannerzinho horizontal que aparece em cima do vídeo
					document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
					console.log("Propaganda fechada");
				}
				catch(err) {}
				try
				{
					//clica no botão de pular o anúncio
					//funciona mesmo quando o botão ainda não apareceu
					document.getElementsByClassName("ytp-ad-skip-button")[0].click();
					console.log("Anúncio pulado");
				}
				catch(err) {}
			}, 200);
		}

		window.addEventListener('beforeunload', (event) =>
		{
			//limpa o cookie da aba atual
			console.log("limpando cookie "+tabId);
			createCookie(nomeCookie+tabId, 0, 0);
		});
	}
	else
	{
		window.location.reload();
	}
})();