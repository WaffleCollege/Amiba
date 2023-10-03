/* exported getElementsByClassName */

const getElementsByClassName = () => {
  // YOUR CODE HERE
  if(document.hasChildNodes) {
    let children = document.childNodes;

    for(const node of children) {
      console.log(innerHTML.node);
    }
  }
};


//console.log(getElementsByClassName());
console.log(document.childNodes);
