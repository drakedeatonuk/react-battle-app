import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

class App extends React.Component {
    state = {
        theme: 'light',
        toggleTheme: () => {
            this.setState(({ theme }) => ({
                theme: theme === 'light' ? 'dark' : 'light'
            }))
        }
    }
    render() {
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className='container'>
                            <Nav/>
                            <React.Suspense fallback={<Loading />} >
                                <Switch>
                                    <Route exact path='/' component={Popular} />
                                    <Route exact path='/battle' component={Battle} />
                                    <Route path='/battle/results' component={Results} />
                                    <Route render={() => <h1>404</h1>} />
                                </Switch>
                            </React.Suspense>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STATE EXAMPLE 1

// class Container extends React.Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             mode: 'light'
//         }
//
//         this.handleLightMode = this.handleLightMode.bind(this)
//         this.handleDarkMode = this.handleDarkMode.bind(this)
//     }
//     handleLightMode() {
//         this.setState({ mode: 'light' })
//     }
//     handleDarkMode() {
//         this.setState({ mode: 'dark' })
//     }
//     render() {
//         const { mode } = this.state
//
//         return (
//             <div style={{
//                 height: '100%',
//                 background: mode === 'light' ? '#fff' : '#000'
//             }}>
//                 {mode === 'light'
//                     ? <button onClick={this.handleDarkMode}>Dark Mode</button>
//                     : <button onClick={this.handleLightMode}>Light Mode</button>}
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <Container />,
//     document.getElementById('app')
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STATE EXAMPLE 2: The second form of setState accepts a function as its first argument instead of an object.
// That function is then passed the current state and the object it returns will be merged into the new state.

// class Count extends React.Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             count: 0
//         }
//
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//     }
//     increment() {
//         this.setState(({ count }) => {
//             return {
//                 count: count + 1
//             }
//         })
//     }
//     decrement() {
//         this.setState(({ count }) => {
//             return {
//                 count: count - 1
//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.decrement}>-</button>
//                 <span>{this.state.count}</span>
//                 <button onClick={this.increment}>+</button>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <Count />,
//     document.getElementById('app')
// );

// WHEN TO USE THIS METHOD: If you’re updating the current state based on the previous state (i.e., adding newFriend to the end of an existing friends array),
// use the function setState. For everything else, use the object setState (state example 1).

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TENARY OPERATOR EXAMPLES

// These two below are the same
// { showWarning() === true && <h3>WARNING</h3> }
//
// { showWarning() === true
//     ? <h3> WARNING </h3>
//     : null
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CREATING LISTS 1

// class List extends React.Component {
//     render() {
//         // Render a list using the "friends" being passed in.
//
//         return (
//             <ul>
//                 {this.props.friends.map((friend, index) => (
//                     <li key={index}>{friend}</li>
//                 ))}
//             </ul>
//         )
//     }
// }
//
// ReactDOM.render(
//     <List friends={[
//         'Mikenzi',
//         'Cash',
//         'Steven',
//         'Kimmy',
//         'Doug'
//     ]} />,
//     document.getElementById('app')
// );

// CREATING LISTS 2

// class List extends React.Component {
//   render() {
//     // Render a list using the "friends" being passed in.
//
//     return (
//       <ul>
//         {this.props.friends.map((friend) => (
//           <li key={friend.id}>
//             {friend.name}
//           </li>
//         ))}
//       </ul>
//     )
//   }
// }
//
// ReactDOM.render(
//   <List friends={[
//     { id: 893, name: 'Mikenzi' },
//     { id: 871, name: 'Cash' },
//     { id: 982, name: 'Steven' },
//     { id: 061, name: 'Kimmy' },
//     { id: 117, name: 'Doug' }
//   ]} />,
//   document.getElementById('app')
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CREATING PROPS

// class Avatar extends React.Component {
//   render() {
//     return (
//       <img src={''} />
//     )
//   }
// }
//
// class Label extends React.Component {
//   render() {
//     return (
//       <h1>Name: </h1>
//     )
//   }
// }
//
// class ScreenName extends React.Component {
//   render() {
//     return (
//       <h3>Username: {this.props.username}</h3>
//     )
//   }
// }
//
// class Badge extends React.Component {
//   render() {
//     return (
//       <div>
//         <Avatar />
//         <Label />
//         <ScreenName username={this.props.username}/>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Badge user={{
//     name: 'Tyler McGinnis',
//     img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
//     username: 'tylermcginnis'
//   }} />,
//   document.getElementById('app')
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE UI COMPONENT: Components that take in some data via props and outputs some UI - that is, a component with just a render method.

// class HelloWorld extends React.Component {
//   render () {
//     return (
//       <div>Hello {this.props.name}</div>
//     )
//   }
// }

// SAME COMPONENT WRITTEN AS A 'FUNCTIONAL COMPONENT': If the component only has a render method, it can be written like so:

// function HelloWorld (props) {
//     return (
//         <div>Hello {props.name}</div>
//     )
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROPTYPES EXAMPLE

// class Badge extends React.Component {
//   render() {
//     const { authed, style, name, handle, img, addFriend } = this.props
//
//     if (authed !== true) {
//       return <p>You need to log in.</p>
//     }
//
//     return (
//       <div style={style}>
//         <img
//           style={{width: 200, borderRadius: '50%'}}
//           src={img}
//         />
//         <h1 style={{margin: 5}}>{name}</h1>
//         <h3 style={{margin: 5}}>@{handle}</h3>
//         <button onClick={addFriend}>Add Friend</button>
//       </div>
//     )
//   }
// }
//
// Badge.propTypes = {
//   name: PropTypes.string.isRequired,
//   handle: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   authed: PropTypes.bool,
//   style: PropTypes.object,
//   addFriend: PropTypes.func.isRequired
// }
//
// ReactDOM.render(
//   <Badge
//     name='Tyler McGinnis'
//     handle='tylermcginnis'
//     img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
//     authed={true}
//     style={{
//       width: 300,
//       margin: '0 auto',
//       border: '3px solid #000',
//       padding: 10,
//       borderRadius: 3,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//     }}
//     addFriend={() => alert('Added!')}
//   />,
//   document.getElementById('app')
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// COMPONENT LIFECYCLE METHODS

// class App extends React.Component {
//     constructor(props) {
//         // Good for establishing the initial state of a component
//         super(props)
//         this.state = {}
//     }
//     componentDidMount(){
//         // Invoked once the component is mounted to the DOM.
//         // Good for making AJAX requests.
//     }
//     componentDidUpdate(){
//         // Invoked immediately after updating occurs.
//         // Good for AJAX requests based on changing props or DOM operations.
//     }
//     componentWillUnmount(){
//         // Called right before a component is unmounted.
//         // Good for cleaning up listeners.
//     }
//     render() {
//         return ...
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONTROLLED COMPONENT EXAMPLE:
// With “Controlled Components”, you do things the “React way”. The form state lives
// inside of the component’s state and the value of the input field is whatever the value on the component state is.
// If you want to update the input field, you have to update the component state.

// class Form extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       email: ''
//     }
//
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(e) {
//     this.setState({
//       email: e.target.value
//     })
//   }
//   handleSubmit() {
//     alert('The email is ' + this.state.email)
//   }
//   render() {
//     return (
//       <div>
//         <pre>The email is {this.state.email}</pre>
//         <br />
//         <input
//           type='text'
//           placeholder='Email'
//           value={this.state.email}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleSubmit}>Submit</button>
//       </div>
//     )
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// UNCONTROLED COMPONENT EXAMPLE:
// “Uncontrolled Components” on’t have any component state and instead, the form state lives inside of the DOM
// (or the input) field. Then, whenever you need to get the state, you grab it from the DOM.

// class Form extends React.Component {
//     constructor(props) {
//         super(props)
//
//         this.input = React.createRef('')
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     handleSubmit() {
//         alert('The email is ' + this.input.current.value)
//     }
//     render() {
//         return (
//             <div>
//                 <input
//                     type='text'
//                     placeholder='Email'
//                     ref={this.input}
//                 />
//                 <button onClick={this.handleSubmit}>Submit</button>
//             </div>
//         )
//     }
// }

// ^^^^^^^ The first thing you’ll notice is there’s no more state. Instead, we create a new ref, then pass that as a
// ref prop to our input field. Then, anytime when we need to access the value of our input field (like in handleSubmit),
// we can grab it with this.input.current.value.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHILDREN IN REACT

// You can use React Components like HTML elements:

// <Header src={param1}>You can have text between tags.</Header>
// <Container>
//     <h1> And you can have elements </h1>
//     <p> between tags too </h1>
// </Container>

// Now, instead of passing data (props) into the component via setting attributes as we usually would,
// we’re passing data into the components via the opening and closing tags. How would we go about implementing those?
// And more specifically, how would we get access to the data inside of the opening and closing tag of the element?
// React makes this simple. Whatever is between the opening and closing tag of an element will be accessible inside of
// the component via 'props.children'.

// function Header ({ param1, children }) {
//   return (
//     <h1 src={param1} className='header'>
//       {children}
//     </h1>
//   )
// }
//
// function Container ({ param1, param2, children }) {
//   return (
//     <div>
//      <h2 src={param1}>
//        {children}
//      </h2>
//      <p> {param2} </p?
//     </div>
//   )
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DEFAULT PROPS - IN A CLASS COMPONENT

// class StarRating extends React.Component {
//   ...
// }
//
// StarRating.defaultProps = {
//   color: '#ECB244'
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DEFAULT PROPS - IN A FUNCTION COMPONENT

// function StarRating ({ color = '#ECB244' }) {
// ...
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HIGHER-ORDER COMPONENT EXAMPLE

// function higherOrderComponent (Component) {
//     return class extends React.Component {
//         render() {
//             return <Component />
//         }
//     }
// }

// 1. Is a component
// 2. Takes in a component as an argument
// 3. Returns a new component
// 4. The component it returns can render the original component that was passed in

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HIGHER-ORDER COMPONENT ADVANCED EXAMPLE

    // withHover.js

// export default function withHover (Component, propName='hovering') {     // higher-order component that takes in a Component as its argument  (Note: when you pass in a Component, you pass in its props too). (Note2: notice that besides just the Componment, the higher-order Component also takes in a specific prop. This is can be done to avoid naming conflicts)
//     return class WithHover extends React.Component {        // and returns another Component
//         constructor(props) {
//             super(props)
//             this.state = {                                   // state is defined within the higher-order component
//                 hovering: false,
//             }
//             this.mouseOver = this.mouseOver.bind(this)       // functions are binded to the higher-order component
//             this.mouseOut = this.mouseOut.bind(this)         // functions are binded to the higher-order component
//         }
//         mouseOver() {                                        // functions are created for when the 'onMouseOver'/'onMouseOut' events are triggered to update the sate
//             this.setState({
//                 hovering: true
//             })
//         }
//         mouseOut() {                                         // functions are created for when the 'onMouseOver'/'onMouseOut' events are triggered to update the sate
//             this.setState({
//                 hovering: false
//             })
//         }
//         render() {
//             const props = {
//                 [propName] : this.state.hovering,            // whatever the propName var is, it's added to props
//                 ... this.props                               // ... along with whatever other props that came with the passed-in 'Component'
//             }
//             return (
//                 <div                                         // a div wrapper is returned with the hover events set up
//                     onMouseOver={this.mouseOver}
//                     onMouseOut={this.mouseOut} >
//                     <Component {...props} />                 // with the div, the Component that was passed in is called, and the props are passed to it.
//                 </div>                                       // ^^ it's here that HoverDiv1.js is executed/rendered
//             )
//         }
//     }
// }

    // HoverDiv1.js

// function HoverDiv1({ text, children, hovering }) {      // HoverDiv1 takes in: 'text' & 'children' (which were both received as a props when HoverDiv1 was called in AnyOtherScript.js),
//     return (                                            //                and: 'hovering' (which is added via the state of the higher order component 'withHover')
//         <div>
//             { hovering === true && <div> {text} </div> }
//             { children }
//         </div>
//     )
// }
//
// export default withHover(HoverDiv1, 'hover')          // 'HoverDiv1' is NOT executed in the HoverDiv1.js script.
//                                                       // The HoverDiv1 function is PASSED to the higher-order component, withHover.js, where it is executed/rendered within THAT component.
                                                         // Also, the text 'hover' is passed to withHover too.

    // AnyOtherScript.js

// function InitHigherOrderChain ( text ) {     // function that returns a component
//     return (
//         <HoverDiv1 text={text}>              // "HoverDiv1" is called
//             <FaUser color='rgb(255, 191, 116)' size={22} />      // <-- this line is the 'props.children' of HoverDiv1
//         </HoverDiv1>
//     )
// }
//
// ReposGrid( 'test' )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// RENDER PROPS METHOD 1 EXAMPLE
// You can pass functions for rendering elements based on the state of the component that you pass the function into.
// In this example, a function is passed into the <Hover> component, via the prop, 'props.children'

    // Hover.js

// export default class Hover extends React.Component {        // The 'Hover' class contains the info about the hovering bool
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             hovering: false,
//         }
//
//         this.mouseOver = this.mouseOver.bind(this)
//         this.mouseOut = this.mouseOut.bind(this)
//     }
//     mouseOver() {
//         this.setState({
//             hovering: true
//         })
//     }
//     mouseOut() {
//         this.setState({
//             hovering: false
//         })
//     }
//     render() {
//         return (
//             <div
//                 onMouseOver={this.mouseOver}
//                 onMouseOut={this.mouseOut}
//             >
//                 {this.props.children(this.state.hovering)}       // Because props.children is actually a function, when we call it here, props.children is executed
//             </div>
//         )
//     }
// }

    // Div.js

// export default function Div({ text, children  }) {
//     return (
//         <Hover>                                          // This Component, 'Hover' is called, and the components props.children in this case
//             {(hovering) => (                             // is actually a function
//                 <div style={styles.container}>
//                     {hovering === true && <div style={styles.tooltip}>{text}</div>}
//                     {children}
//                 </div>
//             )}
//         </Hover>
//     )
// }

    // AnyOtherScript.js

// function InitHigherOrderChain ( text ) {     // function that returns a component
//     return (
//         <Div text={text}>              // "HoverDiv1" is called
//             <FaUser color='rgb(255, 191, 116)' size={22} />      // <-- this line is the 'props.children' of HoverDiv1
//         </Div>
//     )
// }
//
// ReposGrid( 'test' )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// RENDER PROPS METHOD 2 EXAMPLE:
// You can pass functions for rendering elements based on the state of the component that you pass the function into.
// In this example, a function is passed into the <Hover> component, via the prop, 'props.render'

    // Hover.js

// export default class Hover extends React.Component {        // The 'Hover' class contains the info about the hovering bool
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             hovering: false,
//         }
//
//         this.mouseOver = this.mouseOver.bind(this)
//         this.mouseOut = this.mouseOut.bind(this)
//     }
//     mouseOver() {
//         this.setState({
//             hovering: true
//         })
//     }
//     mouseOut() {
//         this.setState({
//             hovering: false
//         })
//     }
//     render() {
//         return (
//             <div
//                 onMouseOver={this.mouseOver}
//                 onMouseOut={this.mouseOut}
//             >
//                 {this.props.render(this.state.hovering)}       // Because props.render is actually a function, when we call it here, props.render is executed
//             </div>
//         )
//     }
// }

    // Div.js

// export default function Div({ text  }) {
//     return (
//         <Hover render={ (hovering) => (                        // This Component, 'Hover' is called, and the components 'props.render' is a function
//                 <div style={styles.container}>
//                     {hovering === true && <div style={styles.tooltip}>{text}</div>}
//                     {children}
//                 </div>
//             )}
//         >
//             { text }
//         </Hover>
//     )
// }

    // AnyOtherScript.js

// function InitHigherOrderChain ( text ) {     // function that returns a component
//     return (
//         <Div text={text}>              // "HoverDiv1" is called
//             <FaUser color='rgb(255, 191, 116)' size={22} />
//         </Div>
//     )
// }
//
// ReposGrid( 'test' )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REACT CONTEXT EXAMPLE:
// Typically you create a new Context for each unique piece of data that needs to be available throughout your component tree
// LocalContext.Consumer allows any component in the component tree that needs that data to be able to subscribe to it
// LocalContext.Provider allows us to declare the data that we want available throughout our entire component tree

// const ExpletiveContext = React.createContext('shit')    // creating context for component 'ExpletiveContext' and passing it a default value
//
// function ContextualExclamation () {     // Defining a functional component that returns our 'ExpletiveContext' component
//     return (
//                                              // <ExpletiveContext.Provider value={word}>   <--- INVISIBLE, but this outer wrapper is there and passes data into 'ExpletiveContext.Consumer'
//         <ExpletiveContext.Consumer>     // the created element 'ExpletiveContext.Consumer' is consumed whenever it's called
//             {(word ) => <span>Oh {word}!</span>}    // this render prop will be executed whenever the 'ExpletiveContext' component is rendered
//         </ExpletiveContext.Consumer>    // Effectively the 'context' is a wrapper whose props can be made accessible via this function
//                                              // </ExpletiveContext.Provider> <--- INVISIBLE
//     )
// }
//
// function App () {           // When this App component is rendered, it calls two functional components, 'VisitFriendsHouse' & 'VisitGrandasHouse'
//     return (
//         <React.Fragment>
//             <VisitFriendsHouse />
//             <VisitGrandmasHouse />
//         </React.Fragment>
//     )
// }
//
// function VisitFriendsHouse () {
//     return (
//         <React.Fragment>
//             <h1>Friend's House 🏚</h1>
//             <ContextualExclamation />   // When this fragment it rendered, it calls the 'ContextualExclamation' component, which executes it's render prop
//         </React.Fragment>
//     )
// }
// function VisitGrandmasHouse () {
//     return (
//         <ExpletiveContext.Provider value='poop'>    // the 'ExpletiveContext' component that was originally created, is provided with a new 'value' which overwrites the default value
//             <h1>Grandma's House 🏡</h1>
//             <ContextualExclamation />   // When this fragment is rendered, it calls the 'ContextualExclamation' component, which executes it's render prop
//         </ExpletiveContext.Provider>
//     )
// }

    // OUTPUT:
// Friend's House 🏚
// Oh shit!
// Grandma's House 🏡
// Oh poop!

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REACT ROUTER EXAMPLE

    // App.js

// render() {
//     return (
//         <Router>     // Router wrapper goes around ENTIRE web app so it can pass data anywhere into it
//             <div>
//                 <Nav/>
//                 <Route path={'/'} component={Popular} />       // Route element is display the component "Popular" is the url route matches '/', or if it's atleast a semi-match
//                 <Route exact path={'/Battle'} component={Battle} />  // Route element is display the component "Popular" is the url route matches '/' exactly
//             </div>
//         </Router>
//     )
// }

    // Nav.js

// export default function Nav () {
//     return (
//         <nav>
//             <NavLink                     // when NavLink element is clicked, the route labeled 'to=' will be exectued
//                 exact
//                 to={'/'} >
//                 Popular
//             </NavLink>
//             <NavLink
//                 exact
//                 to={'/battle'}
//                 activeStyle={activeStyle} >  // because of the 'exact' key, if the current url matches the NavLink 'to=', then a specific CSS style will be used for the link
//                 Battle
//             </NavLink>
//         </nav>
//     )
// }

// const activeStyle = { color: 'rgb(187, 46, 31)'}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REACT ROUTER W/ QUERY STRINGS EXAMPLE

// App.js

// ...
// render() {
//     return (
//         <Router>     // Router wrapper goes around ENTIRE web app so it can pass data anywhere into it
//             <div>
//                 <Nav/>
//                 <Route exact path={'/one'} component={One} />  // Route element is display the component "Popular" is the url route matches '/' exactly
//                 <Route path='/one/two' component={Two} />
//             </div>
//         </Router>
//     )
// }

    // One.js

// export default class One extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { sendthis: 'test'}        // state info to send to Two
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <Link
//                     to={{
//                         pathname: '/app/two',                       // path to redirect to when this link is clicked
//                         search: `?sendthis=${this.state.sendthis}`  // query string to send
//                     }}
//                 >
//                     Redirect To Two
//                 </Link>
//             </React.Fragment>
//         )
//     }
// }

    // Two.js

// export default class Two extends React.Component {
//     ...
//     componentDidMount() {
//         console.log(this.props) // NOTICE HOW React Router automatically sends all sorts of props when changes the route.
//         const { sendthis } = queryString.parse(this.props.location.search)   // one method for parsing query strings
//     }
//     ...
// }

// OUTPUT:
// history: {length: 23, action: "PUSH", location: {…}, createHref: ƒ, push: ƒ, …}
// location: {pathname: "/battle/results", search: "?playerOne=test&playerTwo=test", hash: "", key: "eupf6v"}
// match: {path: "/battle/results", url: "/battle/results", isExact: true, params: {…}}
// staticContext: undefined

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REACT ROUTER 404 PAGE

// ...
// <Switch>        // checks each Route within in the order they appear. Ensures that if two routes match, only the first route is rendered
//     <Route exact path={'/one'} component={One} />
//     <Route exact path={'/two'} component={Two} />
//     <Route render{() => <h1>404</h1> />       // a route with no path is always will be rendered, so this route will be rendered for certain if none of the other routes match
// </Switch>
// ...

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CLASS PROPERTIES:
// An alternative method for writing class syntax

// class Bork {
//     //Property initializer syntax
//     instanceProperty = "bork";               // instance property created during instantiation
//     boundFunction = () => {                  // instance function created during instantiation. Notice how an Arrow Function is used, because Arrow Functions don't create a separate scope.
//         return this.instanceProperty;        // 'this' references this instance of the class
//     };
//
//     //Static class properties
//     static staticProperty = "babelIsCool";   // static property of the class
//     static staticFunction = function() {     // static function of the class
//         return Bork.staticProperty;          // returns a static property synonymous across all instances of the class
//     };
// }
//
// let myBork = new Bork;
//
// //Property initializers are not on the prototype.
// console.log(myBork.__proto__.boundFunction); // > undefined
//
// //Bound functions are bound to the class instance.
// console.log(myBork.boundFunction.call(undefined)); // > "bork"
//
// //Static function exists on the class.
// console.log(Bork.staticFunction()); // > "babelIsCool"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LAZY LOADING
// To make a Route only load when that Route is displayed, you need to add "plugins": ["syntax-dynamic-import"] to your package.json
// And then do something similar to this:

// const AComponent = React.lazy(() => import('./components/Popular'))    // ".lazy()" is a promise which executes a given function which loads data when AComponent/Route is called
//                                                                        // "import()" is from "syntax-dynamic-import".
//                                                                        // when this Route/Component is called by the end-user, then the imports required to run AComponent.js are installd
// ...
// render() {
//     return (
//         <Router>
//             <React.Susponse fallback={Loading}>         // The Suspense component ensures that if a component is taking too long to load, that a 'fallback' component will be displayed in the meantime
//                 <Switch>
//                     <Route exact path='/' component={Main} />
//                     <Route exact path='/acomponent' component={AComponent} />        // When this Route is used, only then will the imports required to run it load
//                 </Switch>
//             </React.Susponse>
//         </Router>
//     )
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DEPLOY PRODUCTION CODE VS DEVELOPE CODE

    // package.json

// ...
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//         "build": "NODE_ENV='production' webpack",
// }
// ...

    // webpack.config.js

// ...
// mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
// ...