# PlaywrightDebugDemo
<h1> Playwright in Typescript - Demo project for debugging </h1>
<p>This is a demo project for debugging using Playwright Inspector, tracing, HTML and Allure reports.


Demo is refactored from initial start up project: <a href="https://github.com/arsicl/PlaywrightDebugDemoStart/tree/master">PlaywrightDebugDemoStart</a>
</p>
<h1>Setting up project</h1>
<ol>
<li> Creating package.json file inside root folder:


<code>npm init</code>
</li>

<li>Installing playwright browsers, creating tests/ folder


<code>npm i playwright</code>
 </li>
 
 <li>Installing a playwright test-runner


<code>npm i @playwright/test</code>
 </li>

 <li>Adding Allure integration with Playwright


 <code>npm i -D allure-playwright</code>
 </li>
 
 <li>Installing Allure Commandline - a tool used to generate Allure reports from test results:


<code>npm i -D allure-commandline</code>
</li>
 </ol>




 <h1>Showing reports</h1>
 <ol>
 <li> HTML report


 <code>npx playwright show-report</code>
 </li>

 <li> Show trace


 <code> npx playwright show-trace </code>
 </li>

<li> Genearte and show Allure report (JAVA_HOME variable should be set to JDK installation path)


<code>npx allure generate ./allure-results --clean </code>

<code>npx allure open ./allure-report </code>
</li>

 </ol>
 
