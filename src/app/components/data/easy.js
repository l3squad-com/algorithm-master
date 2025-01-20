export const questions = {
  questions: [
    // Algorithms - Sorting
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "The __ sort algorithm repeatedly finds the minimum element and moves it to the beginning.",
      blanks: ["selection"],
      note: "Sorting"
    },
    // Algorithms - Searching
    {
      id: 2,
      type: "multiple-choice",
      question: "Which algorithm is used to find an element in a sorted array by repeatedly dividing the search interval in half?",
      options: ["Linear Search", "Binary Search", "Bubble Sort", "Insertion Sort"],
      correctAnswers: ["Binary Search"],
      multipleAnswers: false,
      note: "Searching"
    },
    // Algorithms - Recursion
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "A function that calls itself is known as a __ function.",
      blanks: ["recursive"],
      note: "Recursion"
    },
    // Algorithms - Time Complexity
    {
      id: 4,
      type: "fill-in-the-blanks",
      question: "The time complexity of binary search in the best case is __.",
      blanks: ["O(1)"],
      note: "Time Complexity"
    },
    // Algorithms - Divide and Conquer
    {
      id: 5,
      type: "multiple-choice",
      question: "Which of the following is a Divide and Conquer algorithm?",
      options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
      correctAnswers: ["Quick Sort", "Merge Sort"],
      multipleAnswers: true,
      note: "Divide and Conquer"
    },
    // Algorithms - Dynamic Programming
    {
      id: 6,
      type: "fill-in-the-blanks",
      question: "Dynamic Programming is used to solve problems by breaking them down into overlapping __ subproblems.",
      blanks: ["smaller"],
      note: "Dynamic Programming"
    },
    // Algorithms - Greedy Algorithm
    {
      id: 7,
      type: "multiple-choice",
      question: "Which of the following problems can be solved using a greedy algorithm?",
      options: ["Knapsack Problem", "Huffman Coding", "Prim's Algorithm", "All of the above"],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "Greedy Algorithm"
    },
    // Algorithms - Graph Traversal
    {
      id: 8,
      type: "fill-in-the-blanks",
      question: "Breadth-First Search (BFS) uses a __ to keep track of the nodes to be explored.",
      blanks: ["queue"],
      note: "Graph Traversal"
    },
    // Algorithms - Backtracking
    {
      id: 9,
      type: "multiple-choice",
      question: "Which of the following problems can be solved using backtracking?",
      options: ["Sudoku", "N-Queens", "Maze Solving", "All of the above"],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "Backtracking"
    },
    // Algorithms - Sorting
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "The __ sort algorithm repeatedly swaps adjacent elements that are out of order.",
      blanks: ["bubble"],
      note: "Sorting"
    }
  ]
};
