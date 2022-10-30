// Joke of a code...
window.onAmazonLoginReady = function () {
    amazon.Login.setClientId('amzn1.application-oa2-client.72f9ca26fe1e441eba90e323d5a7c817');
};
(function (d) {
    var a = d.createElement('script'); a.type = 'text/javascript';
    a.async = true; a.id = 'amazon-login-sdk';
    a.src = 'https://assets.loginwithamazon.com/sdk/na/login1.js';
    d.getElementById('amazon-root').appendChild(a);
})(document);

document.getElementById('LoginWithAmazon').onclick = function() {
    setTimeout(window.doLogin, l);
    return false;
 };
 window.doLogin = function() {
     options = {};
     options.scope = 'profile';
     options.pkce = true;
     amazon.Login.authorize(options, function(response) {
         if ( response.error ) {
             alert('oauth error ' + response.error);
         return;
         }
         amazon.Login.retrieveToken(response.code, function(response) {
             if ( response.error ) {
                 alert('oauth error ' + response.error);
             return;
             }
             amazon.Login.retrieveProfile(response.access_token, function(response) {
                 alert('Hello, ' + response.profile.Name);
                 alert('Your e-mail address is ' + response.profile.PrimaryEmail);
                 alert('Your unique ID is ' + response.profile.CustomerId);
                 if ( window.console && window.console.log )
                    window.console.log(response);
             });
         });
     });
};