
import apiBackEnd from "./api.Backend.js";

let getAllReviews = () => {
    return apiBackEnd.get('/api/review/all')
}

let addReviewByUuidTeam = (uuidTeam, reviewDto) => {
    return apiBackEnd.post(`/api/review/add/${uuidTeam}`,reviewDto)
}


export const reviewService = {
    getAllReviews, addReviewByUuidTeam
}