function mincost(arr) {
   
    if (arr.length === 1) return 0;

   
    const MinHeap = require('heap');
    const heap = new MinHeap((a, b) => a - b);

   
    for (let length of arr) {
        heap.push(length);
    }

    let totalCost = 0;

    
    while (heap.size() > 1) {
        
        let first = heap.pop();
        let second = heap.pop();

        /
        let cost = first + second;

        
        totalCost += cost;

        
        heap.push(cost);
    }

    return totalCost;
}

module.exports = mincost;
