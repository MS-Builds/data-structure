/*
A graph is a collection of nodes (vertices) and edges connecting them.

Vertices (V): points/nodes
Edges (E): connections between nodes
Can be directed or undirected, weighted or unweighted.

*/

const graph = new Map(); 
graph.set(0, [1, 2]); // node(0) connected to node(1) & node(2)
graph.set(1, [2]); // node(1) connected to node(2) 
graph.set(2, [0]); // node(2) connected to node(0) 

console.log(graph)
