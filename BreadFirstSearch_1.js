function bfs(graph, root) {
  let graphLen = graph.length;
  let nodeDistances = new Array(graphLen);
  let i = 0;
  while (i < graphLen) {
    nodeDistances[i] = Infinity;
    ++i;
  }
  //nodeDistances[root] = 0;
  let queue = [];
  let visited = new Map();
  queue.push(root);
  while (queue.length != 0) {
    let currentNode = queue.shift();
    if (visited.has(currentNode)) {
      continue;
    }
    let neighboursId = [];
    let id = graph[currentNode].indexOf(1);
    while (id != -1) {
      neighboursId.push(id);
      id = graph[currentNode].indexOf(1, id + 1);
      //console.log(id);
    }
    let neighboursIdLen = neighboursId.length;
    for (let j = 0; j < neighboursIdLen; ++j) {
      //console.log(j);
      if (
        nodeDistances[neighboursId[j]] == Infinity &&
        neighboursId[j] != root
      ) {
        nodeDistances[neighboursId[j]] =
          nodeDistances[currentNode] == Infinity
            ? 1
            : nodeDistances[currentNode] + 1;
        //console.log(nodeDistances[neighboursId[i]]);
        queue.push(neighboursId[j]);
      }
    }
    visited.set(currentNode, true);
  }
  return nodeDistances;
}

const graph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

console.log(bfs(graph, 1));
