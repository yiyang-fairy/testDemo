// 手写 promise 的构造函数
/*

*/
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
    #state = PENDING;
    #result = undefined;
    handlers = [];
    constructor(fn) {
        const resolve = (data) => {
            this.#changState(FULFILLED, data);
        };
        const reject = (reason) => {
            this.#changState(REJECTED, reason);
        };

        try {
            fn(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    run(onFulfilled, onRejected, resolve, reject) {
        FOO();
    }

    #changState(state, data) {
        if (this.#state !== PENDING) return;
        this.#state = state;
        this.#result = data;
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.#state === FULFILLED) {
                MyPromise.resolve(onFulfilled(this.#result)).then(
                    (res) => resolve(res),
                    reject
                );
            } else if (this.#state === REJECTED) {
                onRejected(this.#result).then(resolve, reject);
            } else {
                this.handlers.push({
                    onFulfilled,
                    onRejected,
                    resolve,
                    reject,
                });
            }
        });
    }

    static reject(a) {
        return new MyPromise((resolve, reject) => reject(a));
    }

    static resolve(a) {
        return new MyPromise((resolve, reject) => resolve(a));
    }
}

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//         reject(123);
//     }, 200);
// });

let XP = MyPromise;
// let XP = Promise;

// const q = new Promise((resolve, reject) => {
const q = new XP((resolve, reject) => {
    // setTimeout(() => {
    resolve(1);
    reject(123);
    // }, 200);
});
q.then(
    (res) => {
        console.log(res);
        // return XP.reject(2);
    },
    (res) => {
        console.log("rej", res);
    }
).then(
    (res) => {
        console.log(`ok 2`, res);
    },
    (res) => {
        console.log("rej2 ", res);
    }
);

console.log(1);
// .then((resolve, reject) => {
//     resolve("成功2");
//     reject("失败2");
// })
// .then((resolve, reject) => {
//     resolve("成功3");
//     reject("失败3");
// });

// console.log(p);
// console.log(q);
