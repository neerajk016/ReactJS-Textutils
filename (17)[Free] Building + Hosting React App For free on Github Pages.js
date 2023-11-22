// At this moment, we have created our React application and would like to host our application in Github for free.

// You can install Git and Github from their official sites, respectively.

// Deploying TextUtils
// Whenever we create our application for production, we build it using the npm run build command and not by using npm start.

// npm run build: npm run build bundles the app into static files for production, i.e. it creates a build folder that contains your application as a static application.

// In Build Folder: If you open your build folder in the live server, you will find that your application is working perfectly, which means our application is being converted into static files for deployment.




// Note: React Router doesn’t work perfectly with Github pages, so we are going to remove the router from our application. But remember that while deploying in the server, it runs perfectly.








// Steps for Hosting our React Application:(Method 1)


// 1. Add the Home page field:

// You can add the homepage field in your application by Copying the below code in your package.json.(in starting above name)

// "homepage": "https://myusername.github.io/my-app",

// Make sure to enter your username and the correct name of your application in the mentioned places in the above URL





// 2. Install gh-pages

// Use the below command to install gh-pages in your React app.

// npm install --save gh-pages





// 3. Add the script in "package.json"

// Add the below code in the script (available in "package.json") of your React application.(in Debug)

//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d build",



//4.run this git remote add origin https://github.com/username/reponame.git


// 5. Run the npm run deploy

// Using the npm run deploy command in your terminal will begin the publishing process.

// After a certain time, the Github login dialog box appears. Enter your GitHub username and password and login into your account.







// Note::::

// you have to remove github from windows Credential in your pc

// you have to install git if you want to publish using git

// and you have to add windows powershell in environment variable path



// Steps for Hosting our React Application:(Method 2)



//using git::::::======



// (0)first create a new reporistory in github


// (1) then open git bash on react app folder

// (2) enter "git remote add origin https://github.com/Neeraj-k16/p2.git"



// (3)enter "git add -A"



// (4)enter "git commit -m "Initial commit""


// (5)enter "git add --all"



// (6)enter "git push  origin master"



// (7)add this in package.json above name in starting ""homepage": "https://[USERNAME].github.io/[YOUR REPO NAME]","

// (8)after command in package.json then enter "npm install gh-pages --save-dev"






// (9)add this in package.json under debug    "predeploy": "npm run build",
//                                         "deploy": "gh-pages -d build",







// (10)then enter "npm run deploy"


// (11)now you can view your website in this "https://[USERNAME].github.io/[YOUR REPO NAME]" url







