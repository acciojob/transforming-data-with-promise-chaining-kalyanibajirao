//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
  const number = parseFloat(document.getElementById('ip').value);
  
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(number)) {
        reject('Invalid number');
      } else {
        document.getElementById('output').textContent = `Result: ${number}`;
        resolve(number);
      }
    }, 2000);
  })
  .then(result => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newResult = result * 2;
        document.getElementById('output').textContent = `Result: ${newResult}`;
        resolve(newResult);
      }, 1000);
    });
  })
  .then(result => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newResult = result - 3;
        document.getElementById('output').textContent = `Result: ${newResult}`;
        resolve(newResult);
      }, 1000);
    });
  })
  .then(result => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newResult = result / 2;
        document.getElementById('output').textContent = `Result: ${newResult}`;
        resolve(newResult);
      }, 1000);
    });
  })
  .then(result => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newResult = result + 10;
        document.getElementById('output').textContent = `Result: ${newResult}`;
        resolve(newResult);
      }, 1000);
    });
  })
  .then(finalResult => {
    document.getElementById('output').textContent = `Final Result: ${finalResult}`;
  })
  .catch(error => {
    document.getElementById('output').textContent = `Error: ${error}`;
  });
});
