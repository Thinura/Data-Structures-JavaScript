// Prefix tree - Trie Data Structure
function buildTrie(words) {
    let root = {};
    for (let word of words) {
        let currNode = root;
        for (let char of word) {
            if (!currNode[char]) currNode[char] = {};
            currNode = currNode[char];
        }
        currNode.word = word;
    }
    console.log(root)
    return root;
}

// Death First Search - DFS
function dfs(node, i, j, result, board) {
    if (node.word) {
        result.push(node.word);
        node.word = null;
    }

    if (i < 0 || j < 0 || i > (board.length - 1) || j > (board[0].length - 1)) return;
    if (!node[board[i][j]]) return;

    let c = board[i][j];
    board[i][j] = '#';
    dfs(node[c], i + 1, j, result, board);
    dfs(node[c], i - 1, j, result, board);
    dfs(node[c], i, j + 1, result, board);
    dfs(node[c], i, j - 1, result, board);
    board[i][j] = c;
}

/** 
 * 202 :- Given an m x n board of characters and a list of strings words, return all words on the board. 
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are 
 * horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
 * (https://leetcode.com/problems/word-search-ii/)
 */
// var findWords = function (board, words) {
function findWords(board, words) {

    let result = [];
    let root = buildTrie(words);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(root, i, j, result, board);
        }
    }
    return result;
};

console.log('[MAIN] - Start the search engine');

console.log('[MAIN] - Init the board');
const board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]];

console.log('[MAIN] - Init the words');
const words = ["oath", "pea", "eat", "rain"];

console.log('[MAIN] - Calling findWords function');
const result = findWords(board, words);

console.log('[MAIN] - Results ', result);
