import React from 'react'
import AddBudget from './AddBudget'
import BudgetItem from './BudgetItem'

function BudgetList() {
  return (
    <div className=' mt-7 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <AddBudget/>
        <BudgetItem/>
        <BudgetItem/>
        <BudgetItem/>
        <BudgetItem/>
        <BudgetItem/>
    </div>
  )
}

export default BudgetList