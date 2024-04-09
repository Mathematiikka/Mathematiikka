    <script>
        function calculateRoot() {
            var number = parseFloat(document.getElementById('number').value);
            var root = parseFloat(document.getElementById('root').value);

            if (isNaN(number) || isNaN(root)) {
                alert("Please enter valid numbers.");
                return;
            }

            var result = Math.pow(number, 1/root);
            result = result.toFixed(5); // Round to 5 decimal places

            document.getElementById('result').innerText = "The " + root + "-th root of " + number + " is approximately " + result;
        }
    </script>
