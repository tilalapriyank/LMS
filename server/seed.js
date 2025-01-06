import bcrypt from "bcrypt";
import {
  Course,
  Lesson,
  Question,
  QuestionAnswer,
  Quiz,
  Section,
  SectionItem,
  User,
  UserMeta,
  Category,
  Tag,
  QuestionCategory,
} from "./models/index.js";

export const defaultData = async () => {
  try {
    const hashedPasswords = await Promise.all([
      bcrypt.hash("admin123", 10),
      bcrypt.hash("admin1234", 10),
    ]);

    const users = await User.bulkCreate([
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: hashedPasswords[0],
        role: "admin",
      },
      {
        name: "Priyank",
        email: "priyank@gmail.com",
        password: hashedPasswords[1],
        role: "admin",
      },
    ]);

    const usermeta = await UserMeta.bulkCreate([
      {
        userId: users[0].id,
        metaKey: "first_name",
        metaValue: "Admin",
      },
      {
        userId: users[1].id,
        metaKey: "first_name",
        metaValue: "Priyank",
      },
      {
        userId: users[0].id,
        metaKey: "last_name",
        metaValue: "admin",
      },
      {
        userId: users[1].id,
        metaKey: "last_name",
        metaValue: "Patel",
      },
    ]);

    const courses = await Course.bulkCreate([
      {
        name: "Introduction to JavaScript",
        content: `
          Learn the basics of JavaScript, the language that powers the web.
          This course includes:
          - **Variables**: \`var\`, \`let\`, and \`const\`.
          - **Functions**: Regular, arrow, and IIFE (Immediately Invoked Function Expressions).
          - **Events**: Handle user interactions like clicks, hovers, and input changes.
          - **DOM Manipulation**: Dynamically change the structure and content of web pages.
          - **Debugging Techniques**: Use browser tools to identify and fix issues in your code.
        `,
        status: "published",
        author: users[0].id,
      },
      {
        name: "Advanced CSS Techniques",
        content: `
          Dive into modern CSS to create visually stunning and responsive designs.
          Topics covered:
          - **Flexbox**: Master one-dimensional layouts with ease.
          - **Grid Layout**: Create complex, two-dimensional designs with minimal effort.
          - **CSS Animations**: Add interactivity with keyframes and transitions.
          - **Preprocessors**: Use SASS and LESS to streamline your CSS workflow.
          - **Responsive Design**: Build layouts that adapt perfectly to any screen size.
        `,
        status: "published",
        author: users[0].id,
      },
      {
        name: "Full-Stack Development with Node.js",
        content: `
          A comprehensive guide to building full-stack applications.
          Highlights include:
          - **Backend with Node.js**: Set up servers with Express.
          - **Database Integration**: Use MongoDB for efficient data storage and retrieval.
          - **REST APIs**: Design and implement robust APIs.
          - **Authentication**: Implement user authentication with JWT and OAuth.
          - **Deployment**: Deploy applications using cloud platforms like AWS or Heroku.
        `,
        status: "draft",
        author: users[0].id,
      },
      {
        name: "Understanding Data Structures",
        content: `
          Build a solid foundation in data structures to solve real-world problems effectively.
          Covered topics:
          - **Arrays**: Dynamic memory management and traversal techniques.
          - **Linked Lists**: Singly, doubly, and circular linked lists.
          - **Trees**: Binary trees, binary search trees, and heaps.
          - **Graphs**: Graph representation, traversal (DFS, BFS), and shortest path algorithms.
          - **Hashing**: Techniques for fast data retrieval using hash tables.
        `,
        status: "published",
        author: users[1].id,
      },
      {
        name: "Introduction to Machine Learning",
        content: `
          Explore the fascinating world of machine learning and artificial intelligence.
          Topics include:
          - **Basics of Machine Learning**: Supervised, unsupervised, and reinforcement learning.
          - **Key Algorithms**: Linear regression, decision trees, and k-means clustering.
          - **Data Preprocessing**: Cleaning, transforming, and preparing data for models.
          - **Libraries**: Use Python libraries like TensorFlow, Scikit-learn, and Keras.
          - **Real-world Applications**: Implement solutions for classification, regression, and recommendation systems.
        `,
        status: "published",
        author: users[1].id,
      },
    ]);

    const sections = await Section.bulkCreate([
      {
        courseId: courses[0].id,
        sectionName: "Introduction to JavaScript Basics",
        sectionDescription:
          "This section covers variables, functions, and basic concepts.",
        order: 1,
      },
      {
        courseId: courses[0].id,
        sectionName: "Advanced Functions",
        sectionDescription: "Learn about arrow functions, closures, and IIFE.",
        order: 2,
      },
      {
        courseId: courses[1].id,
        sectionName: "Getting Started with Flexbox",
        sectionDescription: "Understand one-dimensional layout with Flexbox.",
        order: 1,
      },
      {
        courseId: courses[1].id,
        sectionName: "Grid Layout Techniques",
        sectionDescription:
          "Learn how to create complex layouts using CSS Grid.",
        order: 2,
      },
      {
        courseId: courses[2].id,
        sectionName: "Node.js Basics",
        sectionDescription: "Set up your first Node.js application.",
        order: 1,
      },
      {
        courseId: courses[2].id,
        sectionName: "Building APIs",
        sectionDescription: "Design and implement RESTful APIs.",
        order: 2,
      },
      {
        courseId: courses[3].id,
        sectionName: "Array Manipulation",
        sectionDescription:
          "Learn about dynamic memory management and traversal techniques.",
        order: 2,
      },
      {
        courseId: courses[3].id,
        sectionName: "Understanding Linked Lists",
        sectionDescription:
          "Explore singly, doubly, and circular linked lists.",
        order: 3,
      },
      {
        courseId: courses[3].id,
        sectionName: "Mastering Trees",
        sectionDescription:
          "Delve into binary trees, binary search trees, and heaps.",
        order: 4,
      },
      {
        courseId: courses[3].id,
        sectionName: "Graphs and Algorithms",
        sectionDescription:
          "Learn graph traversal techniques and shortest path algorithms.",
        order: 5,
      },
      {
        courseId: courses[4].id,
        sectionName: "Introduction to Machine Learning",
        sectionDescription:
          "An overview of machine learning and its applications.",
        order: 1,
      },
      {
        courseId: courses[4].id,
        sectionName: "Data Preprocessing",
        sectionDescription:
          "Learn how to clean, transform, and prepare data for models.",
        order: 2,
      },
      {
        courseId: courses[4].id,
        sectionName: "Key Algorithms in Machine Learning",
        sectionDescription:
          "Understand linear regression, decision trees, and k-means clustering.",
        order: 3,
      },
      {
        courseId: courses[4].id,
        sectionName: "Libraries for Machine Learning",
        sectionDescription:
          "Work with TensorFlow, Scikit-learn, and Keras to build models.",
        order: 4,
      },
      {
        courseId: courses[4].id,
        sectionName: "Real-world Applications",
        sectionDescription:
          "Implement solutions for classification, regression, and recommendation systems.",
        order: 5,
      },
    ]);

    const lessons = await Lesson.bulkCreate([
      {
        name: "Introduction to Variables",
        content:
          "In this lesson, you'll explore the basics of variables in JavaScript. You'll learn how to declare variables using `var`, `let`, and `const`, and understand the differences in their scope, hoisting behavior, and mutability. Key examples will include practical use cases of each type.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Working with Functions",
        content:
          "This lesson covers the fundamentals of functions in JavaScript. You'll learn the different types of functions such as regular functions, arrow functions, and Immediately Invoked Function Expressions (IIFE). We'll also discuss how to pass parameters, return values, and handle scope within functions.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Event Handling in JavaScript",
        content:
          "In this lesson, you'll dive into handling user interactions in JavaScript. You'll learn how to use event listeners to capture and respond to user actions like clicks, hover, and form submissions. You'll also explore event bubbling and capturing, as well as how to prevent default behavior in some cases.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "DOM Manipulation Basics",
        content:
          "This lesson introduces the Document Object Model (DOM) and teaches you how to modify HTML and CSS dynamically using JavaScript. You'll learn how to use methods like `getElementById`, `querySelector`, and `appendChild` to interact with page elements and update content in real time.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Debugging JavaScript Code",
        content:
          "Debugging is an essential skill for every developer. This lesson will show you how to debug JavaScript code using browser developer tools. You'll learn how to set breakpoints, inspect variables, step through code, and identify issues like scope errors, undefined values, and logic mistakes.",
        status: "published",
        author: users[0].id,
      },

      // Lessons for "Advanced CSS Techniques"
      {
        name: "Understanding Flexbox",
        content:
          "Flexbox is a powerful tool for creating responsive layouts. In this lesson, you'll learn how to align items along a single axis, how to distribute space, and how to reorder elements using Flexbox properties such as `justify-content`, `align-items`, and `flex-direction`.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "CSS Grid Layouts",
        content:
          "CSS Grid Layout allows you to design complex two-dimensional layouts with ease. This lesson covers how to create grid containers, define grid rows and columns, and place grid items precisely. You'll also learn about grid gap, alignment properties, and advanced grid layout techniques.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Creating CSS Animations",
        content:
          "Animations can greatly enhance the user experience. In this lesson, you'll learn how to create smooth animations using CSS. We'll explore keyframe animations, transitions, and effects that make elements change state over time, such as hover effects and loading spinners.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "SASS and LESS Basics",
        content:
          "CSS preprocessors like SASS and LESS allow for cleaner and more efficient stylesheets. This lesson will introduce you to SASS and LESS syntax, mixins, variables, nesting, and inheritance. You'll learn how to set up a preprocessor environment and integrate it into your project.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Building Responsive Designs",
        content:
          "Responsive design ensures that your website adapts seamlessly to different screen sizes. In this lesson, you'll learn how to use media queries, fluid grids, and flexible images to create layouts that work on devices ranging from desktops to smartphones.",
        status: "published",
        author: users[0].id,
      },

      // Lessons for "Full-Stack Development with Node.js"
      {
        name: "Setting Up Express Servers",
        content:
          "This lesson covers the basics of setting up a server with Express.js. You'll learn how to install Express, configure middleware, handle routes, and return JSON responses. You'll also explore how to create a simple REST API using Express.",
        status: "draft",
        author: users[0].id,
      },
      {
        name: "Integrating MongoDB",
        content:
          "Learn how to connect your Node.js application to MongoDB. In this lesson, you'll see how to install and configure the Mongoose library, define schemas and models, and interact with a MongoDB database to perform CRUD operations.",
        status: "draft",
        author: users[0].id,
      },
      {
        name: "Designing REST APIs",
        content:
          "This lesson focuses on designing RESTful APIs with Node.js and Express. You'll learn the principles of REST, how to structure your API endpoints, handle different HTTP methods, and manage status codes and error handling in a user-friendly way.",
        status: "draft",
        author: users[0].id,
      },
      {
        name: "User Authentication with JWT",
        content:
          "In this lesson, you’ll implement secure user authentication using JSON Web Tokens (JWT). You’ll learn how to create login systems, store tokens securely, and protect routes by verifying JWT tokens in your backend.",
        status: "draft",
        author: users[0].id,
      },
      {
        name: "Deploying Applications",
        content:
          "Learn how to deploy your Node.js applications to the cloud. In this lesson, you’ll explore different hosting platforms like Heroku, AWS, and DigitalOcean. You’ll see how to set up continuous deployment and configure your production environment for optimal performance.",
        status: "draft",
        author: users[0].id,
      },

      // Lessons for "Understanding Data Structures"
      {
        name: "Array Basics",
        content:
          "Arrays are one of the most common data structures in programming. In this lesson, you'll learn how to declare arrays, traverse them, and manipulate their elements. You’ll also explore built-in array methods for sorting, filtering, and mapping.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Working with Linked Lists",
        content:
          "Linked lists are an essential data structure for dynamic data storage. This lesson covers the implementation of singly, doubly, and circular linked lists. You'll learn the differences between each type and how to perform common operations like insertion and deletion.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Introduction to Trees",
        content:
          "Trees are hierarchical data structures that are vital for representing relationships between elements. In this lesson, you'll learn about binary trees, binary search trees (BST), and heaps. You'll also explore tree traversal algorithms such as in-order, pre-order, and post-order.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Graph Traversal Techniques",
        content:
          "Graphs are versatile data structures for modeling complex relationships. This lesson explains the fundamentals of graphs and covers traversal techniques like Depth-First Search (DFS) and Breadth-First Search (BFS). You’ll also learn about the shortest path algorithms like Dijkstra’s algorithm.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Hashing Techniques",
        content:
          "Hash tables are incredibly efficient for fast data retrieval. This lesson explains how hash tables work, including how hashing algorithms map data to specific locations in memory. You’ll also learn how to handle collisions and the benefits of using hash maps for key-value pairs.",
        status: "published",
        author: users[1].id,
      },

      // Lessons for "Introduction to Machine Learning"
      {
        name: "Basics of Machine Learning",
        content:
          "Machine learning involves creating algorithms that enable computers to learn from data. This lesson introduces supervised, unsupervised, and reinforcement learning. You'll also explore how data is used to train models, and how evaluation metrics such as accuracy and precision are calculated.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Data Preprocessing",
        content:
          "Data preprocessing is a crucial step in preparing data for machine learning. In this lesson, you'll learn how to clean and preprocess data, including handling missing values, scaling features, and encoding categorical variables. This ensures your data is ready for training models.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Key ML Algorithms",
        content:
          "In this lesson, you'll learn about essential machine learning algorithms. You’ll explore linear regression, decision trees, and clustering algorithms like k-means. You’ll also learn how these algorithms can be applied to real-world problems like classification and prediction.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Using ML Libraries",
        content:
          "Python libraries like TensorFlow, Scikit-learn, and Keras simplify machine learning tasks. In this lesson, you'll learn how to use these libraries to implement machine learning models, from data processing to model evaluation and prediction.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Real-world ML Applications",
        content:
          "Machine learning has many practical applications. In this lesson, you'll learn how to apply machine learning algorithms to tasks like classification, regression, recommendation systems, and anomaly detection. You’ll also explore case studies from various industries.",
        status: "published",
        author: users[1].id,
      },
    ]);

    const quizzes = await Quiz.bulkCreate([
      // Quizzes for "Introduction to JavaScript"
      {
        name: "Variables Quiz",
        content:
          "Test your knowledge of JavaScript variables. This quiz will cover variable declarations, scope, and hoisting with `var`, `let`, and `const`. You'll also be tested on how to properly declare and use variables in different scenarios.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Functions Quiz",
        content:
          "Evaluate your understanding of JavaScript functions. The quiz includes questions on function declarations, expressions, arrow functions, and IIFE. You’ll also test your knowledge of parameter passing, return values, and scope.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Event Handling Quiz",
        content:
          "This quiz tests your ability to handle user events in JavaScript. You’ll answer questions on attaching event listeners, event propagation, and preventing default actions in forms, links, and other interactive elements.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "DOM Manipulation Quiz",
        content:
          "Test your skills in DOM manipulation. The quiz focuses on selecting and modifying DOM elements using methods like `getElementById`, `querySelector`, and handling element events dynamically using JavaScript.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Debugging Quiz",
        content:
          "This quiz evaluates your ability to debug JavaScript code. You’ll be asked about common errors, how to use browser developer tools, and strategies for locating issues such as `undefined` variables, function scope errors, and logic mistakes.",
        status: "published",
        author: users[0].id,
      },

      // Quizzes for "Advanced CSS Techniques"
      {
        name: "Flexbox Quiz",
        content:
          "Assess your knowledge of Flexbox, one of the most powerful layout models in CSS. The quiz will test your understanding of properties like `justify-content`, `align-items`, `flex-direction`, and more to create flexible, responsive layouts.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Grid Layout Quiz",
        content:
          "This quiz will test your understanding of CSS Grid. You’ll answer questions about creating two-dimensional layouts using `grid-template-columns`, `grid-template-rows`, `grid-gap`, and other essential grid properties.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "CSS Animations Quiz",
        content:
          "Evaluate your skills in creating CSS animations. The quiz covers keyframe animations, timing functions, transitions, and animation effects such as fading, sliding, and bouncing.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Preprocessors Quiz",
        content:
          "Test your understanding of CSS preprocessors like SASS and LESS. The quiz will cover the basic features of both, including variables, nesting, mixins, and the compilation process into regular CSS.",
        status: "published",
        author: users[0].id,
      },
      {
        name: "Responsive Design Quiz",
        content:
          "This quiz will assess your knowledge of creating responsive websites. You’ll answer questions on media queries, flexible grids, and making elements adapt to different screen sizes and orientations.",
        status: "published",
        author: users[0].id,
      },

      // Quizzes for "Full-Stack Development with Node.js"
      {
        name: "Express Setup Quiz",
        content:
          "Test your knowledge of setting up an Express.js server. This quiz includes questions on routing, middleware, error handling, and how to configure your server for different environments.",
        status: "draft",
        author: users[0].id,
      },
      {
        name: "MongoDB Integration Quiz",
        content:
          "This quiz tests your understanding of integrating MongoDB with Node.js. You’ll be tested on Mongoose models, queries, and database operations such as CRUD (Create, Read, Update, Delete) actions.",
        status: "draft",
        author: users[0].id,
      },
      {
        name: "REST API Design Quiz",
        content:
          "Evaluate your ability to design RESTful APIs in Node.js. The quiz includes questions on REST principles, HTTP methods, status codes, and building endpoints for CRUD operations.",
        status: "draft",
        author: users[0].id,
      },
      {
        name: "JWT Authentication Quiz",
        content:
          "This quiz evaluates your understanding of securing Node.js applications with JSON Web Tokens (JWT). Questions will cover token generation, token storage, and authentication middleware to secure API endpoints.",
        status: "draft",
        author: users[0].id,
      },
      {
        name: "Node.js Deployment Quiz",
        content:
          "This quiz will test your knowledge of deploying Node.js applications. You’ll answer questions on cloud hosting platforms like Heroku and AWS, configuring production environments, and handling deployment workflows.",
        status: "draft",
        author: users[0].id,
      },

      // Quizzes for "Understanding Data Structures"
      {
        name: "Array Basics Quiz",
        content:
          "Test your knowledge of arrays, the fundamental data structure. This quiz will cover array methods such as `push`, `pop`, `shift`, and `unshift`, and concepts like multi-dimensional arrays and array traversal.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Linked Lists Quiz",
        content:
          "This quiz tests your understanding of linked lists. You'll be asked about the differences between singly and doubly linked lists, as well as common operations like insertion, deletion, and searching.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Trees Quiz",
        content:
          "Test your knowledge of trees, focusing on binary trees and binary search trees. You'll answer questions on tree traversal techniques (in-order, pre-order, post-order) and how to implement search algorithms in trees.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Graph Traversal Quiz",
        content:
          "This quiz evaluates your understanding of graph traversal techniques such as Depth-First Search (DFS) and Breadth-First Search (BFS). You'll also be tested on real-world applications of graphs like social networks and web crawlers.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Hashing Quiz",
        content:
          "Test your knowledge of hashing techniques. You'll be asked about hash tables, collision handling, and the efficiency of different hashing algorithms. This quiz will also cover real-world applications of hash maps.",
        status: "published",
        author: users[1].id,
      },

      // Quizzes for "Introduction to Machine Learning"
      {
        name: "Machine Learning Basics Quiz",
        content:
          "This quiz covers the fundamentals of machine learning. You'll test your knowledge of supervised and unsupervised learning, the difference between classification and regression, and key evaluation metrics like accuracy and precision.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "ML Algorithms Quiz",
        content:
          "This quiz will assess your understanding of common machine learning algorithms, including linear regression, decision trees, and k-means clustering. You'll be asked to identify which algorithm is best suited for specific problems.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "Data Preprocessing Quiz",
        content:
          "This quiz tests your knowledge of data preprocessing in machine learning. You’ll be tested on how to handle missing data, normalize values, encode categorical variables, and split data into training and testing sets.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "ML Libraries Quiz",
        content:
          "Test your understanding of machine learning libraries like TensorFlow, Scikit-learn, and Keras. You’ll answer questions on using these libraries to train models, tune hyperparameters, and evaluate performance metrics.",
        status: "published",
        author: users[1].id,
      },
      {
        name: "ML Applications Quiz",
        content:
          "This quiz covers the real-world applications of machine learning. You'll be tested on using machine learning algorithms in areas like natural language processing, recommendation systems, and anomaly detection.",
        status: "published",
        author: users[1].id,
      },
    ]);

    const sectionitems = await SectionItem.bulkCreate([
      {
        sectionId: sections[0].id,
        itemId: lessons[0].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[0].id,
        itemId: lessons[2].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[0].id,
        itemId: lessons[3].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[0].id,
        itemId: lessons[4].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[0].id,
        itemId: quizzes[0].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[0].id,
        itemId: quizzes[2].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[0].id,
        itemId: quizzes[3].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[0].id,
        itemId: quizzes[4].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[1].id,
        itemId: lessons[1].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[1].id,
        itemId: quizzes[1].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[2].id,
        itemId: lessons[5].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[2].id,
        itemId: lessons[7].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[2].id,
        itemId: quizzes[5].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[2].id,
        itemId: quizzes[7].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[3].id,
        itemId: lessons[6].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[3].id,
        itemId: lessons[8].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[3].id,
        itemId: lessons[9].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[3].id,
        itemId: quizzes[6].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[3].id,
        itemId: quizzes[8].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[3].id,
        itemId: quizzes[9].id,
        itemOrder: 1,
        itemType: "quiz",
      },

      {
        sectionId: sections[4].id,
        itemId: lessons[10].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[4].id,
        itemId: lessons[11].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[4].id,
        itemId: lessons[13].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[4].id,
        itemId: lessons[14].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[4].id,
        itemId: quizzes[10].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[4].id,
        itemId: quizzes[11].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[4].id,
        itemId: quizzes[13].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[4].id,
        itemId: quizzes[14].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[5].id,
        itemId: lessons[12].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[5].id,
        itemId: quizzes[12].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[6].id,
        itemId: lessons[15].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[7].id,
        itemId: lessons[16].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[8].id,
        itemId: lessons[17].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[9].id,
        itemId: lessons[18].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[9].id,
        itemId: lessons[19].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[10].id,
        itemId: lessons[20].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[11].id,
        itemId: lessons[21].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[12].id,
        itemId: lessons[22].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[13].id,
        itemId: lessons[23].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[14].id,
        itemId: lessons[24].id,
        itemOrder: 1,
        itemType: "lesson",
      },
      {
        sectionId: sections[6].id,
        itemId: quizzes[15].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[7].id,
        itemId: quizzes[16].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[8].id,
        itemId: quizzes[17].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[9].id,
        itemId: quizzes[18].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[9].id,
        itemId: quizzes[19].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[10].id,
        itemId: quizzes[20].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[11].id,
        itemId: quizzes[21].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[12].id,
        itemId: quizzes[22].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[13].id,
        itemId: quizzes[23].id,
        itemOrder: 1,
        itemType: "quiz",
      },
      {
        sectionId: sections[14].id,
        itemId: quizzes[24].id,
        itemOrder: 1,
        itemType: "quiz",
      },
    ]);

    const questions = await Question.bulkCreate([
      {
        name: "Which of the following is correct for JavaScript variable declarations?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Is `let` scoped to the block in which it is defined?",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "What is the default value of a `const` variable if not initialized?",
        type: "short-answer",
        author: users[0].id,
      },
      {
        name: "Which of the following is an example of a function expression?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Arrow functions do not have their own `this` binding.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "What does the `return` keyword in a JavaScript function do?",
        type: "short-answer",
        author: users[0].id,
      },
      {
        name: "What method is used to attach an event listener to a DOM element?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Event propagation can be stopped by calling `event.stopPropagation()`",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "What method prevents the default action of an event?",
        type: "short-answer",
        author: users[0].id,
      },
      {
        name: "Which of the following methods is used to select a single element by its class name?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which of the following methods can be used to modify the text content of a DOM element?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "The `querySelector` method can return multiple elements when using class selectors.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "What will be the result of the following code?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "The `debugger` statement can be used to pause the execution of code in the browser developer tools.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "What could be the cause of the following error in JavaScript: `Uncaught TypeError: Cannot read property 'length' of null`?",
        type: "short-answer",
        author: users[0].id,
      },
      {
        name: "Which property is used to align items along the main axis in a Flexbox layout?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which of the following properties can be used to create a Flexbox layout?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "The `align-items` property aligns Flexbox items along the cross axis.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which property is used to define the number of columns in a CSS Grid layout?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which properties are used to control the space between rows in a CSS Grid layout?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "The `grid-template-areas` property allows you to assign grid items to specific areas in a CSS Grid layout.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which property is used to define the duration of an animation in CSS?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which of the following properties can be used to create a CSS keyframe animation?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "CSS animations allow you to define multiple keyframes for an animation.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which of the following is used to define a variable in SASS?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which features are provided by SASS preprocessors?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "SASS allows you to compile your stylesheets into regular CSS files.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which CSS feature is primarily used to create responsive web designs?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which CSS techniques can be used to make a website responsive?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "A responsive design allows a website to automatically adjust its layout based on the screen size.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which method is used to define routes in an Express.js application?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which of the following are valid middleware types in Express.js?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "Express.js provides built-in middleware for handling static files.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which method is used to create a new document in a MongoDB collection using Mongoose?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which of the following operations are considered CRUD actions in MongoDB?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "In MongoDB, the `findOne()` method returns an array of documents.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which HTTP method is typically used to retrieve data from a REST API?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which status codes are typically used for successful HTTP responses?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "A REST API should expose multiple endpoints for different resources.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which of the following is a common use case for JWT in a web application?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which of the following is stored in a JWT token?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "JWT tokens can be used to verify the identity of a user across multiple requests.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which cloud platform is commonly used for deploying Node.js applications?",
        type: "single-choice",
        author: users[0].id,
      },
      {
        name: "Which of the following factors are important to consider when deploying a Node.js application to production?",
        type: "multiple-choice",
        author: users[0].id,
      },
      {
        name: "AWS Elastic Beanstalk can automatically scale your Node.js application based on traffic.",
        type: "true-false",
        author: users[0].id,
      },
      {
        name: "Which method is used to add elements to the end of an array in JavaScript?",
        type: "single-choice",
        author: users[1].id,
      },
      {
        name: "Which of the following are valid methods to manipulate arrays?",
        type: "multiple-choice",
        author: users[1].id,
      },
      {
        name: "A singly linked list allows traversal in both forward and backward directions.",
        type: "true-false",
        author: users[1].id,
      },
      {
        name: "Which operation in a linked list has a time complexity of O(1)?",
        type: "single-choice",
        author: users[1].id,
      },
      {
        name: "Which tree traversal technique visits the left subtree, then the root, and finally the right subtree?",
        type: "single-choice",
        author: users[1].id,
      },
      {
        name: "Which operations are commonly performed on a binary search tree?",
        type: "multiple-choice",
        author: users[1].id,
      },
      {
        name: "Depth-First Search (DFS) can be implemented using a queue.",
        type: "true-false",
        author: users[1].id,
      },
      {
        name: "Which of the following is an application of graph traversal algorithms?",
        type: "single-choice",
        author: users[1].id,
      },
      {
        name: "A good hash function minimizes collisions.",
        type: "true-false",
        author: users[1].id,
      },
      {
        name: "Which collision handling technique uses a linked list for storing multiple values in the same bucket?",
        type: "single-choice",
        author: users[1].id,
      },
      {
        name: "Which type of learning involves labeled data?",
        type: "single-choice",
        author: users[1].id,
      },
      {
        name: "Accuracy is always the best metric for evaluating machine learning models.",
        type: "true-false",
        author: users[1].id,
      },
      {
        name: "Which algorithm is best suited for solving a regression problem?",
        type: "single-choice",
        author: users[1].id,
      },
      {
        name: "Decision trees are suitable for both classification and regression tasks.",
        type: "true-false",
        author: users[1].id,
      },
      {
        name: "What is the purpose of normalizing data?",
        type: "single-choice",
        author: users[1].id,
      },
      {
        name: "Which steps are involved in data preprocessing?",
        type: "multiple-choice",
        author: users[1].id,
      },
      {
        name: "Which library is commonly used for creating deep learning models?",
        type: "single-choice",
        author: users[1].id,
      },
      {
        name: "Keras is a high-level API built on top of TensorFlow.",
        type: "true-false",
        author: users[1].id,
      },
      {
        name: "Which of the following are applications of machine learning?",
        type: "multiple-choice",
        author: users[1].id,
      },
      {
        name: "What is the primary use of anomaly detection in machine learning?",
        type: "single-choice",
        author: users[1].id,
      },
    ]);

    const questionanswer = await QuestionAnswer.bulkCreate([
      {
        questionId: questions[0].id,
        answerText: "var allows variable redeclaration.",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[0].id,
        answerText: "let allows variable redeclaration.",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[0].id,
        answerText: "const allows variable redeclaration.",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[0].id,
        answerText: "var has block-scoping.",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[1].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[1].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[2].id,
        answerText: "SyntaxError: Missing initializer in const declaration.",
        value: 0,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[3].id,
        answerText: "const myFunc = function() {}; ",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[3].id,
        answerText: "function myFunc() {}; ",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[3].id,
        answerText: "const myFunc = () => {}; ",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[3].id,
        answerText: "function() {};",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[4].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[4].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[5].id,
        answerText: "It exits the function and optionally returns a value.",
        value: 0,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[6].id,
        answerText: "addEventListener()",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[6].id,
        answerText: "attachEvent()",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[6].id,
        answerText: "onClick()",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[6].id,
        answerText: "triggerEvent()",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[7].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[7].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[8].id,
        answerText: "event.preventDefault();",
        value: 0,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[9].id,
        answerText: "document.querySelector('.classname')",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[9].id,
        answerText: "document.getElementsByClassName('.classname')",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[9].id,
        answerText: "document.getElementById('.classname')",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[9].id,
        answerText: "document.querySelectorAll('.classname')",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[10].id,
        answerText: "element.textContent = 'new text';",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[10].id,
        answerText: "element.innerHTML = 'new text';",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[10].id,
        answerText: "element.setAttribute('text', 'new text');",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[10].id,
        answerText: "element.style.text = 'new text';",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[11].id,
        answerText: "True",
        value: 0,
        isCorrect: false,
        order: 1,
      },
      {
        questionId: questions[11].id,
        answerText: "False",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[12].id,
        answerText:
          "ReferenceError: Cannot access 'myVar' before initialization.",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[12].id,
        answerText: "undefined",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[12].id,
        answerText: "10",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[12].id,
        answerText: "null",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[13].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[13].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[14].id,
        answerText:
          "Attempting to access a property or method on a null or undefined value.",
        value: 0,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[15].id,
        answerText: "justify-content",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[15].id,
        answerText: "align-items",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[15].id,
        answerText: "align-self",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[15].id,
        answerText: "flex-wrap",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[16].id,
        answerText: "display: flex;",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[16].id,
        answerText: "display: grid;",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[16].id,
        answerText: "display: inline-block;",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[16].id,
        answerText: "display: block;",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[17].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[17].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[18].id,
        answerText: "grid-template-columns",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[18].id,
        answerText: "grid-template-rows",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[18].id,
        answerText: "grid-gap",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[18].id,
        answerText: "grid-template",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[19].id,
        answerText: "grid-row-gap",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[19].id,
        answerText: "grid-column-gap",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[19].id,
        answerText: "grid-gap",
        value: 1,
        isCorrect: true,
        order: 3,
      },
      {
        questionId: questions[19].id,
        answerText: "grid-template-rows",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[20].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[20].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[21].id,
        answerText: "animation-duration",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[21].id,
        answerText: "animation-time",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[21].id,
        answerText: "animation-delay",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[21].id,
        answerText: "animation-speed",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[22].id,
        answerText: "@keyframes",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[22].id,
        answerText: "animation-keyframes",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[22].id,
        answerText: "@animation",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[22].id,
        answerText: "@rules",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[23].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[23].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[24].id,
        answerText: "$variable-name: value;",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[24].id,
        answerText: "var(variable-name) = value;",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[24].id,
        answerText: "variable-name = value;",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[24].id,
        answerText: "define $variable-name = value;",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[25].id,
        answerText: "Nesting",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[25].id,
        answerText: "Variables",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[25].id,
        answerText: "Selectors",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[25].id,
        answerText: "Mixin",
        value: 1,
        isCorrect: true,
        order: 4,
      },
      {
        questionId: questions[26].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[26].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[27].id,
        answerText: "media queries",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[27].id,
        answerText: "flexbox",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[27].id,
        answerText: "grid layout",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[27].id,
        answerText: "CSS transitions",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[28].id,
        answerText: "Flexible grid layouts",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[28].id,
        answerText: "Media queries",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[28].id,
        answerText: "Pixel-based width",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[28].id,
        answerText: "Viewport-based units",
        value: 1,
        isCorrect: true,
        order: 4,
      },

      {
        questionId: questions[29].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[29].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[30].id,
        answerText: ".get()",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[30].id,
        answerText: ".route()",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[30].id,
        answerText: ".use()",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[30].id,
        answerText: ".set()",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[31].id,
        answerText: "Application-level middleware",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[31].id,
        answerText: "Router-level middleware",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[31].id,
        answerText: "Static middleware",
        value: 1,
        isCorrect: true,
        order: 3,
      },
      {
        questionId: questions[31].id,
        answerText: "Client-side middleware",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[32].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[32].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[33].id,
        answerText: ".save()",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[33].id,
        answerText: ".insert()",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[33].id,
        answerText: ".add()",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[33].id,
        answerText: ".create()",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[34].id,
        answerText: "Create",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[34].id,
        answerText: "Read",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[34].id,
        answerText: "Update",
        value: 1,
        isCorrect: true,
        order: 3,
      },
      {
        questionId: questions[34].id,
        answerText: "Delete",
        value: 1,
        isCorrect: true,
        order: 4,
      },
      {
        questionId: questions[35].id,
        answerText: "True",
        value: 0,
        isCorrect: false,
        order: 1,
      },
      {
        questionId: questions[35].id,
        answerText: "False",
        value: 1,
        isCorrect: true,
        order: 2,
      },

      {
        questionId: questions[36].id,
        answerText: "GET",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[36].id,
        answerText: "POST",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[36].id,
        answerText: "PUT",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[36].id,
        answerText: "DELETE",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[37].id,
        answerText: "200 OK",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[37].id,
        answerText: "201 Created",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[37].id,
        answerText: "400 Bad Request",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[37].id,
        answerText: "500 Internal Server Error",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[38].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[38].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[39].id,
        answerText: "User authentication",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[39].id,
        answerText: "Data encryption",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[39].id,
        answerText: "File storage",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[39].id,
        answerText: "Querying a database",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[40].id,
        answerText: "Header",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[40].id,
        answerText: "Payload",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[40].id,
        answerText: "Signature",
        value: 1,
        isCorrect: true,
        order: 3,
      },
      {
        questionId: questions[40].id,
        answerText: "Encrypted password",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[41].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[41].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[42].id,
        answerText: "Heroku",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[42].id,
        answerText: "AWS",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[42].id,
        answerText: "Azure",
        value: 1,
        isCorrect: true,
        order: 3,
      },
      {
        questionId: questions[42].id,
        answerText: "GoDaddy",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[43].id,
        answerText: "Environment variables",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[43].id,
        answerText: "Performance tuning",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[43].id,
        answerText: "Version control",
        value: 1,
        isCorrect: true,
        order: 3,
      },
      {
        questionId: questions[43].id,
        answerText: "Personal preferences",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[44].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[44].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },

      {
        questionId: questions[45].id,
        answerText: "push",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[45].id,
        answerText: "pop",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[45].id,
        answerText: "shift",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[45].id,
        answerText: "unshift",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[46].id,
        answerText: "splice",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[46].id,
        answerText: "slice",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[46].id,
        answerText: "split",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[46].id,
        answerText: "concat",
        value: 1,
        isCorrect: true,
        order: 4,
      },

      {
        questionId: questions[47].id,
        answerText: "True",
        value: 0,
        isCorrect: false,
        order: 1,
      },
      {
        questionId: questions[47].id,
        answerText: "False",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[48].id,
        answerText: "Insertion at the beginning",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[48].id,
        answerText: "Search for an element",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[48].id,
        answerText: "Insertion at the end",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[48].id,
        answerText: "Deletion of a specific node",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[49].id,
        answerText: "In-order",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[49].id,
        answerText: "Pre-order",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[49].id,
        answerText: "Post-order",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[49].id,
        answerText: "Level-order",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[50].id,
        answerText: "Insertion",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[50].id,
        answerText: "Deletion",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[50].id,
        answerText: "Traversal",
        value: 1,
        isCorrect: true,
        order: 3,
      },
      {
        questionId: questions[50].id,
        answerText: "Sorting",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[51].id,
        answerText: "True",
        value: 0,
        isCorrect: false,
        order: 1,
      },
      {
        questionId: questions[51].id,
        answerText: "False",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[52].id,
        answerText: "Web crawling",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[52].id,
        answerText: "Sorting numbers",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[52].id,
        answerText: "Binary search",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[52].id,
        answerText: "Matrix multiplication",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[53].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[53].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[54].id,
        answerText: "Chaining",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[54].id,
        answerText: "Linear probing",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[54].id,
        answerText: "Double hashing",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[54].id,
        answerText: "Open addressing",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[55].id,
        answerText: "Supervised learning",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[55].id,
        answerText: "Unsupervised learning",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[55].id,
        answerText: "Reinforcement learning",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[55].id,
        answerText: "Semi-supervised learning",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[56].id,
        answerText: "True",
        value: 0,
        isCorrect: false,
        order: 1,
      },
      {
        questionId: questions[56].id,
        answerText: "False",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[57].id,
        answerText: "Linear regression",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[57].id,
        answerText: "K-means clustering",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[57].id,
        answerText: "Logistic regression",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[57].id,
        answerText: "Random forest",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[58].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[58].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[59].id,
        answerText: "To scale values to a standard range",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[59].id,
        answerText: "To handle missing data",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[59].id,
        answerText: "To split data into training and testing sets",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[59].id,
        answerText: "To encode categorical variables",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[60].id,
        answerText: "Handling missing data",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[60].id,
        answerText: "Encoding categorical variables",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[60].id,
        answerText: "Splitting data",
        value: 1,
        isCorrect: true,
        order: 3,
      },
      {
        questionId: questions[60].id,
        answerText: "Training the model",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[61].id,
        answerText: "TensorFlow",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[61].id,
        answerText: "Scikit-learn",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[61].id,
        answerText: "Pandas",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[61].id,
        answerText: "NumPy",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[62].id,
        answerText: "True",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[62].id,
        answerText: "False",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[63].id,
        answerText: "Recommendation systems",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[63].id,
        answerText: "Natural language processing",
        value: 1,
        isCorrect: true,
        order: 2,
      },
      {
        questionId: questions[63].id,
        answerText: "Spam email detection",
        value: 1,
        isCorrect: true,
        order: 3,
      },
      {
        questionId: questions[63].id,
        answerText: "Text editing software",
        value: 0,
        isCorrect: false,
        order: 4,
      },
      {
        questionId: questions[64].id,
        answerText: "Detecting unusual patterns in data",
        value: 1,
        isCorrect: true,
        order: 1,
      },
      {
        questionId: questions[64].id,
        answerText: "Classifying data into predefined labels",
        value: 0,
        isCorrect: false,
        order: 2,
      },
      {
        questionId: questions[64].id,
        answerText: "Clustering data points",
        value: 0,
        isCorrect: false,
        order: 3,
      },
      {
        questionId: questions[64].id,
        answerText: "Improving model accuracy",
        value: 0,
        isCorrect: false,
        order: 4,
      },
    ]);

    const categories = await Category.bulkCreate([
      {
        name: "Programming",
        description: "Courses related to programming languages.",
      },
      {
        name: "Web Development",
        description:
          "Courses focused on building websites and web applications.",
      },
      {
        name: "Design",
        description: "Courses related to design principles and UI/UX.",
      },
      {
        name: "Frontend Development",
        description:
          "Courses focused on client-side development using HTML, CSS, and JavaScript.",
      },
      {
        name: "Backend Development",
        description:
          "Courses focused on server-side development, APIs, and database management.",
      },
      {
        name: "Full-Stack Development",
        description:
          "Courses that teach both frontend and backend development skills.",
      },
      {
        name: "Node.js",
        description:
          "Courses focused on backend development using Node.js and JavaScript.",
      },
      {
        name: "Data Structures",
        description:
          "Courses related to the study of data organization, management, and storage.",
      },
      {
        name: "Machine Learning",
        description:
          "Courses focused on algorithms and techniques in machine learning and artificial intelligence.",
      },
      {
        name: "AI & Deep Learning",
        description:
          "Courses related to advanced artificial intelligence and deep learning techniques.",
      },
      {
        name: "Computer Science",
        description:
          "Courses covering core concepts and principles of computer science.",
      },
    ]);

    const tags = await Tag.bulkCreate([
      {
        name: "JavaScript",
        description: "Related to JavaScript programming language.",
      },
      {
        name: "CSS",
        description: "Related to Cascading Style Sheets for styling webpages.",
      },
      {
        name: "Full-Stack",
        description: "Refers to both frontend and backend development skills.",
      },
      {
        name: "Node.js",
        description: "Related to Node.js framework for backend development.",
      },
      {
        name: "Frontend Development",
        description: "Techniques and tools for client-side web development.",
      },
      {
        name: "Backend Development",
        description:
          "Techniques and tools for server-side programming and database management.",
      },
      {
        name: "Web Design",
        description:
          "Design principles and techniques for web pages and applications.",
      },
      {
        name: "Algorithms",
        description:
          "Mathematical steps and processes to solve programming problems.",
      },
      {
        name: "Machine Learning",
        description:
          "Algorithms and techniques to enable computers to learn from data.",
      },
      {
        name: "Python",
        description:
          "Programming language often used for backend, data science, and machine learning.",
      },
      {
        name: "AI",
        description:
          "Related to Artificial Intelligence techniques and applications.",
      },
      {
        name: "Data Structures",
        description: "Concepts around the storage and manipulation of data.",
      },
    ]);

    const questioncategories = await QuestionCategory.bulkCreate([
      {
        name: "JavaScript 1",
        description: "",
      },
      {
        name: "JavaScript 2",
        description: "",
      },
    ]);
  } catch (error) {
    console.error("Error inserting default data:", error.message);
    throw error;
  }
};
