export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/"

export const token = localStorage.getItem("token")

export const headers = {headers:{auth: token}}