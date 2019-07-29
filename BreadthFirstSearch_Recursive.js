function bfs_recusive(graph, queue, visited) {
  if (queue.length == 0) {
    return;
  }
  let currentNode = queue.shift();
  let neighboursIds = [];
  let id = graph[currentNode].indexOf(1);
  while (id != -1) {
    neighboursIds.push(id);
    id = graph[currentNode].indexOf(1, id + 1);
  }
  for (let j = 0; j < neighboursIds.length; ++j) {
    if (!visited.has(neighboursIds[j])) {
      console.log(neighboursIds[j]);
      visited.set(neighboursIds[j], true);
      queue.push(neighboursIds[j]);
    }
  }
  bfs_recusive(graph, queue, visited);
}

// const graph = [
//   [0, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 1, 1],
//   [0, 1, 0, 0, 0]
// ];

function main() {
  const graph = [
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
  ];
  let queue = [];
  let visited = new Map();

  for (let i = 0; i < graph.length; ++i) {
    if (!visited.has(i)) {
      console.log(i);
      visited.set(i, true);
      queue.push(i);
      bfs_recusive(graph, queue, visited);
    }
  }

  // remove for loop if you only want to explore connected nodes starting from one node;
  // let i = 1;
  // console.log(i);
  // visited.set(i, true);
  // queue.push(i);
  // bfs_recusive(graph, queue, visited);
}
main();
