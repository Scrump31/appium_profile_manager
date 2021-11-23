# Automated Native Android Appium WebdriverIO Tests

## Overview

This application is a simple native Android Profile Manager application that allows users to log in, update their information, and log out. The focus of this project is testing the application using [Appium](https://appium.io/) with [WebdriverIO](https://webdriver.io/) written in [TypeScript](https://www.typescriptlang.org/).

## Getting Started

Assuming you already have NodeJS installed on your machine, install application dependencies using the following:

```shell
npm install
```

You will also need to have all associated Appium dependencies and an Android emulator installed on your machine. Check out my blog, [Test a Native Android App with Appium and WebdriverIO](https://scottiecrump.com/blog/wdio/test-a-android-app-appium-wdio-part-1) for helpful links to get setup.

## Folder Structure

Configuration files live in the `config` directory. The Page Object Model is used to organize framework code and lives in the `test/pageObjects` directory. Test data lives in the `test/data` directory. Finally, tests live in the `test/specs` directory.

## Running Tests

There are two scripts to run the test. The first script runs the application locally:

```shell
npm run wdio
```

The second script runs the application on BrowserStack:

```shell
npm run wdio.browserstack
```

You will need to have a [BrowserStack](https://www.browserstack.com/) account with environment variables set for `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`, and `BROWSERSTACK_APP_ID` to run tests on their platform.

## Reports

[AllureReport](https://webdriver.io/docs/allure-reporter/) reports are created after each test run and are stored in the **allure-results** folder. Use the following script to generate an HTML viewable report:

```shell
npm run report
```

[Junit Reporter](https://webdriver.io/docs/junit-reporter/) reports are created after each test run and are stored in the **junit-report** folder.

## Jenkins

A `Jenkinsfile` is located in the project root if running tests on a [Jenkins](https://www.jenkins.io/) server is desired.
