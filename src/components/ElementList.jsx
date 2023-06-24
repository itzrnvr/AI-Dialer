import React, { useEffect, useState } from 'react'
import SimpleTextInput from './Inputs/SimpleTextInput'

const ElementList = ({
    data = [
        {   
            name:"brah",
            label: "Campaign Name",
            placeholder: "My New Campaign",
            type: "text", 
        }
    ],
    child = (item, state) => (
        (<SimpleTextInput
            label={item.label}
            placeholder={item.placeholder}
            onChange={(e) => state(e.target.value)}
        />)
    ),
    onChangeSate = (state) => ''
}) => {

    const [state, setState] = useState({})

    const elementList = []

    data.forEach((dat) => {
        elementList.push(
            child(dat, (val) => {
                const newState = {...state}
                newState[dat.name] = val
                setState(newState)
            })
        )
    })

    useEffect(() => {
        onChangeSate(state)
    }, [state])

  return (
    <>
        {elementList}
        {/* {data.map(item => {
            return (<SimpleTextInput
             label={item.label}
             placeholder={item.placeholder}
             onChange={(e) => {
                    setState({...state, 'campaignName': e.target.value})
                    console.log(state)
                }}
             />)
        })} */}
    </>
  )
}

export default ElementList