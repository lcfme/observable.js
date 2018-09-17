import { def, isPlainObject, clone, cloneDeep } from './util';
import Dep from './dep';
type ObservexCallback = (any, any) => any;

class Observex {
    value: Object;
    deps: Array<Dep>;
    constructor(o: Object, cb?: ObservexCallback) {
        if (!o || typeof o !== 'object')
            throw new Error('argument is expected to be an object');
        this.value = o;
        this.cb = cb;
        def(o, '__ob__', this);
        if (Array.isArray(o)) {
        } else {
            this.walk();
        }
    }
    walk() {
        const keys = Object.keys(this.value);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(this.value, keys[i]);
        }
    }
}

export function defineReactive(obj: Object, key: string) {
    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }
    let val: any;
    const getter = property && property.get;
    const setter = property && property.set;
    if (!getter || setter) {
        val = obj[key];
    }

    let childOb = observe(val);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            const value = getter ? getter.call(obj) : val;
            return value;
        },
        set(newVal) {
            const value = getter ? getter.call(obj) : val;
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return;
            }
            const _oldValue = cloneDeep(value);
            if (setter) {
                setter.call(obj, newVal);
            } else {
                val = newVal;
                childOb = observe(val);
            }
        }
    });
}

export function observe(o: any): Observex | void {
    if (!o || typeof o !== 'object') {
        return;
    }
    if (o.hasOwnProperty('__ob__') && o.__ob__ instanceof Observex) {
        return o.__ob__;
    }
    return new Observex(o);
}

export default Observex;

export { def, isPlainObject, clone, cloneDeep };
