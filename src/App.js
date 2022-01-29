import React, { useEffect } from 'react'
import AnecdoteForm from './components/anecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { connect } from 'react-redux'
import Filter from './components/Filter'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {   
    useEffect(() => {
        props.initAnecdotes()
    }, [props])

    return (
        <>
            <Notification />
            <h2>Anecdotes</h2>
            <Filter />
            <AnecdoteList />
            <AnecdoteForm />
        </>
    )
}

export default connect(
    null,
    {initAnecdotes}
)(App)