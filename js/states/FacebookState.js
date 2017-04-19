var CashNinja = CashNinja || {};

CashNinja.FacebookState = function () {};

CashNinja.FacebookState.prototype.shareGame = function () {
  // Share game.
  FB.ui({
    method: "feed",
    link: "https://apps.facebook.com/cash-ninja/",
    caption: "Play CashNinja!",
    name: "Get neverending cash and became CashNinja!",
    description: "I already became rich in CashNinja, do you want to try?",
    picture: "https://doyban.com/logos/cashninja.png"
  }, function(response){
    // console.log(response);
  });
};

CashNinja.FacebookState.prototype.shareScore = function(n) {
  // Share game score.
  FB.ui({
    method: "feed",
    link: "https://apps.facebook.com/cash-ninja/",
    caption: "Play CashNinja!",
    name: "My score in CashNinja is " + n + "!",
    description: "I scored " + n + " in CashNinja. Can you beat my score?",
    picture: "https://doyban.com/logos/cashninja.png"
  }, function(response){
    // console.log(response);
  });
};

CashNinja.FacebookState.prototype.inviteFriends = function () {
  // Invite Facebook friends.
  FB.ui({
    method: 'apprequests',
    message: 'Play CashNinja with me!'
  }, function(response){
    // console.log(response);
  });
};

CashNinja.FacebookState.prototype.showProducts = function () {
  // Show Facebook products to purchase in that game.
  FB.api(
    '/app/products',
    'get',
    function(response) {
      // console.log(response);
    }
  );
};

CashNinja.FacebookState.prototype.showPurchases = function () {
  // Show Facebook purchases in that game.
  var that = this;

  FB.getLoginStatus(function (response) {
    // console.log(response.authResponse.accessToken);
    that.token = response.authResponse.accessToken;
  });

  FB.api(
    '/app/purchases',
    'get',
    {access_token: that.token},      // user access token
    function(payload) {        // callback function
      // console.log('purchases payload:');
      // console.log(payload);
    }
  );
};

CashNinja.FacebookState.prototype.consumePurchase = function (purchase_token, product_id) {
  // Consume Facebook purchases in that game.
  var that = this;

  FB.getLoginStatus(function (response) {
    // console.log(response.authResponse.accessToken);
    that.token = response.authResponse.accessToken;
  });

  FB.api(
    '/' + purchase_token + '/consume',    // Replace the PURCHASE_TOKEN
    'post',
    {access_token: that.token},         // Replace with a user access token TODO: find access_token of user
    function (result) {
      // console.log('consuming product: ', product_id, 'with purchase token', purchase_token);
      // console.log('Result:');
      // console.log(result);
    }
  );
};