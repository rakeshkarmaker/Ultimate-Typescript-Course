"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
let storeObj = new Store();
//store.objects =[];
//#When extending a generic Class, we have 3 options!
//1.Pass on the generic Type Parameter
class CompressibleStore extends Store {
    compress() { }
}
let store2 = new CompressibleStore();
store2.compress();
//2.Resstrict the generic type params
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name); //Property 'name' does not exist on type 'T'. SOL: (extending T)
    }
}
//3.Fixing or terminating generic type parameter
class ProductStore extends Store {
    filterByCategory(Catergory) {
        return [];
    }
}
