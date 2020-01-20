export function createNewPromise(promiseResponse){
    return new Promise(resolve => {
        resolve(promiseResponse);
    });
}