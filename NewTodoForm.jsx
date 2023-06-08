import { useState } from "react"

export function NewTodoform({onSubmit})//use of the custom props in the componets with same name given while passing through the componets
  {
  
  const[newItem, setNewItem]= useState("")

  function handleSubmit(e)
  {
    e.preventDefault()
    if(newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }
  return <form onSubmit={handleSubmit} className="new-item-form">
  <div className="form-row">
    <label htmlFor="item">New Item</label> {/*htmlfor is used to link for the input and label when ever the label is clicked the input tag will get invoked*/ }
    <input value={newItem} onChange={e=> setNewItem(e.target.value)} type="text" id="item"/>
  </div>
  <button className="btn">ADD</button>
</form>
}