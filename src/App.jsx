import { useState } from "react"
import ContentItem from "./components/ContentItem"
import ExpenseItem from "./components/ExpenseItem"

const App = () =>
{
  
  const[expenses, setExpenses] = useState([
    {id: 1, title: "Food", amount: 500},
    {id: 2, title: "Cloths", amount: 2250},
    {id: 3, title: "Rent", amount: -5000}
  ])
  const addExpenses = (title,amount) => {
    setExpenses([...expenses ,{title: title,amount: amount}])
  }
const deleteExpense =(id) => {
  setExpenses(expenses.filter((exp) => exp.id !==id))
}

let income = 0
let expense = 0
expenses.forEach((exp) => {
  if(exp.amount > 0) {
    income += exp.amount
  }
  else{
    expense -= exp.amount
  }
})

let balance = income-expense
  return (
    <>
    <div className="expensetitle">EXPENSE TRACKER</div>
    <ContentItem  addExpense = {addExpenses}/>

    <div className="newboxouter">
      <div className="balance">Balance: {balance}</div>
      <div className="incomeex">
        <div className="income">
          <span className="title">Income</span>
          <span>{income}</span>
        </div>
        <div className="block"></div>
        <div className="expense">
          <span className="title">Expense</span>
          <span>{expense}</span>
        </div>
      </div>
    </div>
    {
      expenses.map((items) =>{
        return(
        <ExpenseItem {... items} deleteExpense={deleteExpense} />
        )
      })
    }
    </>
  )
}

export default App