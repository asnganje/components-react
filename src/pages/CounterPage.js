import { useState } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

export default function CounterPage() {

    const [count, setCount] = useState(0)
    const [valueToAdd, SetValueToAdd] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }
    const handleChange = (event) => {

        const value = event.target.value;
        SetValueToAdd(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setCount(count+valueToAdd)
        SetValueToAdd(0)
    }
    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is {count}</h1>
            <div className='flex flex-row'>
                <Button onClick = {increment}>Increment</Button>
                <Button onClick = {decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                type='number' 
                value={valueToAdd || ''}
                onChange={handleChange}
                className='p-1 m-3 bg-gray-50 border border-gray-300'/>
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}