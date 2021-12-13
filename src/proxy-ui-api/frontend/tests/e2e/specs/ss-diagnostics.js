/*
 * The MIT License
 * Copyright (c) 2019- Nordic Institute for Interoperability Solutions (NIIS)
 * Copyright (c) 2018 Estonian Information System Authority (RIA),
 * Nordic Institute for Interoperability Solutions (NIIS), Population Register Centre (VRK)
 * Copyright (c) 2015-2017 Estonian Information System Authority (RIA), Population Register Centre (VRK)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var assert = require('assert');

let mainPage, diagnosticsTab, navigationBar;

module.exports = {
  tags: ['ss', 'diagnostics'],
  before: function (browser) {
    // populate pageObjects before all other tests
    mainPage = browser.page.ssMainPage();
    diagnosticsTab = browser.page.tabs.diagnosticsTab();

    //common elements
    const navigationBar = mainPage.section.navigationBar;

    // login to system using default username and password
    browser.LoginCommand();
  },

  after: function (browser) {
    browser.end();
  },

  'Field JavaVersion contains numeric data': (browser) => {
    // Navigate to target page
    navigationBar.openDiagnosticsTab();
    browser
      .waitForElementVisible(diagnosticsTab.elements.javaVersion)
      .getText(diagnosticsTab.elements.javaVersion, function (javaVersion) {
        assert(typeof javaVersion.value === 'string', 'is not a string');
        assert(
          !isNaN(javaVersion.value) && !isNaN(parseFloat(javaVersion.value)),
          'value is not number',
        );
      });
  },
};
