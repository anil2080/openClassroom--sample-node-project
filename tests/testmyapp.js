module.exports = {
    'Demo test mylocalapp' : function (browser) {
      browser
        .url('http://localhost:3000/')
        .waitForElementVisible('body')
        .pause(1000)
        .assert.containsText('body > pre', "You're at the reception desk. How can I help you?")
    },
    'step two: Check route Private' : function (browser) {
        browser
          .url('http://localhost:3000/floor/1/bedroom')
          .waitForElementVisible('body')
          .pause(1000)
          .assert.containsText('body > pre', "Hey, this is a private area!")
      },
    'step three: Check route basement' : function (browser) {
        browser
        .url('http://localhost:3000/basement')
        .waitForElementVisible('body')
        .pause(1000)
        .assert.containsText('body > pre', "You're in the wine cellar. These bottles are mine!")
          .end();
      }
  };