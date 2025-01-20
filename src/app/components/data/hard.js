export const questions = {
  questions: [
    // Algorithms - Advanced Sorting
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "The __ sort algorithm achieves a time complexity of O(n log n) using a binary tree structure for sorting.",
      blanks: ["tree"],
      note: "Advanced Sorting"
    },
    // Algorithms - Graph Algorithms
    {
      id: 2,
      type: "multiple-choice",
      question: "Which algorithm is used to find the shortest path in a weighted graph with negative weights?",
      options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "Kruskal's Algorithm"],
      correctAnswers: ["Bellman-Ford Algorithm"],
      multipleAnswers: false,
      note: "Graph Algorithms"
    },
    // Algorithms - Dynamic Programming
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "The __ algorithm solves the Longest Common Subsequence problem using a dynamic programming approach.",
      blanks: ["LCS"],
      note: "Dynamic Programming"
    },
    // Algorithms - NP Problems
    {
      id: 4,
      type: "multiple-choice",
      question: "Which of the following problems is considered NP-complete?",
      options: ["Travelling Salesman Problem", "Binary Search", "Merge Sort", "Prim's Algorithm"],
      correctAnswers: ["Travelling Salesman Problem"],
      multipleAnswers: false,
      note: "NP Problems"
    },
    // Algorithms - Approximation Algorithms
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "Approximation algorithms are used for problems where finding an exact solution is __.",
      blanks: ["infeasible"],
      note: "Approximation Algorithms"
    },
    // Algorithms - Backtracking
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of the following is a classic problem that can be solved using backtracking?",
      options: ["Knapsack Problem", "N-Queens Problem", "Matrix Multiplication", "Binary Search"],
      correctAnswers: ["N-Queens Problem"],
      multipleAnswers: false,
      note: "Backtracking"
    },
    // Algorithms - Greedy Algorithms
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "Prim's and Kruskal's algorithms are examples of __ algorithms used to find the Minimum Spanning Tree of a graph.",
      blanks: ["greedy"],
      note: "Greedy Algorithms"
    },
    // Algorithms - Divide and Conquer
    {
      id: 8,
      type: "multiple-choice",
      question: "Which problem is typically solved using the divide and conquer approach?",
      options: ["Matrix Multiplication", "Graph Coloring", "Maximum Subarray Problem", "KMP String Matching"],
      correctAnswers: ["Maximum Subarray Problem"],
      multipleAnswers: false,
      note: "Divide and Conquer"
    },
    // Algorithms - Advanced Data Structures
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "A __ tree is a balanced binary search tree that maintains balance by ensuring the heights of two child subtrees of any node differ by no more than one.",
      blanks: ["AVL"],
      note: "Advanced Data Structures"
    },
    // Algorithms - Computational Geometry
    {
      id: 10,
      type: "multiple-choice",
      question: "Which algorithm is used for finding the convex hull of a set of points?",
      options: ["Graham's scan", "Jarvis march", "QuickHull", "All of the above"],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "Computational Geometry"
    }
  ]
};
