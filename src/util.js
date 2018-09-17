// flow

export function def(o: Object, k: string, v: any, enumerable?: boolean) {
    Object.defineProperty(o, k, {
        value: v,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}

export function isPlainObject(o: any) {
    if (!o || typeof o !== 'object') return false;
    const proto = o.__proto__;
    return proto === Object.prototype;
}

export function clone(o: any) {
    if (isPlainObject(o)) {
        return {
            ...o
        };
    }
    if (Array.isArray(o)) {
        return [...o];
    }
    return o;
}

export function cloneDeep(o: any) {
    o = clone(o);
    if (isPlainObject(o)) {
        Object.keys(o).forEach(k => {
            o[k] = cloneDeep(o[k]);
        });
    }
    if (Array.isArray(o)) {
        o.forEach((v, i) => {
            o[i] = cloneDeep(v);
        });
    }
    return o;
}

export function remove<T>(arr: Array<T>, item: T): Array<T> {
    var _r = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item) _r.push(arr[i]);
    }
    arr = _r;
}
