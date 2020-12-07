let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
    ntrandm: {name: 'Juliet', next: 'gjodglt'},
    gjodglt: {name: 'Timmy', next: 'oepjgtim'},
    oepjgtim: {name: 'Jacob', next:null}
  }
let firstNode = ['Alexandra','masjdrandm']
let secondNode = ['Kirstin', 'ntrandm']
let thirdNode = ['Juliet', 'gjodglt']
let fourthNode = ['Timmy', 'oepjgtim']
let fithNode = ['Jacob', null]
//how would you access the name ? first locate the node within the list 
//

function getName(node){
  return node.name
  }

function headNode(linkedList, collection){
  return collection[linkedList]
}


function next(head, collection){
  let nextNode = head[1]//this is the start
  let nextNextNode = next(nextNode, collection)//this is where it would go until there are no more nodes to go through 
  return collection[nextNode]
}