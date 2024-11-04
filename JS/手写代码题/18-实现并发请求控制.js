/**
 * 请写一个函数  limitedConcurrentReqs(reqUrls, limit)  实现最大并发数的并发请求。不管请求成功还是失败，都当作结果返回，最后返回一个结果数组，对应每个  reqUrl  的请求结果。
 */

const request = (time, name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(time + "s 后执行" + name);
      resolve(`完成请求 ${name}`);
    }, time * 1000);
  });
};

const limitedConcurrentReqs = (reqUrls, limit) => {
  return new Promise((resolve, reject) => {
    const results = new Array(reqUrls.length);
    let executing = 0;
    let index = 0;

    const runRequest = () => {
      if (index >= reqUrls.length && executing === 0) {
        resolve(results);
        return;
      }

      while (executing < limit && index < reqUrls.length) {
        const currentIndex = index;
        const url = reqUrls[index];
        executing++;
        index++;

        request(url, url)
          .then(res => {
            results[currentIndex] = res;
          })
          .catch(err => {
            results[currentIndex] = err;
          })
          .finally(() => {
            executing--;
            runRequest();
          });
      }
    };

    runRequest();
  });
};

limitedConcurrentReqs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3).then(res => {
  console.log(res);
});



