npm install react				# installs react
npm install react-dom   # downloads the react-dom for rendering elements to. ReactDOM is separate because there are different end-user enviroments that can be rendered to (e.g. react-mobile)
npm install webpack--save-dev		# downloads webpack module, used to create packages of all import commands from across a project
npm install webpack-cli --save-dev	# downloads CLI tool for webpack
npm install webpack-dev-server --save-dev # dev server for webpack, so that rather than manually generating a dist directory whenever changes are made to the code, the dev server will keep track of files in memory and serve them to you via a local server. It also supports live reloading (i.e rebuilding the 'dist' dir whenever changes are made to the code).
npm install svg-inline-loader --save-dev	# used to load svg files
npm install css-loader --save-dev		# used to load css files
npm install style-loader --save-dev	# used to inject loaded css styles into the DOM
npm install babel-loader --save-dev	# downloads babel, used to transform JSX code into a format of JS that the browser can understand
npm install @babel/core --save-dev
npm install @babel/preset-env --save-dev  # used to convert JS to readable syntaxes depending on the browser being used (Chrome, Edge, Firefox, etc...)
npm install @babel/preset-react --save-dev  # used to convert JSX into normal JS
npm install html-webpack-plugin --save-dev # generates an index/html page, puts it in our '/dist' folder with a <script> tag that references the newly created bundle
npm install prop-types # used to add type-checking to components
npm install react-icons   # used to access visual favicons and icons to display in the app
npm install react-router-dom --save-dev   # used to provide routing
npm install query-string --save-dev   # used to parse query strings from URLs
npm install @babel/plugin-proposal-class-properties --save-dev    # used to enable JS classes to be written using class properties (instance properties/functions, static variables/functions) (JS classes written more like Java classes)
npm install babel-plugin-syntax-dynamic-import  # used to access lazy loading importing so that only segments of our app/imports are loaded when the user is accessing those Routes
npm install copy-webpack-plugin --save-dev  # used to copy additional files into your webpack output