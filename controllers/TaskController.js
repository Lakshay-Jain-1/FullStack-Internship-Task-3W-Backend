import { TaskModel } from "../models/TaskSchema.js"

const sendingAllTheTasks=async(req,res)=>{
  const data =   await TaskModel.find({})
  res.json(data)
}

const creatingATask=async(req,res)=>{
    const {Tasktitle,TaskLink,points,platform,TaskDescription} = req.body
    const data =  await TaskModel.create({Tasktitle,TaskLink,points,platform,TaskDescription})
    res.status(200).json({message:"Successfully created the task "})
  }

  const updateATask=async(req,res)=>{
    const {Tasktitle,points,platform} = req.body
    const data =   await TaskModel.findOneAndUpdate({})
    res.status(200).json({message:"Successfully updated the task "})
  }

  const deleteATask=async(req,res)=>{
      const {Tasktitle,points,platform} = req.body
    const data =   await TaskModel.findOneAndDelete({Tasktitle,points,platform})
  
    res.status(200).json({message:"Successfully deleted the task "})
  }
  

export {sendingAllTheTasks,creatingATask,updateATask,deleteATask}