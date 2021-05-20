/* eslint-disable no-console */

import axios from 'axios'

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`

export const byCategory = async () => {
  const res = await axios.get(`${baseUrl}/stats/by-category`).catch((err) => console.log(err))
  return res
}

export const byCriterion = async () => {
  const res = await axios.get(`${baseUrl}/stats/by-criterion`).catch((err) => console.log(err))
  return res
}

export const byScore = async (category?: string, limit?: string) => {
  const res = await axios
    .get(
      `${baseUrl}/stats/by-score${category ? `?category=${category}` : ''}${
        limit ? `?limit=${limit}` : ''
      }`,
    )
    .catch((err) => console.log(err))
  return res
}

export const categoryCount = async () => {
  const res = await axios.get(`${baseUrl}/stats/category-count`).catch((err) => console.log(err))
  return res
}

export const byViews = async () => {
  const res = await axios.get(`${baseUrl}/stats/by-views`).catch((err) => console.log(err))
  return res
}
