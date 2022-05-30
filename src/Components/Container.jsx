import { useState } from "react"
import { randomNumber } from "./Color"
import { Circle } from './Circle'

let x = randomNumber()
let combine = []
for (let one of x) {
    combine.push({ ...one })
}
console.log(combine[0][1])


const colorBox = [
    {
        id: 1,
        ele: <Circle number={1} color={`rgb(${combine[0][0]}, ${combine[0][1]}, ${combine[0][2]})`} />,
        inbox: true
    },
    {
        id: 2,
        ele: <Circle number={2} color={`rgb(${combine[1][0]}, ${combine[1][1]}, ${combine[1][2]})`} />,
        inbox: true
    },
    {
        id: 3,
        ele: <Circle number={3} color={`rgb(${combine[2][0]}, ${combine[2][1]}, ${combine[2][2]})`} />,
        inbox: true
    },
    {
        id: 4,
        ele: <Circle number={4} color={`rgb(${combine[3][0]}, ${combine[3][1]}, ${combine[3][2]})`} />,
        inbox: true
    },
    {
        id: 5,
        ele: <Circle number={5} color={`rgb(${combine[4][0]}, ${combine[4][1]}, ${combine[4][2]})`} />,
        inbox: true
    }

]




const Container = () => {
    const [ball, setBox] = useState([...colorBox])
    const [empty, setEmpty] = useState([])
    const [num, setNum] = useState()

    // Sorting the circles
    const filtered = () => {
        let filter = colorBox.filter(ele => ele.inbox === true)
        filter = filter.sort((a, b) => a.id - b.id)
        setBox(filter)
    }
    // Empty Div Filter
    const unfiltered = () => {
        let unfilter = colorBox.filter(ele => ele.inbox === false)
        setEmpty(unfilter)
    }

    // Shooter Input
    const handlebaloon = () => {

        if (+num < 1 || +num > 5 || num.length > 2) {
            alert('Enter Number Between 1 to 5')
            return
        }
        colorBox.forEach(ele => {
            if (ele.id === +num) {
                ele.inbox = false
            }
        })
        unfiltered()
        filtered()
    }


    // Bullet Click
    const handleIndex = (ele) => {
        colorBox.forEach(sm => {
            if (sm.id === ele.id) {
                sm.inbox = true
            }
        })
        unfiltered()
        filtered()
    }

    return (
        <div className="container">

            {/*Empty Color Box*/}
            <div className="box">
                <h2>Color Box</h2>
                <div className="bigbox">
                    {empty.map(ele => {
                        return (
                            <div onClick={() => handleIndex(ele)} key={ele.id} className="ele">
                                {ele.ele}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/*Main Color Box*/}
            <div className="color-box">
                <div className="shooter">
                    <input onChange={(e) => setNum(e.target.value)} value={num} placeholder="please enter number from 1 to 5" type="text" />
                    <button onClick={handlebaloon}>Shoot</button>
                </div>
                <div className="bigbox">
                    {ball.map(ele => {
                        return (
                            <div key={ele.id} className="ele">
                                {ele.ele}
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
export { Container }