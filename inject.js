// this is the code which will be injected into a given page...
(function()
{
	console.log("Código chamado");
	var intervalo = setInterval(function()
	{
		//controla se vc tá vendo um vídeo ou não
		if(window.location.href.includes("watch"))
		{
			try
			{
				try
				{
					//fecha aquele bannerzinho horizontal que aparece em cima do vídeo
					document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
					console.log("Propaganda fechada ;)");
				}
				catch(err)
				{}
				//clica no botão de pular o anúncio
				//funciona mesmo quando o botão ainda não apareceu
				document.getElementsByClassName("ytp-ad-skip-button")[0].click();
				console.log("Anúncio pulado bb");
			}
			catch(err)
			{}
		}
	}, 500);
})();

