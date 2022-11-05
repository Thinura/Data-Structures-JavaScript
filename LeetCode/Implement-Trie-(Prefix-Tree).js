// Prefix tree - Trie Data Structure

/**
 * 208 :- A trie (pronounced as "try") or prefix tree is a tree 
 * data structure used to efficiently store and retrieve 
 * keys in a dataset of strings. There are various 
 * applications of this data structure, such as autocomplete 
 * and spellchecker.
 * (https://leetcode.com/problems/implement-trie-prefix-tree/)
 */
 var Trie = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for(let c of word){
        if(node[c] == null) node[c] = {};
        node = node[c];
    }
    node.isWord = true;

};

/** 
 * @param {string} word
 * @return {node}
 */
Trie.prototype.traverse = function(word) {
    let node = this.root;
    
    for(let c of word){
        node = node[c];
        if(node == null) return null;
    }
    
    return node;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
    let node = this.traverse(word);
    
    return node !== null && node.isWord === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.traverse(prefix);
    
    return node !== null;
};

console.log('[MAIN] - Start the search engine');
console.log('[MAIN] - Init the Trie....');
const trie = new Trie();
console.log('[MAIN] - Trie insert', trie.insert("apple"));          // return null
console.log('[MAIN] - Trie search', trie.search("apple"));          // return True
console.log('[MAIN] - Trie search', trie.search("app"));            // return False
console.log('[MAIN] - Trie startsWith', trie.startsWith("app"));     // return True
console.log('[MAIN] - Trie insert', trie.insert("app"));            // return null
console.log('[MAIN] - Trie search', trie.search("app"));            // return True

