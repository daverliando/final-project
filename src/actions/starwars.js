import axios from 'axios'
let id = 0

const fetchPeopleAsync = () => ({
    type: 'FETCH_PEOPLE_REQUEST'
})

const fetchPeopleError = payload => ({
    type: 'FETCH_PEOPLE_ERROR',
    payload
})

const fetchPeople = payload => ({
    type: 'FETCH_PEOPLE',
    payload
})

export const deletePerson = payload => ({
    type: 'DELETE_PERSON',
    payload
})

export const addPerson = payload => ({
    type: 'ADD_PERSON',
    payload
})

export const editPerson = payload => ({
    type: 'EDIT_PERSON',
    payload
})

//alternative
export const fetchMorePeople = (page = 1) => async dispatch => {
    if (page === 1) {
        dispatch(fetchPeopleAsync())
    }

    try {
        axios.get(`https://swapi.co/api/people/?page=${page}`)
            .then(response => {
                const addId = response.data.results.map(x => ({ id: id++, ...x }))
                dispatch(fetchPeople(addId))
            })
    } catch (error) {
        dispatch(fetchPeopleError(error))
    }
}
