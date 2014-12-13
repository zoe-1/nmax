<h1> NMAX </h1>

<pre>Skeleton project:<br/>
N = Node.js
M = MongoDB
A = Angularjs
X = Express
</pre>

<h2>Installation</h2>
<code>
git clone https://github.com/zoe-1/nmax.git<br/>
cd nmax<br/>
npm install npm@X.X.X current version.<br>
npm install<br>
npm run update-webdriver<br>
</code>


<h3>Install Behind Proxy</h3>
<p>Must know proxy IP address and port used.<br/>
This skeleton has been tested on Mac and Ubuntu Linux.<br/>
</p>

<h4>1. npm configuration</h4>
<p>
~/.npmrc settings:<br/>
Run below configuration commands.<br/>
<code>
npm config set proxy=127.0.0.1:5678</code><br/>
<code>npm config set https-proxy=127.0.0.1:5678</code>
<br/>

<h4>2. Configure curl and git</h4>
<p>
~/.curlrc settings<br/>
&nbsp;&nbsp;&nbsp;proxy = socks5://localhost:9999<br/>
<br/><br/>
~/.gitconfig settings<br/>
[http]<br/>
&nbsp;&nbsp;&nbsp;proxy = socks5://localhost:9999<br/>
[https]<br/>
&nbsp;&nbsp;&nbsp;proxy = socks5://localhost:9999<br/><br/>
</p>



<h4>3. Run the Installation Command</h4>
<code>npm install</code><br/>
Installs all packages listed in package.json file.<br/> 
Plus, it will use bower to install angularjs and jquery into the<br/>
public/bower_components dirctory.<br/>

<h4>4. The Hard Part </h4>
<code> npm run update-webdriver</code><br/>
This step attempts to update the webdriver and install Selenium<br/>
Standalone server to: <br/>
node_modules/protractor/selenium<br/><br/>
This command fails and takes forever if you are behind a firewall</br>
in an Asian country. <br/>I am not quite sure why npm install works but this command fails. <br/>The command may rely on
wget instead of curl or git to download files. <br/>
<code>npm run update-webdriver</code> ETIMEOUTs over and over.....<br/>
very painful.<br/><br/>
Some references like: https://github.com/angular/protractor/pull/966<br/>
encourage you to set HTTPS_PROXY AND HTTP_PROXY but this kept failing.<br/>
Eventually, it worked on Ubuntu but never passed on MAC.
<h5>The Solution</h5>
<p>Execute <code>npm run update-webdriver</code><br/><br/>
Waite for it to fail and read the error message referring to the<br/>
webdriver and selenium it is trying to download. When running on the <br/>
MAC it showed the below urls for the webdriver and Selenium:<br/><br/> <code>https://chromedriver.storage.googleapis.com/2.12/chromedriver_mac32.zip
<br/>
https://selenium-release.storage.googleapis.com/2.44/selenium-server-standalone-2.44.0.jar</code><br/><br/>
<code>cd node_modules/protractWhen you download and unzip the file with curl the zip file name will not match<br/>
the name create by "update-webdriver".or/selenium</code><br/>

<h5>Manually install selenium:</h5>
<code>curl -O https://selenium-release.storage.googleapis.com/2.44/selenium-server-standalone-2.44.0.jar</code><br/> 
Now, <code>npm run update-webdriver</code> will happily say Selenium is up to date.<br/>
But, the webdriver is still missing.<br/><br/>

<h5>Manually install chrome webdriver:</h5>
Open another terminal window run: <code>npm run update-webdriver</code><br/>
In the previous terminal window watch the files "update-webdriver" command<br/>
will create in node_modules/protractor/selenium. On the MAC the "update-webdriver"<br/>
command creates: node_modules/protractor/selenium/chromedriver_2.12.zip.<br/>
But, when the command fails it deletes this file.<br/><br/>
<code>curl -O https://chromedriver.storage.googleapis.com/2.12/chromedriver_mac32.zip</code><br/>
The file created is: node_modules/protractor/selenium/chromedriver_mac32.zip<br/>
This file name needs to match the name created by the "update-webdriver" command.<br/>
Otherwise,<br/>
<code>npm run update-webdriver</code> will not recognize this script.<br/>
So,<code>
cd node_modules/protractor/selenium/<br/>
mv chromedriver_mac32.zip  chromedriver_2.12.zip<br/>
tar -xvzf chromedriver_2.12.zip<br/>
<br/>
Now, you have the following files in node_modules/protractor/selenium/<br/>
chromedriver<br/>
chromedriver_2.12.zip<br/>
selenium-server-standalone-2.44.0.jar<br/>
<br/>
<code>npm run update-webdriver</code> should be happy now :-)<br>



</code>

</p>



</p>

<h3>Configurations</h3>
<p>./.bowerrc<br/>
By default the .bowerrc file is set to install components in:<br/>
public/bower_components/<br/>
</p>
