
const plaidProducts = ['auth','transactions','identity'];
const crountryCodes = ['US'];
const redirectUri = 'http://localhost:3000';



(async function($) {

  //create a temporary token
    const response = await $.post('http://127.0.0.1:8000/api/create_link_token');
    const linkToken = response.link_token;

    var handler = Plaid.create({
    token: linkToken,
    receivedRedirectUri: null,


    onSuccess: function(public_token, metadata) {
      console.log('Link token created ')
      console.log('Temporary public token: ', public_token);

      // Send the public_token to your app server to exchange token and get a permanent token
      $.post('http://127.0.0.1:8000/api/set_access_token', {
        public_token: public_token, 
        }, function(setAccessTokenResponse){
            console.log('Response from server: ', setAccessTokenResponse);
            getBalance();
      });
    },
    onExit: function(err, metadata) {
      if (err != null) { 
        console.log('Plaid API error: ', err);
      }
      console.log('Exit metadata: ', metadata);
    }
  });

  $('#link-button').on('click',function(e){
    handler.open();
  });


  async function getBalance() {
    try {  
    fetch('http://localhost:8000/api/balance')
     .then(response => response.json())
     .then(data => {
       console.log('fetch balance ', data)
     });
  } catch (error) {
    console.error('Error: ', error);
    return null;
  }
}
})
(jQuery);




