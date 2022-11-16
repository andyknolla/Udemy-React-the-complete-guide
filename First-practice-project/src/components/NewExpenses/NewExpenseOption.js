import './NewExpense.css';

const NewExpenseOption = (props) => {
  function toggle() {
    props.onToggle(!props.showAddExpenseForm);
  }

  return (
    <div className='new-expense-option'>
      <button onClick={toggle}>Add an expense</button>
    </div>
  );
};

export default NewExpenseOption;
