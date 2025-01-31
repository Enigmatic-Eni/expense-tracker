import BudgetList from '@/components/Budget/BudgetList'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Budgets() {
  return (
    <div>
  
      <p className=' text-2xl font-bold'>My Budgets</p>
      <BudgetList/>
    </div>
  )
}

export default Budgets