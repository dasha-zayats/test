var cat1 = {
	id: 1,
	parent: 0,
	children: [2,3],
	name: 'Cars'
};

var cat2 = {
	id: 2,
	parent: 1,
	children: [],
	name: 'BMW'
}

var cat3 = {
	id: 3,
	parent: 1,
	children: [],
	name: 'Mercedes'
}

var cat4 = {
	id: 4,
	parent: 0,
	children: [5],
	name: 'Motocycles'
}

var cat5 = {
	id: 5,
	parent: 4,
	children: [],
	name: 'Honda'
}

var categories = [cat1, cat2, cat3, cat4, cat5];


function getCategories(obj) {
	if (obj["parent"]>0){
	    let resultParent=getParent(obj["parent"]);
		return getChildren(resultParent);
	}
	else if (obj["children"].length>0){
		return getChildren(obj["children"]);
	}
}



function getChildren(children){
	let numChildren=0;
	let resultNames=[];
	let cat=0;
	for (numChildren of children){
	   for (cat of categories){
		if (cat["id"]==numChildren){
		 resultNames.push(cat["name"]);
		}
	   }
	}
	return resultNames;
}




function getParent(parent){
	let resultNames=[];
	let cat=0;
	for (cat of categories){
	  if (cat["id"]==parent){
	  return cat["children"];
	  } 
	}
}
 

alert(getCategories(cat1));
alert(getCategories(cat2));
alert(getCategories(cat4));