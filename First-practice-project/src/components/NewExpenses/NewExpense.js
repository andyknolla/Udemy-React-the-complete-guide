import { useState } from 'react';
import NewExpenseForm from './NewExpenseform';
import NewExpenseOption from './NewExpenseOption';

import './NewExpense.css';

const NewExpense = (props) => {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);

  function toggleFormHandler(bool) {
    setShowAddExpenseForm(bool);
  }

  function handleExpenseUpdate(data) {
    const dataWithId = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(dataWithId);
  }

  return (
    <div className='new-expense'>
      {showAddExpenseForm ? (
        <NewExpenseForm
          onSaveExpenseData={handleExpenseUpdate}
          showExpenseForm={showAddExpenseForm}
          onToggle={toggleFormHandler}
        />
      ) : (
        <NewExpenseOption
          showExpenseForm={showAddExpenseForm}
          onToggle={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
