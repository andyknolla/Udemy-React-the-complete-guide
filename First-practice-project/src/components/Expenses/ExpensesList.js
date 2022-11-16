import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  } else {
    return (
      <ul className='expenses-list'>
        {props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </ul>
    );
  }
};

export default ExpensesList;