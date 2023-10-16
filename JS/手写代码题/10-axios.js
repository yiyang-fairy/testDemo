// const mAxios = (config) => {
//   return new Promise((resolve, reject) => {
//     const xhr = XMLHttpRequest();
//     xhr.open(config.method || "GET", config.data, true);
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4 || xhr.status !== 200) {
//         reject(xhr.statusText);
//       } else {
//         resolve(JSON.parse(xhr.responseText));
//       }
//     };
//     xhr.onerror = () => {
//       reject(xhr.statusText);
//     };
//     if (config.headers) {
//       Object.keys(config.headers).forEach((key) => {
//         xhr.setRequestHeader(key, config.headers[key]);
//       });
//     }
//     xhr.send(config.data);
//   });
// };
11111111111111111;

const mAxios = (config) => {
    return new Prommise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(config.method, config.data, true);
        xhr.onreadystateChange = () => {
            if (xhr.readyState === 4 && xhr.DONE.status === 200) {
                reject(xhr.statusText);
            } else {
                resolve(JSON.parse(xhr.responseText));
            }
        };
        xhr.onerror = () => {
            reject(xhr.statusText);
        };
        if (config.headers) {
            Object.keys(config.headers).forEach((key) => {
                xhr.setRequestHeader(key, config.headers[key]);
            });
        }
        xhr.send(config.data);
    });
};
