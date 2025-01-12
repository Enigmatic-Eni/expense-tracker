import React from 'react'
import AddBudget from './AddBudget'

function BudgetList() {
  return (
    <div className=' mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <AddBudget/>
    </div>
  )
}

export default BudgetList