const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
const assert = require('assert')

async function testLogin() {
  try {
    // Open the browser and navigate to your website
    await openBrowser();
    await goto('https://practicetestautomation.com/practice-test-login/');

    // Enter username and password, then click the login button
    await click('Username')
    await write('student');
    await click('Password')
    await write('Password1234');
    await click('submit');

    // Add assertions or further testing as needed
    // Example: assert the user is redirected to the dashboard
    const currentUrl = await currentURL();
    assert.strictEqual(currentUrl, 'https://practicetestautomation.com/logged-in-successfully/','Login failed');
  } finally {
    // Close the browser after the test
    await closeBrowser();
  }
}

// Run the test
testLogin();
