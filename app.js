const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Firebase DB (for other direct routes like /transaction)
const db = require('./config/firebase');


// Modular routes
const projectRoutes = require('./routes/projectRoutes');
app.use('/projects', projectRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Firebase-powered portfolio API!');
});

// Test route
app.get('/test', (req, res) => {
  res.json("We got your request.....");
});

// Sample transaction route
app.post('/transaction/add', (req, res) => {
  console.log('Transaction received:', req.body);
  res.json(req.body);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




















// old logic


// const express = require('express');
// const app = express() ;
// const path = require('path') ;
// const cors = require( 'cors' )

// app.use( cors() );
// app.set( 'view engine' , 'ejs');
// app.use( express.json() );
// app.use( express.urlencoded( { extended : true }) );
// app.use( express.static( path.join( __dirname , 'public')));

// app.get('/' , ( req , res )=> {
//      res.send('Welcome This is new project with new day  ...!!!!!');
// });


// app.get( '/projects' , ( req , res ) => {
//      projects =  [
//           {
//             id: 1,
//             title: "Spotify clone",
//             description:
//               "The modern UI clone for the Spotify , made using multiple and variouus modern technologies like react and node.js.",
//             img: "/spotify.png",
//           },
//           {
//             id: 2,
//             title: "Modern Portfolio",
//             description:
//               "A modern portfolio webpage , for showcaising the react framework and the framer motion library features like animation and transitions.",
//             img: "/portfolio.png",
//           },
//           {
//             id: 3,
//             title: "Netflix UI Clone",
//             description:
//               "The modern UI clone for the NETFLIX , made using multiple and variouus modern technologies like react and node.js.",
//             img: "/netflix.png",
//           },
//           {
//             id: 4,
//             title: "To do list",
//             description:
//               "The simple but implisit to do list with minimal UI and modern design with all options of features and functionality, made with React and node.",
//             img: "/to do list.png",
//           },
//           {
//             id: 5,
//             title: "Hacker's Terminal",
//             description:
//               "The advance terminal copy of a synchronous hacking technique on a web browser, showcasing the string manipulation and asynchronous behaviour of Javascript.",
//             img: "/hackers terminal.png",
//           },
//         ];
//      res.send( projects ) ;
// } )


// app.post('/create' , ( req ,res )=>{
//            console.log( 'The accepted req for creating task is : ' , req.body);
//            res.redirect('/');
// })




// // other custom test apis


// app.get( '/test' , (req , res ) =>{
//   res.json( "We got your request....." )
// } )


//  /// this is the the adding request from user to add req obj 

// app.post( '/transaction/add' , ( req , res ) =>{
//   console.log('The accepted req is : ' , req.body );

//   const { name , desc , date } = req.body




//   res.json( req.body )
// } )






// app.listen(3000);















// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const db = require('./firebase'); // Make sure firebase.js is properly configured

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Welcome route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Firebase-powered portfolio API!');
// });

// // Get all projects
// app.get('/projects', async (req, res) => {
//   try {
//     const snapshot = await db.collection('projects').get();
//     const projects = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     res.json(projects);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch projects: ' + error.message });
//   }
// });

// // Add a new project
// app.post('/projects', async (req, res) => {
//   try {
//     const { title, description, img, url, repo } = req.body;

//     if (!title || !description || !img) {
//       return res.status(400).json({ error: 'Required fields missing (title, description, img).' });
//     }

//     const docRef = await db.collection('projects').add({
//       title,
//       description,
//       img,
//       url: url || '',
//       repo: repo || ''
//     });

//     res.json({
//       id: docRef.id,
//       title,
//       description,
//       img,
//       url: url || '',
//       repo: repo || ''
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add project: ' + error.message });
//   }
// });

// // Update an existing project
// app.put('/projects/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title, description, img, url, repo } = req.body;

//   try {
//     await db.collection('projects').doc(id).update({
//       title,
//       description,
//       img,
//       url: url || '',
//       repo: repo || ''
//     });

//     res.json({ message: 'Project updated successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update project: ' + error.message });
//   }
// });

// // Delete a project
// app.delete('/projects/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     await db.collection('projects').doc(id).delete();
//     res.json({ message: 'Project deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete project: ' + error.message });
//   }
// });

// // Test route
// app.get('/test', (req, res) => {
//   res.json("We got your request.....");
// });

// // Sample transaction route
// app.post('/transaction/add', (req, res) => {
//   console.log('Transaction received:', req.body);
//   res.json(req.body);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
