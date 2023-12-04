/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1, promise2])
      .then((results) => {
        const sum = results.reduce((acc, curr) => acc + curr, 0);
        return sum;
      });
  }
  
  /**
   * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   *   .then(console.log); // 4
   */