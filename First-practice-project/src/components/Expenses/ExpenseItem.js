import './ExpenseItem.css';
import Card from '../UI/Card';
import ItemDate from './ExpenseDate';

const ExpenseItem = (props) => (
  <li>
    <Card className='expense-item'>
      <ItemDate date={props.date}></ItemDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </Card>
  </li>
);

export default ExpenseItem;
