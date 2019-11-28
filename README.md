# Onion architecture with React for JavaScript Project

A simple project to test the possibility of application of [Onion Architecture](https://dzone.com/articles/onion-architecture-is-interesting) for frontend.

[Lerna](https://lerna.js.org/) is considered as library to manage multiple packages.

In this project ```React Js``` will be used as Frontend framework.

---

### 1. Prerequisites

Pre-installation of ```node``` and ```npm```. (What I used: ```node v12.13.0``` and ```npm 6.12.0```)

---

### 2. Build

Install dependencies: ```npm install``` in project's root folder node_modules.

Install all packages: ```npm run build``` in project's root folder.

If you want to deploy as prod, please feel free to jump into section 5.

---

### 3. Test

Before testing, please build the project as in section 2.

Run ```npm run test``` in project's root folder.

---

### 4. Start (for dev)

Run ```npm run start``` in project's root folder (it takes some minutes to build, test and start app).
If your browser can not open your application automatically, you can access your application in ```localhost:3000```.

The deploy stage includes already build and test stage
 (no need to execute ```npm run build``` or ```npm run test```).

---

### 5. Deploy as prod in localhost (optional)

After successfully executing either ```npm run build``` or ```npm run start```
the ```./packages/infrastructure/UI/build``` is ready to be deployed as prod.
 
To deploy this ```build``` folder in local, please follow these steps:

- Create a project: ```mkdir express-app-for-test-build-file```
- Create ```index.js``` file inside this project ```./express-app-for-test-build-file``` with following content

```
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);
```

- Create ```package.json``` file inside this project ```./express-app-for-test-build-file``` with following content

```
{
  "description": "copy and paste/replace build folder in this project's root and run npm run start",
  "devDependencies": {
    "express": "4.17.1",
    "path": "0.12.7"
  },
  "scripts": {
    "start": "npm install && node index.js"
  }
}
```

- Copy the ```build``` folder inside this project ```./express-app-for-test-build-file```.
The project structure will look like:

```
./express-app-for-test-build-file
    build
    index.js
    package.json
```

- Run ```npm run start``` command inside this project ```./express-app-for-test-build-file``` to deploy the ```build``` folder.
Your application will run in ```localhost:9000/```
