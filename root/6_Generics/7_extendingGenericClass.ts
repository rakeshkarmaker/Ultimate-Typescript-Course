

interface Products{
    name:string,
    price:number
}
class Store<T>{
    protected _objects: T[] = [];

    add(obj:T):void{
        this._objects.push(obj);
    }
}

let storeObj = new Store<Products>();

//store.objects =[];
//#When extending a generic Class, we have 3 options!
//1.Pass on the generic Type Parameter
class CompressibleStore<T> extends Store<T>{
    compress(){}
}

let store2 = new CompressibleStore<Products>();
store2.compress();

//2.Resstrict the generic type params
class SearchableStore<T extends {name:string}> extends Store<T>{
    find(name:string):T|undefined{
        return this._objects.find(obj =>obj.name ===name); //Property 'name' does not exist on type 'T'. SOL: (extending T)
    }
}

//3.Fixing or terminating generic type parameter
class ProductStore extends Store<Product>{
    filterByCategory(Catergory:string):Product[]{
        return [];
    }
}