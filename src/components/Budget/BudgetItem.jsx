import React from 'react'

function BudgetItem() {
    return (
        <div className=' border rounded-lg p-5'>
            <div>
                <div className=' flex justify-between items-center'>
                    <div className=' flex items-center gap-3' >
                    <div className=' bg-slate-200 flex w-10 justify-center rounded-full h-10 items-center'>😊</div>
                    <div className='  '>
                        <p className=' pb-1 font-bold text-sm'>Expense Name</p>
                        <p className=' text-xs text-slate-400'>Item Number</p>
                    </div>
                    </div>
                    <p className=' text-brand-color font-bold'>$2000</p>
                </div>

                <div className=' mt-5'>
                    <div className=' flex justify-between mb-2'>
                    <p className=' text-xs text-slate-400'>$0 Spent</p>
                    <p className=' text-xs text-slate-400'>$1200 Remaining</p>
                    </div>
                    <div className=' w-full bg-slate-200 h-2 rounded-full'>
                        <div className=' w-[40%] bg-brand-color h-2 rounded-full'></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BudgetItem