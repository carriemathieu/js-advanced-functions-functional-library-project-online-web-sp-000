const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    
    each: function(collection, callback) {
      // if collection has a .length, it's an array
      if (collection.length) {
        // for each element in collection, call on collection passing in element as an argument
        collection.forEach(element => callback(element, collection))
        return collection
      } else {
        Object.values(collection).forEach(element => callback(element, collection))
        return collection
      }
    },
    
    map: function(collection, callback) {
      // if collection has a .length, it's an array
      if (collection.length) {
        let newColl = collection.map(element => callback(element))
        return newColl
      } else {
        let newColl = Object.values(collection).map(element => callback(element))
        return newColl
      }
    },

    reduce: function(collection, callback, acc=-2) {
      return collection.reduce(callback, acc)
    },

    find: function(collection, pred) {
      return collection.find((element) => pred(element)) 
    },

    filter: function(collection,pred) {
      return collection.filter((element) => pred(element)) 
    },

    size: function (collection) {
      return Object.values(collection).length
    },

    first: function(array, length=0) {
      if (length == 0) {
        return array[0]
      } else {
        return array.slice(0,length)
      }
    },

    last: function(array,length=0) {
      if (length == 0) {
        return array[array.length-1]
      } else {
        return array.splice(array.length-length, array.length-1)
      }
    },

    compact: function(array) {
      return array.filter(element => !!element)
    },

    sortBy: function(array, callback) {
      let newarr = [...array]
      return newarr.sort((a,b) => callback(a) - callback(b))
    },

    flatten: function(array, level=false) {
      if (level==true){
        return array.flat()
      } else {
        let depth = array.filter(Array.isArray).length
        return array.flat(depth+1)
      }
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(collection) {
      return Object.keys(collection)
    },

    values: function(collection) {
      return Object.values(collection)
    },

    functions: function(obj) {
      let names = []
      for (let func in obj) {
        if (typeof (obj[func]) === 'function') {
          names.push(func)
        }
      }
      return names.sort()
    }
    
  }
})()

fi.libraryMethod()
