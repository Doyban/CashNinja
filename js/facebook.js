var preloadedInterstitial = null;

// Initialize Messenger SDK.
(function initSDK() {
  // Required methods to open Messenger game.
  FBInstant.initializeAsync();
  FBInstant.setLoadingProgress(100);
  FBInstant.startGameAsync();
}());

// Initialize Messenger ads.
function initAds() {
  FBInstant.getInterstitialAdAsync(
    '1363526827118027_1363545730449470' // Your Ad Placement Id
  ).then(function(interstitial) {
    // Load the Ad asynchronously
    preloadedInterstitial = interstitial;
    return preloadedInterstitial.loadAsync();
  }).then(function() {
  }).catch(function(err){
  });
}

// Initialize code to display ads.
function showAds() {
  preloadedInterstitial.showAsync()
    .then(function() {
    })
    .catch(function(e) {
    });
}

// Quit game.
function exitGame() {
  FBInstant.quit();
}

// Invite friends.
function inviteGame() {
  FBInstant.shareAsync({
    intent: 'INVITE',
    image: 'https://doyban.com/logos/cashninja.png',
    text: 'Play YellowSidd on Messenger!',
    data: { myReplayData: '...' }
  }).then(function() {
  });
}

// Share game.
function shareGame() {
  FBInstant.shareAsync({
    intent: 'SHARE',
    image: 'https://doyban.com/logos/cashninja.png',
    text: 'Play YellowSidd on Messenger!',
    data: { myReplayData: '...' }
  }).then(function() {
  });
}

// Share score.
function shareScore(score) {
  FBInstant.shareAsync({
    intent: 'SHARE',
    image: 'https://doyban.com/logos/cashninja.png',
    text: 'My score in CashNinja is ' + score + '.',
    data: { myReplayData: '...' }
  }).then(function() {
  });
}
