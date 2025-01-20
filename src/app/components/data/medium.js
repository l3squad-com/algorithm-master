export const questions = {
  questions: [
    // Algorithms - Sorting
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "The __ sort algorithm divides the array into subarrays, sorts them, and then merges them.",
      blanks: ["merge"],
      note: "Sorting"
    },
    // Algorithms - Searching
    {
      id: 2,
      type: "multiple-choice",
      question: "Which data structure is used in the implementation of Depth-First Search (DFS)?",
      options: ["Queue", "Stack", "Heap", "Array"],
      correctAnswers: ["Stack"],
      multipleAnswers: false,
      note: "Searching"
    },
    // Algorithms - Recursion
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "In recursion, the __ case prevents the function from calling itself indefinitely.",
      blanks: ["base"],
      note: "Recursion"
    },
    // Algorithms - Time Complexity
    {
      id: 4,
      type: "fill-in-the-blanks",
      question: "The time complexity of Quick Sort in the average case is __.",
      blanks: ["O(n log n)"],
      note: "Time Complexity"
    },
    // Algorithms - Divide and Conquer
    {
      id: 5,
      type: "multiple-choice",
      question: "Which of the following is NOT a characteristic of the Divide and Conquer approach?",
      options: ["Breaking the problem into subproblems", "Combining solutions of subproblems", "Solving each subproblem independently", "Using a single loop to solve the problem"],
      correctAnswers: ["Using a single loop to solve the problem"],
      multipleAnswers: false,
      note: "Divide and Conquer"
    },
    // Algorithms - Dynamic Programming
    {
      id: 6,
      type: "fill-in-the-blanks",
      question: "In Dynamic Programming, the __ table is used to store the results of subproblems to avoid redundant calculations.",
      blanks: ["memoization"],
      note: "Dynamic Programming"
    },
    // Algorithms - Greedy Algorithm
    {
      id: 7,
      type: "multiple-choice",
      question: "Which of the following is a prerequisite for using a greedy algorithm effectively?",
      options: ["Optimal substructure", "Overlapping subproblems", "Divide and Conquer", "Recursive structure"],
      correctAnswers: ["Optimal substructure"],
      multipleAnswers: false,
      note: "Greedy Algorithm"
    },
    // Algorithms - Graph Traversal
    {
      id: 8,
      type: "fill-in-the-blanks",
      question: "Depth-First Search (DFS) can be used to detect a __ in a graph.",
      blanks: ["cycle"],
      note: "Graph Traversal"
    },
    // Algorithms - Backtracking
    {
      id: 9,
      type: "multiple-choice",
      question: "Which of the following best describes the nature of backtracking algorithms?",
      options: ["Iterative", "Exploratory", "Greedy", "Dynamic"],
      correctAnswers: ["Exploratory"],
      multipleAnswers: false,
      note: "Backtracking"
    },
    // Algorithms - Sorting
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "The __ sort algorithm is a comparison-based sorting algorithm that uses a binary heap data structure.",
      blanks: ["heap"],
      note: "Sorting"
    }
  ]
};
