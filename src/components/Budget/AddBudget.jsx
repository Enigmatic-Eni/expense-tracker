
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function AddBudget() {
    const [emoji, setEmoji] = useState("😊")
    const [openEmoji, setOpenEmoji] = useState(false)
    const [budgetName, setBudgetName] = useState();
    const [budgetAmount, setBudgetAmount] = useState();
    const toggleOpenEmoji = ()=>{
    setOpenEmoji(!openEmoji);
}
  return (
    <div>
      
      <Dialog>
        <DialogTrigger asChild>
            <div className=" bg-gray-100 p-10 rounded-lg items-center flex justify-center border-2  cursor-pointer border-dashed hover:shadow-sm">
        <p className=" pr-3 font-bold">+</p>
        <p>Create New budget</p>
      </div>
      </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle > <h2 className=" text-xl font-bold">Create New Budget</h2></DialogTitle>
           
            <DialogDescription>
                <div>
                    <Button variant="outline" size="lg" className="text-lg" onClick={toggleOpenEmoji}>{emoji}</Button>
            <div className=" my-3 absolute bg-white">  
            <EmojiPicker open={openEmoji} onEmojiClick={(e)=>{setEmoji(e.emoji); setOpenEmoji(false)}}/>
            </div>
            <div>
                <p className=" font-semibold text-black my-2">Budget Name</p>
                <Input placeholder="e.g Foodstuff" onChange={(e)=>setBudgetName(e.target.value)}/>
            </div>
            <div>
                <p className=" font-semibold text-black my-2">Budget Amount</p>
                <Input type="number" placeholder="e.g #5000" onChange={(e)=>setBudgetAmount(e.target.value)}/>
            </div>
            <Button
            disabled={!(budgetName&&budgetAmount)}
            className="mt-3 w-full" variant="custom">Create Budget</Button>
            </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddBudget;
