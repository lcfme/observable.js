/** @flow */
import Watcher from "./watcher";
import { remove } from './util';

let count = 0;
const depStack: Array<Watcher> = [];
class Dep {
    static target: ?Watcher;
    id: number;
    subs: Array<Watcher>;
    constructor() {
        this.id = ++count;
        this.subs = [];
    }
    addSub(watcher: Watcher) {
        this.subs.push(watcher);
    }
    removeSub(watcher: Watcher) {
        remove(this.subs, watcher);
    }
}

Dep.target = null;

Dep.new = function createDep() {
    var dep = new Dep();
    if (Dep.target) {
        Dep.target.addSub(new Watcher(this));
    }
    Dep.target = dep;
    return dep;
};


export default Dep;
