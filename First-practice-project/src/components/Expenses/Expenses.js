import { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState('all');

  function handleFilterUpdate(data) {
    setFilterValue(data);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return filterValue !== 'all'
      ? expense.date.getFullYear().toString() === filterValue
      : true;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          filterValue={filterValue}
          onUpdateFilter={handleFilterUpdate}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
