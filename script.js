document.getElementById('btn').addEventListener('click', function() {
    const input = document.getElementById('ip').value;
    const outputDiv = document.getElementById('output');
    
    // Function to update the output div with the result
    function updateOutput(result) {
        outputDiv.textContent = `Result: ${result}`;
    }
    
    // Function to create a promise that resolves after a specified time
    function resolveAfterTime(value, time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value);
            }, time);
        });
    }

    // Start the promise chain
    resolveAfterTime(Number(input), 2000) // Wait 2 seconds and resolve with the input number
        .then(result => {
            updateOutput(result);
            return resolveAfterTime(result * 2, 1000); // Multiply by 2 and wait 1 second
        })
        .then(result => {
            updateOutput(result);
            return resolveAfterTime(result - 3, 1000); // Subtract 3 and wait 1 second
        })
        .then(result => {
            updateOutput(result);
            return resolveAfterTime(result / 2, 1000); // Divide by 2 and wait 1 second
        })
        .then(result => {
            updateOutput(result);
            return resolveAfterTime(result + 10, 1000); // Add 10 and wait 1 second
        })
        .then(finalResult => {
            outputDiv.textContent = `Final Result: ${finalResult}`; // Update with final result
        })
        .catch(error => {
            outputDiv.textContent = `Error: ${error}`; // Handle any errors
        });
});
