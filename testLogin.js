const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
const assert = require('assert')

async function testLogin() {
    let testPassed = true;
    try {
        // Open the browser and navigate to your website
        await openBrowser();
        await goto('https://practicetestautomation.com/practice-test-login/');

        // Enter username and password, then click the login button
        await click('Username')
        await write('student');
        await click('Password')
        await write('Password123');
        await click('submit');

        // Add assertions or further testing as needed
        // Example: assert the user is redirected to the dashboard
        const currentUrl = await currentURL();
        assert.strictEqual(currentUrl, 'https://practicetestautomation.com/logged-in-successfully/','Login failed');
    }
    catch(error){
        console.error(error.message)
        testPassed=false
    }
    finally {
    // Close the browser after the test
    await closeBrowser();
  }
  process.exit(testPassed?0:1);
}

// Run the test
testLogin();
