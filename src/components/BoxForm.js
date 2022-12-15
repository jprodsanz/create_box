import { useState } from 'react'

const BoxForm = (props) => {
    const { boxColors, setBoxColors } = props
    const [ color, setColor ] = useState("")

    const createNewBox = (e) => {
        e.preventDefault()
        setBoxColors( [...boxColors, color] )

    }

return (
    <div>
        <h1>This application will help you make a box...</h1>
        <form onSubmit={ createNewBox }>
            <div>
                <label>Pick a colo:</label>
                <input onChange={(e) => setColor(e.target.value)}></input>
            </div>
            <div>
                <input type="submit" value="Create Box"></input>
            </div>
        </form>
    </div>
)
}

export default BoxForm 