-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2025 at 02:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;



-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `description`) VALUES
(1, 'Programming', 'Courses related to programming languages.'),
(2, 'Web Development', 'Courses focused on building websites and web applications.'),
(3, 'Design', 'Courses related to design principles and UI/UX.'),
(4, 'Frontend Development', 'Courses focused on client-side development using HTML, CSS, and JavaScript.'),
(5, 'Backend Development', 'Courses focused on server-side development, APIs, and database management.'),
(6, 'Full-Stack Development', 'Courses that teach both frontend and backend development skills.'),
(7, 'Node.js', 'Courses focused on backend development using Node.js and JavaScript.'),
(8, 'Data Structures', 'Courses related to the study of data organization, management, and storage.'),
(9, 'Machine Learning', 'Courses focused on algorithms and techniques in machine learning and artificial intelligence.'),
(10, 'AI & Deep Learning', 'Courses related to advanced artificial intelligence and deep learning techniques.'),
(11, 'Computer Science', 'Courses covering core concepts and principles of computer science.');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL,
  `content` longtext NOT NULL,
  `status` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `status` varchar(50) NOT NULL,
  `author` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `name`, `content`, `status`, `author`, `createdAt`, `updatedAt`) VALUES
(1, 'Introduction to JavaScript', '\n          Learn the basics of JavaScript, the language that powers the web.\n          This course includes:\n          - **Variables**: `var`, `let`, and `const`.\n          - **Functions**: Regular, arrow, and IIFE (Immediately Invoked Function Expressions).\n          - **Events**: Handle user interactions like clicks, hovers, and input changes.\n          - **DOM Manipulation**: Dynamically change the structure and content of web pages.\n          - **Debugging Techniques**: Use browser tools to identify and fix issues in your code.\n        ', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(2, 'Advanced CSS Techniques', '\n          Dive into modern CSS to create visually stunning and responsive designs.\n          Topics covered:\n          - **Flexbox**: Master one-dimensional layouts with ease.\n          - **Grid Layout**: Create complex, two-dimensional designs with minimal effort.\n          - **CSS Animations**: Add interactivity with keyframes and transitions.\n          - **Preprocessors**: Use SASS and LESS to streamline your CSS workflow.\n          - **Responsive Design**: Build layouts that adapt perfectly to any screen size.\n        ', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(3, 'Full-Stack Development with Node.js', '\n          A comprehensive guide to building full-stack applications.\n          Highlights include:\n          - **Backend with Node.js**: Set up servers with Express.\n          - **Database Integration**: Use MongoDB for efficient data storage and retrieval.\n          - **REST APIs**: Design and implement robust APIs.\n          - **Authentication**: Implement user authentication with JWT and OAuth.\n          - **Deployment**: Deploy applications using cloud platforms like AWS or Heroku.\n        ', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(4, 'Understanding Data Structures', '\n          Build a solid foundation in data structures to solve real-world problems effectively.\n          Covered topics:\n          - **Arrays**: Dynamic memory management and traversal techniques.\n          - **Linked Lists**: Singly, doubly, and circular linked lists.\n          - **Trees**: Binary trees, binary search trees, and heaps.\n          - **Graphs**: Graph representation, traversal (DFS, BFS), and shortest path algorithms.\n          - **Hashing**: Techniques for fast data retrieval using hash tables.\n        ', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(5, 'Introduction to Machine Learning', '\n          Explore the fascinating world of machine learning and artificial intelligence.\n          Topics include:\n          - **Basics of Machine Learning**: Supervised, unsupervised, and reinforcement learning.\n          - **Key Algorithms**: Linear regression, decision trees, and k-means clustering.\n          - **Data Preprocessing**: Cleaning, transforming, and preparing data for models.\n          - **Libraries**: Use Python libraries like TensorFlow, Scikit-learn, and Keras.\n          - **Real-world Applications**: Implement solutions for classification, regression, and recommendation systems.\n        ', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48');

-- --------------------------------------------------------

--
-- Table structure for table `coursecategory`
--

CREATE TABLE `coursecategory` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coursecategory`
--

INSERT INTO `coursecategory` (`id`, `courseId`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2025-01-06 10:14:37', '2025-01-06 10:14:37'),
(2, 1, 2, '2025-01-06 10:15:06', '2025-01-06 10:15:06'),
(3, 2, 3, '2025-01-06 10:15:21', '2025-01-06 10:15:21'),
(4, 2, 2, '2025-01-06 10:15:21', '2025-01-06 10:15:21'),
(5, 3, 5, '2025-01-06 10:15:47', '2025-01-06 10:15:47'),
(6, 3, 7, '2025-01-06 10:15:47', '2025-01-06 10:15:47'),
(7, 3, 6, '2025-01-06 10:15:47', '2025-01-06 10:15:47'),
(8, 4, 8, '2025-01-06 10:16:39', '2025-01-06 10:16:39'),
(9, 4, 11, '2025-01-06 10:16:39', '2025-01-06 10:16:39'),
(10, 5, 9, '2025-01-06 10:17:01', '2025-01-06 10:17:01'),
(11, 5, 10, '2025-01-06 10:17:01', '2025-01-06 10:17:01');

-- --------------------------------------------------------

--
-- Table structure for table `coursemeta`
--

CREATE TABLE `coursemeta` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `metaKey` varchar(255) NOT NULL,
  `metaValue` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coursetag`
--

CREATE TABLE `coursetag` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `tagId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lesson`
--

CREATE TABLE `lesson` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `status` varchar(50) NOT NULL,
  `author` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lesson`
--

INSERT INTO `lesson` (`id`, `name`, `content`, `status`, `author`, `createdAt`, `updatedAt`) VALUES
(1, 'Introduction to Variables', 'In this lesson, you\'ll explore the basics of variables in JavaScript. You\'ll learn how to declare variables using `var`, `let`, and `const`, and understand the differences in their scope, hoisting behavior, and mutability. Key examples will include practical use cases of each type.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(2, 'Working with Functions', 'This lesson covers the fundamentals of functions in JavaScript. You\'ll learn the different types of functions such as regular functions, arrow functions, and Immediately Invoked Function Expressions (IIFE). We\'ll also discuss how to pass parameters, return values, and handle scope within functions.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(3, 'Event Handling in JavaScript', 'In this lesson, you\'ll dive into handling user interactions in JavaScript. You\'ll learn how to use event listeners to capture and respond to user actions like clicks, hover, and form submissions. You\'ll also explore event bubbling and capturing, as well as how to prevent default behavior in some cases.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(4, 'DOM Manipulation Basics', 'This lesson introduces the Document Object Model (DOM) and teaches you how to modify HTML and CSS dynamically using JavaScript. You\'ll learn how to use methods like `getElementById`, `querySelector`, and `appendChild` to interact with page elements and update content in real time.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(5, 'Debugging JavaScript Code', 'Debugging is an essential skill for every developer. This lesson will show you how to debug JavaScript code using browser developer tools. You\'ll learn how to set breakpoints, inspect variables, step through code, and identify issues like scope errors, undefined values, and logic mistakes.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(6, 'Understanding Flexbox', 'Flexbox is a powerful tool for creating responsive layouts. In this lesson, you\'ll learn how to align items along a single axis, how to distribute space, and how to reorder elements using Flexbox properties such as `justify-content`, `align-items`, and `flex-direction`.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(7, 'CSS Grid Layouts', 'CSS Grid Layout allows you to design complex two-dimensional layouts with ease. This lesson covers how to create grid containers, define grid rows and columns, and place grid items precisely. You\'ll also learn about grid gap, alignment properties, and advanced grid layout techniques.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(8, 'Creating CSS Animations', 'Animations can greatly enhance the user experience. In this lesson, you\'ll learn how to create smooth animations using CSS. We\'ll explore keyframe animations, transitions, and effects that make elements change state over time, such as hover effects and loading spinners.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(9, 'SASS and LESS Basics', 'CSS preprocessors like SASS and LESS allow for cleaner and more efficient stylesheets. This lesson will introduce you to SASS and LESS syntax, mixins, variables, nesting, and inheritance. You\'ll learn how to set up a preprocessor environment and integrate it into your project.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(10, 'Building Responsive Designs', 'Responsive design ensures that your website adapts seamlessly to different screen sizes. In this lesson, you\'ll learn how to use media queries, fluid grids, and flexible images to create layouts that work on devices ranging from desktops to smartphones.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(11, 'Setting Up Express Servers', 'This lesson covers the basics of setting up a server with Express.js. You\'ll learn how to install Express, configure middleware, handle routes, and return JSON responses. You\'ll also explore how to create a simple REST API using Express.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(12, 'Integrating MongoDB', 'Learn how to connect your Node.js application to MongoDB. In this lesson, you\'ll see how to install and configure the Mongoose library, define schemas and models, and interact with a MongoDB database to perform CRUD operations.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(13, 'Designing REST APIs', 'This lesson focuses on designing RESTful APIs with Node.js and Express. You\'ll learn the principles of REST, how to structure your API endpoints, handle different HTTP methods, and manage status codes and error handling in a user-friendly way.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(14, 'User Authentication with JWT', 'In this lesson, you’ll implement secure user authentication using JSON Web Tokens (JWT). You’ll learn how to create login systems, store tokens securely, and protect routes by verifying JWT tokens in your backend.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(15, 'Deploying Applications', 'Learn how to deploy your Node.js applications to the cloud. In this lesson, you’ll explore different hosting platforms like Heroku, AWS, and DigitalOcean. You’ll see how to set up continuous deployment and configure your production environment for optimal performance.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(16, 'Array Basics', 'Arrays are one of the most common data structures in programming. In this lesson, you\'ll learn how to declare arrays, traverse them, and manipulate their elements. You’ll also explore built-in array methods for sorting, filtering, and mapping.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(17, 'Working with Linked Lists', 'Linked lists are an essential data structure for dynamic data storage. This lesson covers the implementation of singly, doubly, and circular linked lists. You\'ll learn the differences between each type and how to perform common operations like insertion and deletion.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(18, 'Introduction to Trees', 'Trees are hierarchical data structures that are vital for representing relationships between elements. In this lesson, you\'ll learn about binary trees, binary search trees (BST), and heaps. You\'ll also explore tree traversal algorithms such as in-order, pre-order, and post-order.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(19, 'Graph Traversal Techniques', 'Graphs are versatile data structures for modeling complex relationships. This lesson explains the fundamentals of graphs and covers traversal techniques like Depth-First Search (DFS) and Breadth-First Search (BFS). You’ll also learn about the shortest path algorithms like Dijkstra’s algorithm.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(20, 'Hashing Techniques', 'Hash tables are incredibly efficient for fast data retrieval. This lesson explains how hash tables work, including how hashing algorithms map data to specific locations in memory. You’ll also learn how to handle collisions and the benefits of using hash maps for key-value pairs.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(21, 'Basics of Machine Learning', 'Machine learning involves creating algorithms that enable computers to learn from data. This lesson introduces supervised, unsupervised, and reinforcement learning. You\'ll also explore how data is used to train models, and how evaluation metrics such as accuracy and precision are calculated.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(22, 'Data Preprocessing', 'Data preprocessing is a crucial step in preparing data for machine learning. In this lesson, you\'ll learn how to clean and preprocess data, including handling missing values, scaling features, and encoding categorical variables. This ensures your data is ready for training models.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(23, 'Key ML Algorithms', 'In this lesson, you\'ll learn about essential machine learning algorithms. You’ll explore linear regression, decision trees, and clustering algorithms like k-means. You’ll also learn how these algorithms can be applied to real-world problems like classification and prediction.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(24, 'Using ML Libraries', 'Python libraries like TensorFlow, Scikit-learn, and Keras simplify machine learning tasks. In this lesson, you\'ll learn how to use these libraries to implement machine learning models, from data processing to model evaluation and prediction.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(25, 'Real-world ML Applications', 'Machine learning has many practical applications. In this lesson, you\'ll learn how to apply machine learning algorithms to tasks like classification, regression, recommendation systems, and anomaly detection. You’ll also explore case studies from various industries.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48');

-- --------------------------------------------------------

--
-- Table structure for table `lessonmeta`
--

CREATE TABLE `lessonmeta` (
  `id` int(11) NOT NULL,
  `lessonId` int(11) NOT NULL,
  `metaKey` varchar(255) NOT NULL,
  `metaValue` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `name`, `author`, `type`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Which of the following is correct for JavaScript variable declarations?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(2, 'Is `let` scoped to the block in which it is defined?', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(3, 'What is the default value of a `const` variable if not initialized?', 1, 'short-answer', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(4, 'Which of the following is an example of a function expression?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(5, 'Arrow functions do not have their own `this` binding.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(6, 'What does the `return` keyword in a JavaScript function do?', 1, 'short-answer', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(7, 'What method is used to attach an event listener to a DOM element?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(8, 'Event propagation can be stopped by calling `event.stopPropagation()`', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(9, 'What method prevents the default action of an event?', 1, 'short-answer', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(10, 'Which of the following methods is used to select a single element by its class name?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(11, 'Which of the following methods can be used to modify the text content of a DOM element?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(12, 'The `querySelector` method can return multiple elements when using class selectors.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(13, 'What will be the result of the following code?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(14, 'The `debugger` statement can be used to pause the execution of code in the browser developer tools.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(15, 'What could be the cause of the following error in JavaScript: `Uncaught TypeError: Cannot read property \'length\' of null`?', 1, 'short-answer', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(16, 'Which property is used to align items along the main axis in a Flexbox layout?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(17, 'Which of the following properties can be used to create a Flexbox layout?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(18, 'The `align-items` property aligns Flexbox items along the cross axis.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(19, 'Which property is used to define the number of columns in a CSS Grid layout?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(20, 'Which properties are used to control the space between rows in a CSS Grid layout?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(21, 'The `grid-template-areas` property allows you to assign grid items to specific areas in a CSS Grid layout.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(22, 'Which property is used to define the duration of an animation in CSS?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(23, 'Which of the following properties can be used to create a CSS keyframe animation?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(24, 'CSS animations allow you to define multiple keyframes for an animation.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(25, 'Which of the following is used to define a variable in SASS?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(26, 'Which features are provided by SASS preprocessors?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(27, 'SASS allows you to compile your stylesheets into regular CSS files.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(28, 'Which CSS feature is primarily used to create responsive web designs?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(29, 'Which CSS techniques can be used to make a website responsive?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(30, 'A responsive design allows a website to automatically adjust its layout based on the screen size.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(31, 'Which method is used to define routes in an Express.js application?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(32, 'Which of the following are valid middleware types in Express.js?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(33, 'Express.js provides built-in middleware for handling static files.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(34, 'Which method is used to create a new document in a MongoDB collection using Mongoose?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(35, 'Which of the following operations are considered CRUD actions in MongoDB?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(36, 'In MongoDB, the `findOne()` method returns an array of documents.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(37, 'Which HTTP method is typically used to retrieve data from a REST API?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(38, 'Which status codes are typically used for successful HTTP responses?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(39, 'A REST API should expose multiple endpoints for different resources.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(40, 'Which of the following is a common use case for JWT in a web application?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(41, 'Which of the following is stored in a JWT token?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(42, 'JWT tokens can be used to verify the identity of a user across multiple requests.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(43, 'Which cloud platform is commonly used for deploying Node.js applications?', 1, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(44, 'Which of the following factors are important to consider when deploying a Node.js application to production?', 1, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(45, 'AWS Elastic Beanstalk can automatically scale your Node.js application based on traffic.', 1, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(46, 'Which method is used to add elements to the end of an array in JavaScript?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(47, 'Which of the following are valid methods to manipulate arrays?', 2, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(48, 'A singly linked list allows traversal in both forward and backward directions.', 2, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(49, 'Which operation in a linked list has a time complexity of O(1)?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(50, 'Which tree traversal technique visits the left subtree, then the root, and finally the right subtree?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(51, 'Which operations are commonly performed on a binary search tree?', 2, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(52, 'Depth-First Search (DFS) can be implemented using a queue.', 2, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(53, 'Which of the following is an application of graph traversal algorithms?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(54, 'A good hash function minimizes collisions.', 2, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(55, 'Which collision handling technique uses a linked list for storing multiple values in the same bucket?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(56, 'Which type of learning involves labeled data?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(57, 'Accuracy is always the best metric for evaluating machine learning models.', 2, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(58, 'Which algorithm is best suited for solving a regression problem?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(59, 'Decision trees are suitable for both classification and regression tasks.', 2, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(60, 'What is the purpose of normalizing data?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(61, 'Which steps are involved in data preprocessing?', 2, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(62, 'Which library is commonly used for creating deep learning models?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(63, 'Keras is a high-level API built on top of TensorFlow.', 2, 'true-false', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(64, 'Which of the following are applications of machine learning?', 2, 'multiple-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(65, 'What is the primary use of anomaly detection in machine learning?', 2, 'single-choice', 'published', '2025-01-06 04:18:48', '2025-01-06 04:18:48');

-- --------------------------------------------------------

--
-- Table structure for table `questioncategory`
--

CREATE TABLE `questioncategory` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questioncategory`
--

INSERT INTO `questioncategory` (`id`, `name`, `description`) VALUES
(1, 'JavaScript 1', 'JavaScript Quiz Set 1'),
(2, 'JavaScript 2', 'JavaScript Quiz Set 2');

-- --------------------------------------------------------

--
-- Table structure for table `questionmeta`
--

CREATE TABLE `questionmeta` (
  `id` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  `metaKey` varchar(255) NOT NULL,
  `metaValue` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questionset`
--

CREATE TABLE `questionset` (
  `id` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question_answers`
--

CREATE TABLE `question_answers` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer_text` text NOT NULL,
  `value` text NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT 0,
  `order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question_answers`
--

INSERT INTO `question_answers` (`id`, `question_id`, `answer_text`, `value`, `is_correct`, `order`) VALUES
(1, 1, 'var allows variable redeclaration.', '1', 1, 1),
(2, 1, 'let allows variable redeclaration.', '0', 0, 2),
(3, 1, 'const allows variable redeclaration.', '0', 0, 3),
(4, 1, 'var has block-scoping.', '0', 0, 4),
(5, 2, 'True', '1', 1, 1),
(6, 2, 'False', '0', 0, 2),
(7, 3, 'SyntaxError: Missing initializer in const declaration.', '0', 1, 1),
(8, 4, 'const myFunc = function() {}; ', '1', 1, 1),
(9, 4, 'function myFunc() {}; ', '0', 0, 2),
(10, 4, 'const myFunc = () => {}; ', '0', 0, 3),
(11, 4, 'function() {};', '0', 0, 4),
(12, 5, 'True', '1', 1, 1),
(13, 5, 'False', '0', 0, 2),
(14, 6, 'It exits the function and optionally returns a value.', '0', 1, 1),
(15, 7, 'addEventListener()', '1', 1, 1),
(16, 7, 'attachEvent()', '0', 0, 2),
(17, 7, 'onClick()', '0', 0, 3),
(18, 7, 'triggerEvent()', '0', 0, 4),
(19, 8, 'True', '1', 1, 1),
(20, 8, 'False', '0', 0, 2),
(21, 9, 'event.preventDefault();', '0', 1, 1),
(22, 10, 'document.querySelector(\'.classname\')', '1', 1, 1),
(23, 10, 'document.getElementsByClassName(\'.classname\')', '0', 0, 2),
(24, 10, 'document.getElementById(\'.classname\')', '0', 0, 3),
(25, 10, 'document.querySelectorAll(\'.classname\')', '0', 0, 4),
(26, 11, 'element.textContent = \'new text\';', '1', 1, 1),
(27, 11, 'element.innerHTML = \'new text\';', '1', 1, 2),
(28, 11, 'element.setAttribute(\'text\', \'new text\');', '0', 0, 3),
(29, 11, 'element.style.text = \'new text\';', '0', 0, 4),
(30, 12, 'True', '0', 0, 1),
(31, 12, 'False', '1', 1, 2),
(32, 13, 'ReferenceError: Cannot access \'myVar\' before initialization.', '1', 1, 1),
(33, 13, 'undefined', '0', 0, 2),
(34, 13, '10', '0', 0, 3),
(35, 13, 'null', '0', 0, 4),
(36, 14, 'True', '1', 1, 1),
(37, 14, 'False', '0', 0, 2),
(38, 15, 'Attempting to access a property or method on a null or undefined value.', '0', 1, 1),
(39, 16, 'justify-content', '1', 1, 1),
(40, 16, 'align-items', '0', 0, 2),
(41, 16, 'align-self', '0', 0, 3),
(42, 16, 'flex-wrap', '0', 0, 4),
(43, 17, 'display: flex;', '1', 1, 1),
(44, 17, 'display: grid;', '0', 0, 2),
(45, 17, 'display: inline-block;', '0', 0, 3),
(46, 17, 'display: block;', '0', 0, 4),
(47, 18, 'True', '1', 1, 1),
(48, 18, 'False', '0', 0, 2),
(49, 19, 'grid-template-columns', '1', 1, 1),
(50, 19, 'grid-template-rows', '0', 0, 2),
(51, 19, 'grid-gap', '0', 0, 3),
(52, 19, 'grid-template', '0', 0, 4),
(53, 20, 'grid-row-gap', '1', 1, 1),
(54, 20, 'grid-column-gap', '0', 0, 2),
(55, 20, 'grid-gap', '1', 1, 3),
(56, 20, 'grid-template-rows', '0', 0, 4),
(57, 21, 'True', '1', 1, 1),
(58, 21, 'False', '0', 0, 2),
(59, 22, 'animation-duration', '1', 1, 1),
(60, 22, 'animation-time', '0', 0, 2),
(61, 22, 'animation-delay', '0', 0, 3),
(62, 22, 'animation-speed', '0', 0, 4),
(63, 23, '@keyframes', '1', 1, 1),
(64, 23, 'animation-keyframes', '0', 0, 2),
(65, 23, '@animation', '0', 0, 3),
(66, 23, '@rules', '0', 0, 4),
(67, 24, 'True', '1', 1, 1),
(68, 24, 'False', '0', 0, 2),
(69, 25, '$variable-name: value;', '1', 1, 1),
(70, 25, 'var(variable-name) = value;', '0', 0, 2),
(71, 25, 'variable-name = value;', '0', 0, 3),
(72, 25, 'define $variable-name = value;', '0', 0, 4),
(73, 26, 'Nesting', '1', 1, 1),
(74, 26, 'Variables', '1', 1, 2),
(75, 26, 'Selectors', '0', 0, 3),
(76, 26, 'Mixin', '1', 1, 4),
(77, 27, 'True', '1', 1, 1),
(78, 27, 'False', '0', 0, 2),
(79, 28, 'media queries', '1', 1, 1),
(80, 28, 'flexbox', '0', 0, 2),
(81, 28, 'grid layout', '0', 0, 3),
(82, 28, 'CSS transitions', '0', 0, 4),
(83, 29, 'Flexible grid layouts', '1', 1, 1),
(84, 29, 'Media queries', '1', 1, 2),
(85, 29, 'Pixel-based width', '0', 0, 3),
(86, 29, 'Viewport-based units', '1', 1, 4),
(87, 30, 'True', '1', 1, 1),
(88, 30, 'False', '0', 0, 2),
(89, 31, '.get()', '1', 1, 1),
(90, 31, '.route()', '0', 0, 2),
(91, 31, '.use()', '0', 0, 3),
(92, 31, '.set()', '0', 0, 4),
(93, 32, 'Application-level middleware', '1', 1, 1),
(94, 32, 'Router-level middleware', '1', 1, 2),
(95, 32, 'Static middleware', '1', 1, 3),
(96, 32, 'Client-side middleware', '0', 0, 4),
(97, 33, 'True', '1', 1, 1),
(98, 33, 'False', '0', 0, 2),
(99, 34, '.save()', '1', 1, 1),
(100, 34, '.insert()', '0', 0, 2),
(101, 34, '.add()', '0', 0, 3),
(102, 34, '.create()', '0', 0, 4),
(103, 35, 'Create', '1', 1, 1),
(104, 35, 'Read', '1', 1, 2),
(105, 35, 'Update', '1', 1, 3),
(106, 35, 'Delete', '1', 1, 4),
(107, 36, 'True', '0', 0, 1),
(108, 36, 'False', '1', 1, 2),
(109, 37, 'GET', '1', 1, 1),
(110, 37, 'POST', '0', 0, 2),
(111, 37, 'PUT', '0', 0, 3),
(112, 37, 'DELETE', '0', 0, 4),
(113, 38, '200 OK', '1', 1, 1),
(114, 38, '201 Created', '1', 1, 2),
(115, 38, '400 Bad Request', '0', 0, 3),
(116, 38, '500 Internal Server Error', '0', 0, 4),
(117, 39, 'True', '1', 1, 1),
(118, 39, 'False', '0', 0, 2),
(119, 40, 'User authentication', '1', 1, 1),
(120, 40, 'Data encryption', '0', 0, 2),
(121, 40, 'File storage', '0', 0, 3),
(122, 40, 'Querying a database', '0', 0, 4),
(123, 41, 'Header', '1', 1, 1),
(124, 41, 'Payload', '1', 1, 2),
(125, 41, 'Signature', '1', 1, 3),
(126, 41, 'Encrypted password', '0', 0, 4),
(127, 42, 'True', '1', 1, 1),
(128, 42, 'False', '0', 0, 2),
(129, 43, 'Heroku', '1', 1, 1),
(130, 43, 'AWS', '1', 1, 2),
(131, 43, 'Azure', '1', 1, 3),
(132, 43, 'GoDaddy', '0', 0, 4),
(133, 44, 'Environment variables', '1', 1, 1),
(134, 44, 'Performance tuning', '1', 1, 2),
(135, 44, 'Version control', '1', 1, 3),
(136, 44, 'Personal preferences', '0', 0, 4),
(137, 45, 'True', '1', 1, 1),
(138, 45, 'False', '0', 0, 2),
(139, 46, 'push', '1', 1, 1),
(140, 46, 'pop', '0', 0, 2),
(141, 46, 'shift', '0', 0, 3),
(142, 46, 'unshift', '0', 0, 4),
(143, 47, 'splice', '1', 1, 1),
(144, 47, 'slice', '1', 1, 2),
(145, 47, 'split', '0', 0, 3),
(146, 47, 'concat', '1', 1, 4),
(147, 48, 'True', '0', 0, 1),
(148, 48, 'False', '1', 1, 2),
(149, 49, 'Insertion at the beginning', '1', 1, 1),
(150, 49, 'Search for an element', '0', 0, 2),
(151, 49, 'Insertion at the end', '0', 0, 3),
(152, 49, 'Deletion of a specific node', '0', 0, 4),
(153, 50, 'In-order', '1', 1, 1),
(154, 50, 'Pre-order', '0', 0, 2),
(155, 50, 'Post-order', '0', 0, 3),
(156, 50, 'Level-order', '0', 0, 4),
(157, 51, 'Insertion', '1', 1, 1),
(158, 51, 'Deletion', '1', 1, 2),
(159, 51, 'Traversal', '1', 1, 3),
(160, 51, 'Sorting', '0', 0, 4),
(161, 52, 'True', '0', 0, 1),
(162, 52, 'False', '1', 1, 2),
(163, 53, 'Web crawling', '1', 1, 1),
(164, 53, 'Sorting numbers', '0', 0, 2),
(165, 53, 'Binary search', '0', 0, 3),
(166, 53, 'Matrix multiplication', '0', 0, 4),
(167, 54, 'True', '1', 1, 1),
(168, 54, 'False', '0', 0, 2),
(169, 55, 'Chaining', '1', 1, 1),
(170, 55, 'Linear probing', '0', 0, 2),
(171, 55, 'Double hashing', '0', 0, 3),
(172, 55, 'Open addressing', '0', 0, 4),
(173, 56, 'Supervised learning', '1', 1, 1),
(174, 56, 'Unsupervised learning', '0', 0, 2),
(175, 56, 'Reinforcement learning', '0', 0, 3),
(176, 56, 'Semi-supervised learning', '0', 0, 4),
(177, 57, 'True', '0', 0, 1),
(178, 57, 'False', '1', 1, 2),
(179, 58, 'Linear regression', '1', 1, 1),
(180, 58, 'K-means clustering', '0', 0, 2),
(181, 58, 'Logistic regression', '0', 0, 3),
(182, 58, 'Random forest', '0', 0, 4),
(183, 59, 'True', '1', 1, 1),
(184, 59, 'False', '0', 0, 2),
(185, 60, 'To scale values to a standard range', '1', 1, 1),
(186, 60, 'To handle missing data', '0', 0, 2),
(187, 60, 'To split data into training and testing sets', '0', 0, 3),
(188, 60, 'To encode categorical variables', '0', 0, 4),
(189, 61, 'Handling missing data', '1', 1, 1),
(190, 61, 'Encoding categorical variables', '1', 1, 2),
(191, 61, 'Splitting data', '1', 1, 3),
(192, 61, 'Training the model', '0', 0, 4),
(193, 62, 'TensorFlow', '1', 1, 1),
(194, 62, 'Scikit-learn', '0', 0, 2),
(195, 62, 'Pandas', '0', 0, 3),
(196, 62, 'NumPy', '0', 0, 4),
(197, 63, 'True', '1', 1, 1),
(198, 63, 'False', '0', 0, 2),
(199, 64, 'Recommendation systems', '1', 1, 1),
(200, 64, 'Natural language processing', '1', 1, 2),
(201, 64, 'Spam email detection', '1', 1, 3),
(202, 64, 'Text editing software', '0', 0, 4),
(203, 65, 'Detecting unusual patterns in data', '1', 1, 1),
(204, 65, 'Classifying data into predefined labels', '0', 0, 2),
(205, 65, 'Clustering data points', '0', 0, 3),
(206, 65, 'Improving model accuracy', '0', 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `status` varchar(50) NOT NULL,
  `author` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `name`, `content`, `status`, `author`, `createdAt`, `updatedAt`) VALUES
(1, 'Variables Quiz', 'Test your knowledge of JavaScript variables. This quiz will cover variable declarations, scope, and hoisting with `var`, `let`, and `const`. You\'ll also be tested on how to properly declare and use variables in different scenarios.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(2, 'Functions Quiz', 'Evaluate your understanding of JavaScript functions. The quiz includes questions on function declarations, expressions, arrow functions, and IIFE. You’ll also test your knowledge of parameter passing, return values, and scope.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(3, 'Event Handling Quiz', 'This quiz tests your ability to handle user events in JavaScript. You’ll answer questions on attaching event listeners, event propagation, and preventing default actions in forms, links, and other interactive elements.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(4, 'DOM Manipulation Quiz', 'Test your skills in DOM manipulation. The quiz focuses on selecting and modifying DOM elements using methods like `getElementById`, `querySelector`, and handling element events dynamically using JavaScript.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(5, 'Debugging Quiz', 'This quiz evaluates your ability to debug JavaScript code. You’ll be asked about common errors, how to use browser developer tools, and strategies for locating issues such as `undefined` variables, function scope errors, and logic mistakes.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(6, 'Flexbox Quiz', 'Assess your knowledge of Flexbox, one of the most powerful layout models in CSS. The quiz will test your understanding of properties like `justify-content`, `align-items`, `flex-direction`, and more to create flexible, responsive layouts.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(7, 'Grid Layout Quiz', 'This quiz will test your understanding of CSS Grid. You’ll answer questions about creating two-dimensional layouts using `grid-template-columns`, `grid-template-rows`, `grid-gap`, and other essential grid properties.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(8, 'CSS Animations Quiz', 'Evaluate your skills in creating CSS animations. The quiz covers keyframe animations, timing functions, transitions, and animation effects such as fading, sliding, and bouncing.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(9, 'Preprocessors Quiz', 'Test your understanding of CSS preprocessors like SASS and LESS. The quiz will cover the basic features of both, including variables, nesting, mixins, and the compilation process into regular CSS.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(10, 'Responsive Design Quiz', 'This quiz will assess your knowledge of creating responsive websites. You’ll answer questions on media queries, flexible grids, and making elements adapt to different screen sizes and orientations.', 'published', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(11, 'Express Setup Quiz', 'Test your knowledge of setting up an Express.js server. This quiz includes questions on routing, middleware, error handling, and how to configure your server for different environments.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(12, 'MongoDB Integration Quiz', 'This quiz tests your understanding of integrating MongoDB with Node.js. You’ll be tested on Mongoose models, queries, and database operations such as CRUD (Create, Read, Update, Delete) actions.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(13, 'REST API Design Quiz', 'Evaluate your ability to design RESTful APIs in Node.js. The quiz includes questions on REST principles, HTTP methods, status codes, and building endpoints for CRUD operations.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(14, 'JWT Authentication Quiz', 'This quiz evaluates your understanding of securing Node.js applications with JSON Web Tokens (JWT). Questions will cover token generation, token storage, and authentication middleware to secure API endpoints.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(15, 'Node.js Deployment Quiz', 'This quiz will test your knowledge of deploying Node.js applications. You’ll answer questions on cloud hosting platforms like Heroku and AWS, configuring production environments, and handling deployment workflows.', 'draft', 1, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(16, 'Array Basics Quiz', 'Test your knowledge of arrays, the fundamental data structure. This quiz will cover array methods such as `push`, `pop`, `shift`, and `unshift`, and concepts like multi-dimensional arrays and array traversal.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(17, 'Linked Lists Quiz', 'This quiz tests your understanding of linked lists. You\'ll be asked about the differences between singly and doubly linked lists, as well as common operations like insertion, deletion, and searching.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(18, 'Trees Quiz', 'Test your knowledge of trees, focusing on binary trees and binary search trees. You\'ll answer questions on tree traversal techniques (in-order, pre-order, post-order) and how to implement search algorithms in trees.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(19, 'Graph Traversal Quiz', 'This quiz evaluates your understanding of graph traversal techniques such as Depth-First Search (DFS) and Breadth-First Search (BFS). You\'ll also be tested on real-world applications of graphs like social networks and web crawlers.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(20, 'Hashing Quiz', 'Test your knowledge of hashing techniques. You\'ll be asked about hash tables, collision handling, and the efficiency of different hashing algorithms. This quiz will also cover real-world applications of hash maps.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(21, 'Machine Learning Basics Quiz', 'This quiz covers the fundamentals of machine learning. You\'ll test your knowledge of supervised and unsupervised learning, the difference between classification and regression, and key evaluation metrics like accuracy and precision.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(22, 'ML Algorithms Quiz', 'This quiz will assess your understanding of common machine learning algorithms, including linear regression, decision trees, and k-means clustering. You\'ll be asked to identify which algorithm is best suited for specific problems.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(23, 'Data Preprocessing Quiz', 'This quiz tests your knowledge of data preprocessing in machine learning. You’ll be tested on how to handle missing data, normalize values, encode categorical variables, and split data into training and testing sets.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(24, 'ML Libraries Quiz', 'Test your understanding of machine learning libraries like TensorFlow, Scikit-learn, and Keras. You’ll answer questions on using these libraries to train models, tune hyperparameters, and evaluate performance metrics.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48'),
(25, 'ML Applications Quiz', 'This quiz covers the real-world applications of machine learning. You\'ll be tested on using machine learning algorithms in areas like natural language processing, recommendation systems, and anomaly detection.', 'published', 2, '2025-01-06 04:18:48', '2025-01-06 04:18:48');

-- --------------------------------------------------------

--
-- Table structure for table `quizmeta`
--

CREATE TABLE `quizmeta` (
  `id` int(11) NOT NULL,
  `quizId` int(11) NOT NULL,
  `metaKey` varchar(255) NOT NULL,
  `metaValue` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quizquestion`
--

CREATE TABLE `quizquestion` (
  `id` int(11) NOT NULL,
  `quizId` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  `order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quizquestion`
--

INSERT INTO `quizquestion` (`id`, `quizId`, `questionId`, `order`) VALUES
(3, 1, 1, 1),
(4, 1, 2, 2),
(5, 1, 3, 3),
(6, 2, 4, 1),
(7, 2, 5, 2),
(8, 2, 6, 3),
(9, 3, 7, 1),
(10, 3, 8, 2),
(11, 3, 9, 3),
(12, 4, 10, 1),
(13, 4, 11, 2),
(14, 4, 12, 3),
(15, 5, 13, 1),
(16, 5, 14, 2),
(17, 5, 15, 3),
(18, 6, 16, 1),
(19, 6, 17, 2),
(20, 6, 18, 3),
(21, 7, 19, 1),
(22, 7, 20, 2),
(23, 7, 21, 3),
(24, 8, 22, 1),
(25, 8, 23, 2),
(26, 8, 24, 3),
(27, 9, 25, 1),
(28, 9, 26, 2),
(29, 9, 27, 3),
(30, 10, 28, 1),
(31, 10, 29, 2),
(32, 10, 30, 3),
(33, 11, 31, 1),
(34, 11, 32, 2),
(35, 11, 33, 3),
(36, 12, 34, 1),
(37, 12, 35, 2),
(38, 12, 36, 3),
(39, 13, 37, 1),
(40, 13, 38, 2),
(41, 13, 39, 3),
(42, 14, 40, 1),
(43, 14, 41, 2),
(44, 14, 42, 3),
(45, 15, 43, 1),
(46, 15, 44, 2),
(47, 15, 45, 3),
(48, 16, 46, 1),
(49, 16, 47, 2),
(50, 17, 48, 1),
(51, 17, 49, 2),
(52, 18, 50, 1),
(53, 18, 51, 2),
(54, 19, 52, 1),
(55, 19, 53, 2),
(56, 20, 54, 1),
(57, 20, 55, 2),
(58, 21, 56, 1),
(59, 21, 57, 2),
(60, 22, 58, 1),
(61, 22, 59, 2),
(62, 23, 60, 1),
(63, 23, 61, 2),
(64, 24, 62, 1),
(65, 24, 63, 2),
(66, 25, 64, 1),
(67, 25, 65, 2);

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `sectionName` varchar(255) NOT NULL,
  `sectionDescription` varchar(500) DEFAULT NULL,
  `order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`id`, `courseId`, `sectionName`, `sectionDescription`, `order`) VALUES
(1, 1, 'Introduction to JavaScript Basics', 'This section covers variables, functions, and basic concepts.', 1),
(2, 1, 'Advanced Functions', 'Learn about arrow functions, closures, and IIFE.', 2),
(3, 2, 'Getting Started with Flexbox', 'Understand one-dimensional layout with Flexbox.', 1),
(4, 2, 'Grid Layout Techniques', 'Learn how to create complex layouts using CSS Grid.', 2),
(5, 3, 'Node.js Basics', 'Set up your first Node.js application.', 1),
(6, 3, 'Building APIs', 'Design and implement RESTful APIs.', 2),
(7, 4, 'Array Manipulation', 'Learn about dynamic memory management and traversal techniques.', 2),
(8, 4, 'Understanding Linked Lists', 'Explore singly, doubly, and circular linked lists.', 3),
(9, 4, 'Mastering Trees', 'Delve into binary trees, binary search trees, and heaps.', 4),
(10, 4, 'Graphs and Algorithms', 'Learn graph traversal techniques and shortest path algorithms.', 5),
(11, 5, 'Introduction to Machine Learning', 'An overview of machine learning and its applications.', 1),
(12, 5, 'Data Preprocessing', 'Learn how to clean, transform, and prepare data for models.', 2),
(13, 5, 'Key Algorithms in Machine Learning', 'Understand linear regression, decision trees, and k-means clustering.', 3),
(14, 5, 'Libraries for Machine Learning', 'Work with TensorFlow, Scikit-learn, and Keras to build models.', 4),
(15, 5, 'Real-world Applications', 'Implement solutions for classification, regression, and recommendation systems.', 5);

-- --------------------------------------------------------

--
-- Table structure for table `sectionitem`
--

CREATE TABLE `sectionitem` (
  `id` int(11) NOT NULL,
  `sectionId` int(11) NOT NULL,
  `itemId` int(11) NOT NULL,
  `itemOrder` int(11) NOT NULL,
  `itemType` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sectionitem`
--

INSERT INTO `sectionitem` (`id`, `sectionId`, `itemId`, `itemOrder`, `itemType`) VALUES
(1, 1, 1, 1, 'lesson'),
(2, 1, 3, 1, 'lesson'),
(3, 1, 4, 1, 'lesson'),
(4, 1, 5, 1, 'lesson'),
(5, 1, 1, 1, 'quiz'),
(6, 1, 3, 1, 'quiz'),
(7, 1, 4, 1, 'quiz'),
(8, 1, 5, 1, 'quiz'),
(9, 2, 2, 1, 'lesson'),
(10, 2, 2, 1, 'quiz'),
(11, 3, 6, 1, 'lesson'),
(12, 3, 8, 1, 'lesson'),
(13, 3, 6, 1, 'quiz'),
(14, 3, 8, 1, 'quiz'),
(15, 4, 7, 1, 'lesson'),
(16, 4, 9, 1, 'lesson'),
(17, 4, 10, 1, 'lesson'),
(18, 4, 7, 1, 'quiz'),
(19, 4, 9, 1, 'quiz'),
(20, 4, 10, 1, 'quiz'),
(21, 5, 11, 1, 'lesson'),
(22, 5, 12, 1, 'lesson'),
(23, 5, 14, 1, 'lesson'),
(24, 5, 15, 1, 'lesson'),
(25, 5, 11, 1, 'quiz'),
(26, 5, 12, 1, 'quiz'),
(27, 5, 14, 1, 'quiz'),
(28, 5, 15, 1, 'quiz'),
(29, 6, 13, 1, 'lesson'),
(30, 6, 13, 1, 'quiz'),
(31, 7, 16, 1, 'lesson'),
(32, 8, 17, 1, 'lesson'),
(33, 9, 18, 1, 'lesson'),
(34, 10, 19, 1, 'lesson'),
(35, 10, 20, 1, 'lesson'),
(36, 11, 21, 1, 'lesson'),
(37, 12, 22, 1, 'lesson'),
(38, 13, 23, 1, 'lesson'),
(39, 14, 24, 1, 'lesson'),
(40, 15, 25, 1, 'lesson'),
(41, 7, 16, 1, 'quiz'),
(42, 8, 17, 1, 'quiz'),
(43, 9, 18, 1, 'quiz'),
(44, 10, 19, 1, 'quiz'),
(45, 10, 20, 1, 'quiz'),
(46, 11, 21, 1, 'quiz'),
(47, 12, 22, 1, 'quiz'),
(48, 13, 23, 1, 'quiz'),
(49, 14, 24, 1, 'quiz'),
(50, 15, 25, 1, 'quiz');

-- --------------------------------------------------------

--
-- Table structure for table `setting`
--

CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `setting`
--

INSERT INTO `setting` (`id`, `name`, `value`) VALUES
(1, 'pagination', '1'),
(2, 'dateFormat', 'Y-m-d'),
(3, 'currency', 'USD'),
(4, 'theme', 'dark'),
(5, 'screenReaderCompatibility', '1'),
(6, 'keyboardShortcuts', '1'),
(7, 'courseVisibility', '0'),
(8, 'courseContentAccess', '0'),
(9, 'autoStart', '0'),
(10, 'courseRetake', '1'),
(11, 'reTakeCourse', '5'),
(12, 'passingGrade', '70'),
(13, 'autoLoadNextItem', '1'),
(14, 'sectionsPerPage', '5'),
(15, 'fileType', '[\"pdf\",\"docx\",\"pptx\"]'),
(16, 'uploadFiles', '2'),
(17, 'fileSizeLimit', '50'),
(18, 'filesPerPage', '2'),
(19, 'urlNofollow', '0'),
(20, 'preferredVideoSource', '[\"YouTube\",\"Vimeo\"]'),
(21, 'courseTranslations', '1'),
(22, 'questionOrder', 'random'),
(23, 'questionLayout', 'single'),
(24, 'quizFeedbackMode', 'after-submit'),
(25, 'hideQuizTime', '0'),
(26, 'hideQuestionNumber', '0'),
(27, 'whenTimeExpires', 'submit-automatically'),
(28, 'finalGradeCalculation', 'percentage'),
(29, 'paymentGateways', 'PayPal'),
(30, 'paymentConfirmationEmail', '1'),
(31, 'taxSettings', 'GST 18%'),
(32, 'paymentReceipt', '1'),
(33, 'paymentRedirectURL', 'https://example.com/thank-you'),
(34, 'enableSubscription', '0'),
(35, 'refundPolicy', 'Refunds are processed within 30 days of payment.'),
(36, 'paymentSecurity', '1'),
(37, 'primaryColor', '#3498db'),
(38, 'secondaryColor', '#2ecc71'),
(39, 'textColor', '#333333'),
(40, 'borderColor', '#dddddd'),
(41, 'btnColor', '#e74c3c'),
(42, 'linkColor', '#1abc9c'),
(43, 'instructorRoleCustomization', '1'),
(44, 'payoutMethod', 'PayPal'),
(45, 'minimumPayoutAmount', '50'),
(46, 'allowInstructorsPublishCourses', '0'),
(47, 'instructorPerPage', '10'),
(48, 'becomeInstructorButton', '1'),
(49, 'instructorApproval', '1'),
(50, 'minPasswordLength', '8'),
(51, 'requireSpecialCharacters', '1'),
(52, 'requireNumbers', '1'),
(53, 'requireUppercase', '1'),
(54, 'twoFactorAuthentication', '1'),
(55, 'loginAttempts', '5'),
(56, 'sessionTimeout', '30'),
(57, 'accountLockoutDuration', '15'),
(58, 'passwordExpiry', '90'),
(59, 'passwordHistory', '1'),
(60, 'sslEncryption', '1'),
(61, 'bruteForceProtection', '1'),
(62, 'emailTemplates', 'Welcome Email'),
(63, 'smtpHost', 'smtp.example.com'),
(64, 'smtpPort', '587'),
(65, 'smtpUsername', 'user@example.com'),
(66, 'smtpPassword', 'password123'),
(67, 'enableCourseEnrollmentEmail', '1'),
(68, 'enablePasswordResetEmail', '1'),
(69, 'enablePaymentConfirmationEmail', '1'),
(70, 'defaultSenderEmail', 'noreply@example.com'),
(71, 'emailLogging', '0'),
(72, 'emailTestMode', '0'),
(73, 'emailQueue', '1'),
(74, 'pushNotifications', '1'),
(75, 'smsNotifications', '0'),
(76, 'emailDigest', 'Weekly'),
(77, 'notificationSound', '1'),
(78, 'notificationVibration', '1'),
(79, 'importantNotificationOnly', '0');

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`id`, `name`, `description`) VALUES
(1, 'JavaScript', 'Related to JavaScript programming language.'),
(2, 'CSS', 'Related to Cascading Style Sheets for styling webpages.'),
(3, 'Full-Stack', 'Refers to both frontend and backend development skills.'),
(4, 'Node.js', 'Related to Node.js framework for backend development.'),
(5, 'Frontend Development', 'Techniques and tools for client-side web development.'),
(6, 'Backend Development', 'Techniques and tools for server-side programming and database management.'),
(7, 'Web Design', 'Design principles and techniques for web pages and applications.'),
(8, 'Algorithms', 'Mathematical steps and processes to solve programming problems.'),
(9, 'Machine Learning', 'Algorithms and techniques to enable computers to learn from data.'),
(10, 'Python', 'Programming language often used for backend, data science, and machine learning.'),
(11, 'AI', 'Related to Artificial Intelligence techniques and applications.'),
(12, 'Data Structures', 'Concepts around the storage and manipulation of data.');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','student','instructor') DEFAULT 'student',
  `registeredDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `role`, `registeredDate`) VALUES
(1, 'Admin', 'admin@gmail.com', '$2b$10$Z90ip1iImomCWtfpZzVQ8eW0o7AOTOVA82Z63rh9Ea1rNVQ.aLcNW', 'admin', '2025-01-06 04:18:48'),
(2, 'Priyank', 'priyank@gmail.com', '$2b$10$qFmzEoEy3G30MvvdDpE3IeiuyO2XOZkwaUVNl3X8JPO8S/sRYeTJy', 'admin', '2025-01-06 04:18:48');

-- --------------------------------------------------------

--
-- Table structure for table `usermeta`
--

CREATE TABLE `usermeta` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `metaKey` varchar(255) NOT NULL,
  `metaValue` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usermeta`
--

INSERT INTO `usermeta` (`id`, `userId`, `metaKey`, `metaValue`) VALUES
(1, 1, 'first_name', 'Admin'),
(2, 2, 'first_name', 'Priyank'),
(3, 1, 'last_name', 'admin'),
(4, 2, 'last_name', 'P'),
(5, 2, 'profilePhoto', 'data:image/png;base64,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');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `coursecategory`
--
ALTER TABLE `coursecategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `coursemeta`
--
ALTER TABLE `coursemeta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `coursetag`
--
ALTER TABLE `coursetag`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`),
  ADD KEY `tagId` (`tagId`);

--
-- Indexes for table `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `lessonmeta`
--
ALTER TABLE `lessonmeta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lessonId` (`lessonId`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `questioncategory`
--
ALTER TABLE `questioncategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questionmeta`
--
ALTER TABLE `questionmeta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questionId` (`questionId`);

--
-- Indexes for table `questionset`
--
ALTER TABLE `questionset`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questionId` (`questionId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `question_answers`
--
ALTER TABLE `question_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `quizmeta`
--
ALTER TABLE `quizmeta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quizId` (`quizId`);

--
-- Indexes for table `quizquestion`
--
ALTER TABLE `quizquestion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quizId` (`quizId`),
  ADD KEY `questionId` (`questionId`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `sectionitem`
--
ALTER TABLE `sectionitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sectionId` (`sectionId`);

--
-- Indexes for table `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `usermeta`
--
ALTER TABLE `usermeta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `coursecategory`
--
ALTER TABLE `coursecategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `coursemeta`
--
ALTER TABLE `coursemeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `coursetag`
--
ALTER TABLE `coursetag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lesson`
--
ALTER TABLE `lesson`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `lessonmeta`
--
ALTER TABLE `lessonmeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `questioncategory`
--
ALTER TABLE `questioncategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `questionmeta`
--
ALTER TABLE `questionmeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questionset`
--
ALTER TABLE `questionset`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question_answers`
--
ALTER TABLE `question_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=207;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `quizmeta`
--
ALTER TABLE `quizmeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quizquestion`
--
ALTER TABLE `quizquestion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `sectionitem`
--
ALTER TABLE `sectionitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `setting`
--
ALTER TABLE `setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usermeta`
--
ALTER TABLE `usermeta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`);

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `coursecategory`
--
ALTER TABLE `coursecategory`
  ADD CONSTRAINT `coursecategory_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`),
  ADD CONSTRAINT `coursecategory_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);

--
-- Constraints for table `coursemeta`
--
ALTER TABLE `coursemeta`
  ADD CONSTRAINT `coursemeta_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `coursetag`
--
ALTER TABLE `coursetag`
  ADD CONSTRAINT `coursetag_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`),
  ADD CONSTRAINT `coursetag_ibfk_2` FOREIGN KEY (`tagId`) REFERENCES `tag` (`id`);

--
-- Constraints for table `lesson`
--
ALTER TABLE `lesson`
  ADD CONSTRAINT `lesson_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `lessonmeta`
--
ALTER TABLE `lessonmeta`
  ADD CONSTRAINT `lessonmeta_ibfk_1` FOREIGN KEY (`lessonId`) REFERENCES `lesson` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `questionmeta`
--
ALTER TABLE `questionmeta`
  ADD CONSTRAINT `questionmeta_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `question` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `questionset`
--
ALTER TABLE `questionset`
  ADD CONSTRAINT `questionset_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `question` (`id`),
  ADD CONSTRAINT `questionset_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `questioncategory` (`id`);

--
-- Constraints for table `question_answers`
--
ALTER TABLE `question_answers`
  ADD CONSTRAINT `question_answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quizmeta`
--
ALTER TABLE `quizmeta`
  ADD CONSTRAINT `quizmeta_ibfk_1` FOREIGN KEY (`quizId`) REFERENCES `quiz` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quizquestion`
--
ALTER TABLE `quizquestion`
  ADD CONSTRAINT `quizquestion_ibfk_1` FOREIGN KEY (`quizId`) REFERENCES `quiz` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `quizquestion_ibfk_2` FOREIGN KEY (`questionId`) REFERENCES `question` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `section`
--
ALTER TABLE `section`
  ADD CONSTRAINT `section_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`);

--
-- Constraints for table `sectionitem`
--
ALTER TABLE `sectionitem`
  ADD CONSTRAINT `sectionitem_ibfk_1` FOREIGN KEY (`sectionId`) REFERENCES `section` (`id`);

--
-- Constraints for table `usermeta`
--
ALTER TABLE `usermeta`
  ADD CONSTRAINT `usermeta_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
