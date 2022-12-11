import React from 'react'
import { Welcome } from '../styles/pages/Home.styles'

const Home = ({users}) => {
  return (
      <Welcome>
        Witaj <span>{ users?.email }</span>
      </Welcome>
  )
}

export default Home