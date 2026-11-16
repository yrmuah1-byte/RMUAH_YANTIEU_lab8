const posts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content:
      "A closure is a function that has access to its own scope, the outer function's scope, and the global scope. This allows for powerful patterns in JavaScript.",
    author: "Mark Bell",
    date: "2024-06-01",
    comments: [
        { id: 1, author: "Tua", text: "Great explanation! Closures can be tricky to understand at first." },
        { id: 2, author: "UnknownUser6156", text: "Thanks for the detailed breakdown. This really helped me grasp the concept." },
    ],
  },
    {
    id: 2,
    title: "A Guide to React Hooks",
    content:
      "React Hooks are functions that let you use state and other React features without writing a class.",
    author: "Danielle Leone",
    date: "2024-06-02",
    comments: [
        { id: 1, author: "Mark Bell", text: "Very helpful! I've been struggling with React Hooks." },
        { id: 2, author: "Tung Tung Sahur", text: "Thanks for the guide! This makes it much easier to understand how to use Hooks effectively." },
    ],
  },
    {
        id: 3,
        title: "CSS Grid vs Flexbox: When to Use Which",
        content:
          "CSS Grid and Flexbox are two powerful layout systems in CSS. This article explores their differences and when to use each.",
        author: "Alice Hightower",
        date: "2024-06-03",
        comments: [
            { id: 1, author: "MiamiFan728", text: "Great comparison! It's often confusing to decide between Grid and Flexbox." },
            { id: 2, author: "UnknownUser6156", text: "Thanks for the insights! This will help me choose the right layout system for my projects." },
        ],
    },
];

export default posts;