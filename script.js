function mincost(arr) {
   
  let totalcost = 0;
	arr.sort((a,b)=>a-b);
	while (arr.length>1){
	const first = arr.shift();
	const second = arr.shift();
		const cost = first + second;
		totalcost+= cost;
		arr.push(cost);
		arr.sort((a,b)=>a-b);
	}
	return totalcost;

}


		
	
	