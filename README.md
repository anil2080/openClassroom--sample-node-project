# openClassroom--sample-node-project
https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2504972-creating-your-first-app-with-node-js
**** How to locally run your application ****
1. create a repo on github & clone it on local system using git clone command.
2. cd to the project and run command npm init - this command will add package.json to project.
3. Constructing your HTTP server
    var http = require('http');
    var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hi everybody!');
    });
    server.listen(8080);
In some ways it’s the "minimal code" for a Node.js project. Put it in a file and name it server.js 
Update the code to navigate on different routes and end up with server.js updated file(Present in repo).
For server.js we need to npm packages - http & URL - to get these packages and add as dependency run command npm install <package name> --save [This will bring node_modules folder to your project and add these folders in package.json as dependency].
Now the server is ready, run the app using node server.js and hit localhost:8080 to access the app.

**** How to get nightwatch to test your app  ****
1. Check you have nightwatch install using 'nightwatch --version' else install it using 'npm install -g nightwatch'.
2. Now download the browser exe from selenium website along with seleniumstandaloneserver jar and put in a folder bin.
3. Add nightwatch.json file to test the app , refer the project nightwatch.json.
4. Add tests folder to project and add the testcases.js file and add the sample test cases.


##################Page-objects-Model###########################
To create page-objects in nightwatch we need to do following steps:
1. First we need to create "page-objects" folder and create a file sections.js in it.
2. Then edit Nightwatch.json and enter "page_objects_path": "[sections.js]"
3. In sections.js under page-objects define,
    module.exports= {
        url: 'application URL',
        elements:{
        searchBar: {
                selector: 'input[type=text]'
                    },
        submit: {
                 selector: '//[@name="q"]',
                 locateStrategy: 'xpath'
            }
        },
        commands:{
            selectFilter(selector, value){
                const page = this;
                page
                    .click(slector)
                    .click(value)
                return this;
                }
        }   // end of commands
    }
