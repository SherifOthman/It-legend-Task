export type CommentType = {
  id: number;
  userName: string;
  userImage: string;
  date: string;
  text: string;
};

export const comments: CommentType[] = [
  {
    id: 1,
    userName: "Hamada Mido",
    userImage: "/profile.jpg",
    date: "Oct 10, 2024",
    text: "This course helped me finally understand JavaScript scope. The examples were very practical and easy to follow!",
  },
  {
    id: 2,
    userName: "Sarah Ahmed",
    userImage: "/images/profile2.jpg",
    date: "Oct 12, 2024",
    text: "I loved the interactive coding challenges. It would be great if we had more exercises on async/await!",
  },
  {
    id: 3,
    userName: "Mohamed Hassan",
    userImage: "/images/profile3.jpg",
    date: "Oct 14, 2024",
    text: "Great explanations, but I think the DOM section could include more examples about manipulating classes.",
  },
  {
    id: 4,
    userName: "Aya Mostafa",
    userImage: "/images/profile4.jpeg",
    date: "Oct 16, 2024",
    text: "I really appreciate how clear and well-structured this course is. It’s perfect for beginners like me.",
  },
  {
    id: 5,
    userName: "Omar Khaled",
    userImage: "/images/profile5.jpeg",
    date: "Oct 18, 2024",
    text: "The instructor’s voice is clear and engaging. Loved the quizzes at the end of each chapter!",
  },
  {
    id: 6,
    userName: "Nour El-Din",
    userImage: "/images/profile6.jpeg",
    date: "Oct 20, 2024",
    text: "It would be nice to have more advanced examples on closures and higher-order functions.",
  },
];

export type CourseLeaderboardEntry = {
  rank: number;
  userName: string;
  userImage: string;
  score: number;
  progress: number;
};

export const courseLeaderboard: CourseLeaderboardEntry[] = [
  {
    rank: 1,
    userName: "Hamada Mido",
    userImage: "/images/profile.jpg",
    score: 980,
    progress: 100,
  },
  {
    rank: 2,
    userName: "Sarah Ahmed",
    userImage: "/images/profile2.jpg",
    score: 950,
    progress: 98,
  },
  {
    rank: 3,
    userName: "Mohamed Hassan",
    userImage: "/images/profile3.jpg",
    score: 920,
    progress: 97,
  },
  {
    rank: 4,
    userName: "Aya Mostafa",
    userImage: "/images/profile4.jpeg",
    score: 890,
    progress: 95,
  },
  {
    rank: 5,
    userName: "Omar Khaled",
    userImage: "/images/profile5.jpeg",
    score: 860,
    progress: 93,
  },
];

export type QuestionType = {
  id: number;
  userName: string;
  userImage: string;
  date: string;
  title?: string;
  description: string;
  answers?: QuestionType[];
};

export const questions: QuestionType[] = [
  {
    id: 1,
    userName: "Hamada Mido",
    userImage: "/images/profile.jpg",
    date: "Oct 10, 2024",
    title: "Understanding Closures",
    description:
      "I’m struggling to understand how closures work in JavaScript. Can someone explain? ",
    answers: [
      {
        id: 2,
        userName: "Sarah Ahmed",
        userImage: "/images/profile2.jpg",
        date: "Oct 11, 2024",
        description:
          "A closure is when a function remembers variables from its outer scope, even after the outer function has finished executing.",
      },
      {
        id: 3,
        userName: "Omar Khaled",
        userImage: "/images/profile5.jpeg",
        date: "Oct 12, 2024",
        description:
          "Think of closures like a backpack that the inner function carries along with outer variables.",
      },
    ],
  },
  // {
  //   id: 4,
  //   userName: "Nour El-Din",
  //   userImage: "/profile6.jpeg",
  //   date: "Oct 14, 2024",
  //   title: "Var vs Let vs Const",
  //   description:
  //     "I’m confused about the differences between var, let, and const in JS.",
  //   answers: [
  //     {
  //       id: 5,
  //       userName: "Sarah Ahmed",
  //       userImage: "/profile2.jpg",
  //       date: "Oct 15, 2024",
  //       description:
  //         "`var` is function-scoped, `let` and `const` are block-scoped, and `const` cannot be reassigned.",
  //     },
  //   ],
  // },
  {
    id: 6,
    userName: "Mohamed Hassan",
    userImage: "/images/profile3.jpg",
    date: "Oct 16, 2024",
    title: "Loop Optimization",
    description: "How to optimize loops for large datasets in JavaScript?",
    answers: [
      {
        id: 7,
        userName: "Hamada Mido",
        userImage: "/images/profile.jpg",
        date: "Oct 17, 2024",
        description:
          "Use `for` loops instead of `forEach` in performance-critical sections.",
      },
      {
        id: 8,
        userName: "Omar Khaled",
        userImage: "/images/profile5.jpeg",
        date: "Oct 18, 2024",
        description:
          "Also minimize DOM updates inside loops to improve performance.",
      },
    ],
  },
  // {
  //   id: 9,
  //   userName: "Sarah Ahmed",
  //   userImage: "/images/profile2.jpg",
  //   date: "Oct 20, 2024",
  //   title: "Event Delegation",
  //   description: "I want to understand event delegation better.",
  //   answers: [
  //     {
  //       id: 10,
  //       userName: "Hamada Mido",
  //       userImage: "/images/profile.jpg",
  //       date: "Oct 21, 2024",
  //       description:
  //         "Event delegation allows you to handle events at a parent element rather than individual child elements.",
  //     },
  //   ],
  // },
  {
    id: 11,
    userName: "Nour El-Din",
    userImage: "/images/profile6.jpeg",
    date: "Oct 22, 2024",
    title: "Event Loop",
    description: "I’m trying to understand how the JS event loop works.",
    answers: [
      {
        id: 12,
        userName: "Sarah Ahmed",
        userImage: "/images/profile2.jpg",
        date: "Oct 23, 2024",
        description:
          "The event loop checks the call stack and executes queued tasks when the stack is empty.",
      },
      {
        id: 13,
        userName: "Hamada Mido",
        userImage: "/images/profile.jpg",
        date: "Oct 24, 2024",
        description:
          "Async callbacks run after synchronous code because of how the event loop processes tasks.",
      },
    ],
  },
];

export type Question = {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: string;
};

export type CourseItemType = {
  id: number;
  title: string;
  type: "video" | "pdf" | "exam";
  duration: number; // in minutes
  finished: boolean;
  fileUrl?: string;
  thumbnailUrl?: string;
  questions?: Question[];
};

export type CourseWeekType = {
  id: number;
  weekRange: string;
  title: string;
  description: string;
  items: CourseItemType[];
};
export const courseWeeks: CourseWeekType[] = [
  {
    id: 1,
    weekRange: "Week 1–4",
    title: "Introduction to JavaScript",
    description:
      "Learn the fundamentals of JavaScript including syntax, variables, and data types.",
    items: [
      {
        id: 1,
        title: "Course Overview",
        type: "video",
        duration: 10,
        finished: false,
        fileUrl: "/videos/3.mp4",
        thumbnailUrl: "/videos/3.jpg",
      },
      {
        id: 2,
        title: "JavaScript Basics PDF",
        type: "pdf",
        duration: 5,
        finished: false,
        fileUrl: "/pdfs/JavaScript_Basics_PDF.pdf",
      },
      {
        id: 3,
        title: "Introduction Quiz",
        type: "exam",
        duration: 15,
        finished: false,
        questions: [
          {
            id: 1,
            question:
              "Which keyword is used to declare a variable in JavaScript?",
            choices: ["var", "let", "const", "all of the above"],
            correctAnswer: "all of the above",
          },
          {
            id: 2,
            question: "What does 'typeof null' return?",
            choices: ["null", "object", "undefined", "string"],
            correctAnswer: "object",
          },
          {
            id: 3,
            question: "Which operator is used for strict equality comparison?",
            choices: ["==", "===", "=", "!="],
            correctAnswer: "===",
          },
          {
            id: 4,
            question:
              "Which of the following is NOT a primitive data type in JavaScript?",
            choices: ["String", "Number", "Object", "Boolean"],
            correctAnswer: "Object",
          },
          {
            id: 5,
            question: "What will `console.log(2 + '2')` output?",
            choices: ["4", "'22'", "NaN", "undefined"],
            correctAnswer: "'22'",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    weekRange: "Week 5–8",
    title: "Functions and Scope",
    description:
      "Dive deeper into how functions work and how scope controls variable access.",
    items: [
      {
        id: 4,
        title: "Defining Functions",
        type: "video",
        duration: 12,
        finished: false,
        fileUrl: "/videos/1.mp4",
        thumbnailUrl: "/videos/1.jpg",
      },
      {
        id: 5,
        title: "Scope and Closures PDF",
        type: "pdf",
        duration: 8,
        finished: false,
        fileUrl: "/pdfs/Scope_and_Closures_PDF.pdf",
      },
      {
        id: 6,
        title: "Functions Quiz",
        type: "exam",
        duration: 20,
        finished: false,
        questions: [
          {
            id: 1,
            question: "What is a closure in JavaScript?",
            choices: [
              "A function with no parameters",
              "A function bundled with its lexical environment",
              "A block-scoped variable",
              "An object method",
            ],
            correctAnswer: "A function bundled with its lexical environment",
          },
          {
            id: 2,
            question: "Which scope has access to global variables?",
            choices: ["Only global", "Only local", "Both", "None"],
            correctAnswer: "Both",
          },
          {
            id: 3,
            question:
              "What is the default return value of a function that does not explicitly return anything?",
            choices: ["null", "undefined", "0", "false"],
            correctAnswer: "undefined",
          },
          {
            id: 4,
            question:
              "What will `console.log(a)` output if `var a = 5;` is declared after the log statement?",
            choices: ["5", "undefined", "error", "null"],
            correctAnswer: "undefined",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    weekRange: "Week 9–12",
    title: "DOM Manipulation",
    description:
      "Learn how to interact with and modify the Document Object Model using JavaScript.",
    items: [
      {
        id: 7,
        title: "Selecting Elements",
        type: "video",
        duration: 10,
        fileUrl: "/videos/2.mp4",
        thumbnailUrl: "/videos/2.jpeg",
        finished: false,
      },
      {
        id: 8,
        title: "Updating the DOM",
        type: "video",
        duration: 15,
        fileUrl: "/videos/3.mp4",
        thumbnailUrl: "/videos/3.jpg",
        finished: false,
      },
      {
        id: 9,
        title: "DOM Practice Exercises",
        type: "exam",
        duration: 25,
        finished: false,
        questions: [
          {
            id: 1,
            question: "Which method is used to select an element by ID?",
            choices: [
              "getElementByClassName",
              "querySelector",
              "getElementById",
              "querySelectorAll",
            ],
            correctAnswer: "getElementById",
          },
          {
            id: 2,
            question:
              "Which event is triggered when a user clicks on an element?",
            choices: ["onclick", "onhover", "onchange", "onselect"],
            correctAnswer: "onclick",
          },
          {
            id: 3,
            question:
              "Which property is used to change the text inside an element?",
            choices: ["innerHTML", "textContent", "value", "contentText"],
            correctAnswer: "textContent",
          },
          {
            id: 4,
            question: "What does `querySelectorAll()` return?",
            choices: [
              "A single element",
              "A NodeList of elements",
              "An array",
              "An HTMLCollection",
            ],
            correctAnswer: "A NodeList of elements",
          },
          {
            id: 5,
            question: "How do you remove an element from the DOM?",
            choices: [
              "element.remove()",
              "document.deleteElement()",
              "removeChild() only",
              "element.destroy()",
            ],
            correctAnswer: "element.remove()",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    weekRange: "Week 13–16",
    title: "Asynchronous JavaScript",
    description:
      "Understand callbacks, promises, and async/await to handle asynchronous code.",
    items: [
      {
        id: 10,
        title: "Async & Await Explained",
        type: "video",
        fileUrl: "/videos/1.mp4",
        thumbnailUrl: "/videos/1.jpg",
        duration: 18,
        finished: false,
      },
      {
        id: 11,
        title: "Promises Deep Dive PDF",
        type: "pdf",
        duration: 6,
        fileUrl: "/pdfs/Promises_Deep_Dive_PDF.pdf",
        finished: false,
      },
      {
        id: 12,
        title: "Async Programming Quiz",
        type: "exam",
        duration: 20,
        finished: false,
        questions: [
          {
            id: 1,
            question: "What does a promise represent?",
            choices: [
              "A function call",
              "A future value",
              "A rejected error",
              "A synchronous block",
            ],
            correctAnswer: "A future value",
          },
          {
            id: 2,
            question:
              "Which keyword is used to pause execution until a promise is resolved?",
            choices: ["wait", "async", "await", "resolve"],
            correctAnswer: "await",
          },
          {
            id: 3,
            question: "Which method handles a rejected promise?",
            choices: ["then", "catch", "finally", "resolve"],
            correctAnswer: "catch",
          },
        ],
      },
    ],
  },
];
