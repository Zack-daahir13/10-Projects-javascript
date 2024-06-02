document.addEventListener('DOMContentLoaded', () => {
    const budgetForm = document.getElementById('budget-form');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const categorySelect = document.getElementById('category');
    const budgetList = document.getElementById('budget-list');
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpensesElement = document.getElementById('total-expenses');
    const balanceElement = document.getElementById('balance');

    let totalIncome = 0;
    let totalExpenses = 0;

    budgetForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const description = descriptionInput.value;
        const amount = parseFloat(amountInput.value);
        const category = categorySelect.value;

        if (!description || isNaN(amount)) {
            alert('Please enter a valid description and amount.');
            return;
        }

        const budgetItem = document.createElement('li');
        budgetItem.classList.add('budget-item');
        budgetItem.classList.add(category);
        budgetItem.innerHTML = `
            <span>${description} - $${amount.toFixed(2)}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        budgetList.appendChild(budgetItem);

        if (category === 'income') {
            totalIncome += amount;
        } else {
            totalExpenses += amount;
        }

        updateSummary();

        descriptionInput.value = '';
        amountInput.value = '';
        categorySelect.value = 'income';
    });

    budgetList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const budgetItem = e.target.parentElement;
            const amountText = budgetItem.querySelector('span').textContent.split(' - $')[1];
            const amount = parseFloat(amountText);
            const category = budgetItem.classList.contains('income') ? 'income' : 'expense';

            if (category === 'income') {
                totalIncome -= amount;
            } else {
                totalExpenses -= amount;
            }

            budgetItem.remove();
            updateSummary();
        }
    });

    function updateSummary() {
        totalIncomeElement.textContent = `$${totalIncome.toFixed(2)}`;
        totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;
        balanceElement.textContent = `$${(totalIncome - totalExpenses).toFixed(2)}`;
    }
});
