import React from 'react'
import { VscLoading } from "react-icons/vsc"
import "./Loading.css"

const Loading = () => {
  return (
        <section className="waiting">
          <VscLoading className='loading' />
        </section>
  )
}

export default Loading