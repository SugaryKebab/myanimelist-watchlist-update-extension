
function generateCodeChallange() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  
    for (var i = 0; i < 128; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  
    return text;
  }


  document.getElementById("myButton").addEventListener("click", loadlink);

  function loadlink(){
    var code_challange = generateCodeChallange();
    var url=`https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=d96130ee95e1acf4eeedbe509353732b&code_challenge=${code_challange}`;
    document.getElementById("link").innerHTML=`<a href=${url}> Tıkla bana</a>` ;
  }