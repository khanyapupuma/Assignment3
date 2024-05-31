document.addEventListener('DOMContentLoaded', function () {
    function calculateTotalPrice() {
        const rows = document.querySelectorAll('#main table tbody tr');
        let totalOrderPrice = 0;
        rows.forEach((row, index) => {
            if (index < rows.length - 1) {
                const price = parseFloat(row.cells[3].textContent);
                const quantity = parseInt(row.cells[4].querySelector('input').value);
                const total = price * quantity;
                row.cells[5].textContent = total.toFixed(2);
                totalOrderPrice += total;
            }
        });
        document.querySelector('.total.output').textContent = totalOrderPrice.toFixed(2);
    }
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', calculateTotalPrice);
    });
    document.querySelector('button[type="button"]').addEventListener('click', calculateTotalPrice);
});document.addEventListener('DOMContentLoaded', function () {
    function calculateTotalPrice() {
        const rows = document.querySelectorAll('#main table tbody tr');
        let totalOrderPrice = 0;
        rows.forEach((row, index) => {
            if (index < rows.length - 1) {
                const price = parseFloat(row.cells[3].textContent);
                const quantity = parseInt(row.cells[4].querySelector('input').value);
                const total = price * quantity;
                row.cells[5].textContent = total.toFixed(2);
                totalOrderPrice += total;
            }
        });
        document.querySelector('.total.output').textContent = totalOrderPrice.toFixed(2);
    }
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', calculateTotalPrice);
    });
    document.querySelector('button[type="button"]').addEventListener('click', calculateTotalPrice);
});