class PersonNode {
  constructor(name) {
    this.name = name
    this.faveFlavor = []
  }

  addFlavor(flavor) {
    this.faveFlavor.push(flavor)
  }
}

class IceCreamFlavorNode {
  constructor(flavor) {
    this.flavor = flavor
  }
}


class Graph {
  constructor () {
    this.peopleNodes = []
    this.iceCreamFlavorNodes = []
    this.edges = []
  }

  addPersonNode(name) {
    this.peopleNodes.push(new PersonNode(name));
  }

  addIceCreamFlavorNode(flavor) {
    this.iceCreamFlavorNodes.push(new IceCreamFlavorNode(flavor));
  }

  getPerson(name) {
    return this.peopleNodes.find(person => person.name === name)
  }

 getFlavor(flav) {
    // console.log(this.iceCreamFlavorNodes.find(item => console.log('find: ', item.flavor === flav)));
   const type = this.iceCreamFlavorNodes.find(item => item.flavor === flav)
   console.log("type", type)

   if (type === undefined) {
     return "Flavor Doesn't exist" 
   } else {
     return type ;
   }
  }

  addEdge(personName, flavorName) {
    // console.log(personName, ' ', flavorName)
    const person = this.getPerson(personName)
    const flavor = this.getFlavor(flavorName)
    person.addFlavor(flavor);
    this.edges.push(`${personName} - ${flavorName}`);
  }

  print() {
    return this.peopleNodes.map(({name, faveFlavor}) => {
      return `${name} => ${faveFlavor.map(flavor => `${flavor.flavor},`).join(' ')}`;
    }).join(' \n')
  }
}
// const a = ["chocolate", "cheese", "vanilla"];
// console.log('find test: ', a.find(flavor => "cheese" === flavor));
const g = new Graph(true);
g.addPersonNode("chad")
g.addPersonNode("heather")
g.addPersonNode("marua")
g.addPersonNode("mae")
g.addPersonNode("Blergy")
g.addIceCreamFlavorNode("vanilla")
// g.addIceCreamFlavorNode("chocolate")
// g.addIceCreamFlavorNode("cheese")
// g.addIceCreamFlavorNode("stabby")

// g.addEdge("chad", "chocolate")
// g.addEdge("chad", "cheese")
// g.addEdge("chad", "stabby")
// g.addEdge("chad", "vanilla")
g.addEdge("chad", "rocky road")
// g.addEdge("heather", "chocolate")
// g.addEdge("heather", "vanilla")
// g.addEdge("marua", "vanilla")
// g.addEdge("mae", "vanilla")
// g.addEdge("mae", "stabby")
// g.addEdge("Blergy", "vanilla")
console.log(g.getFlavor("vanilla"))
// console.log(g.iceCreamFlavorNodes)
console.log(g.print());


