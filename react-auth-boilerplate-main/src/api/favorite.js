import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllFav = () => {
    return axios(`${apiUrl}/favorites`)
}

// show function
export const getOneFav = (favoritesId) => {
    return axios(`${apiUrl}/favorites/${favoritesId}`)
}

// create function
export const createFavorite = (user, newFave) => {
    console.log('user', user)
    console.log('this is newFave', newFave)
    return axios({
        url: `${apiUrl}/favorites`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { favorite: newFave }
    })
}
// PATCH -> update function
export const updateFave = (user, updatedFave) => {
    console.log('user', user)
    console.log('this is newFave', updatedFave)
    return axios({
        url: `${apiUrl}/favorites/${updatedFave._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { favorite: updatedFave }
    })
}
// DELETE -> remove function
export const removeFav = (user, favoritesId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/favorites/${favoritesId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}