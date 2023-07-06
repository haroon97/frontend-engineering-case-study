# frontend-engineering-case-study

# Brief description
This React app utilises the random users API (https://randomuser.me/) to display a list of users on the home page. I have used React Query for API integration, Context API for state management, React Router for routing and Material UI for the UI. It has a details page as well on which you can see details about a specific user like their dob, email etc.It has proper error handling for the API and internet connection checks. The project uses TypeScript and is scaffolded using Vite (https://vitejs.dev/).

# Instructions
1) Clone the project into your computer.
2) Open the terminal and go to the project folder.
3) Run this command -> yarn install
4) After installing the dependencies, run this command -> yarn dev

# Case Study 2

# Question # 1
Recently I was reading about the new archiecture of React native i-e Fabric. React Native used to have 3 threads i-e Shadow thread, UI thread and JavaScript thread. And there is async communications between these threads using React Native bridge to render the UI on your screen, this approach was full of limitations:
1) It's slow to transfer large chunks of data.
2) There's unnccesarry data copying. 
3) All communication is async.
Now comes the Fabric architecute, it eliminates the bridge and let the UI be controlled directly from the JS thread using native code just like the browser works, all these methods like setTimeout, setInterval etc these not the part of JavaScript, they are linked directly to the native C++ code, so the browser expose the JS directly to the OS using native code, In this way there is no need for communication through a bridge. This is what implemened in the Fabric architecture of React native.

Offscreen rendering is a an upcoming feature in React for renedring screens in the background without additional performance overhead. There are variety of interesting use cases of this feature:
1) The router can pre-render the screen in the background so when user navigates, it is instantly available.
2) The tab switching componets can preserve the state of hiddent tabs. In this way user can switch between them without losing their progress.
But most developers will not interact with React offscreen API's directly. Instead they will be integrated into routers and UI libraries.

# Question # 2
 I think my motivation to work on frontend is that it is just so much fun for me. The moments that I have a chance to explore a problem and solution that is new to me, it's a chance to experiment with design, with new NPM packages, with new tools. I am used to the startup life and I'm used to being given free reign to solve problems however I see fit. And yes obviously frontend is based on JavaScript (My most favorite language). I love the instability of the JS world. Every now and then there is a new framework, new way of doing things, new features in different frameworks, you're always on your toes while working on frontend. It is the constant struggle, the endless upskilling that keeps me motivated to work on frontend.

# Question # 3
The best way to keep yourself updated with latest trends in JS ecosystem is watching the official conferences videos. In my case JSConf and ReactConf. What I do is I go to youtube and watch the offical conf videos let's say JSConf, The speakers that I like there, I go on Google and search them, follow their blogs, github and twitter. This way I found the gems in the JS and React world like Dan Abramov, Kyle Simpson, Kent'C Dodds and many more. And yes the official blogs as well, React team has a great blog which keeps me updated about the stuff they are working on. Lastly my favorite video based resource for anything related to JS, TS, React etc is Frontendmasters.com, this webiste is literally gold for anyone working in frontend. So yeah that is how I keep up with latest trends and upskill myself. 





