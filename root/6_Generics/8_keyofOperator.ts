

interface Products{
    name:string,
    price:number
}

class Stores<T>{
    protected _objects:T[]=[];

    add(obj:T):void{
        this._objects.push(obj);
    }

    // find(property:string,value:unknown): T|undefined{
    find(property:keyof T,value:unknown): T|undefined{ // value can be anything but any is bad practice so using unknown
        //if T is product then keyof T =>returns  'name'|'price'
        return this._objects.find(obj =>obj[property]===value)
    }

}

let store = new Stores<Products>();
store.add({name:'a', price:100});
store.find('name',100);
store.find('price',100);
store.find('nonExistingProperty',100);