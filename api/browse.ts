/* eslint-disable no-console */

import axios from 'axios'

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`

export const getCategories = async () => {
  const res = await axios.get(`${baseUrl}/browse/categories`).catch((err) => console.log(err))
  return res
}

export const getAppsInCategory = async ({ slug, page }: { slug: string; page: string }) => {
  const res = await axios
    .get(`${baseUrl}/browse/category/${slug}?page=${page}`)
    .catch((err) => console.log(err))
  return res
}

export const getSearchResults = async ({
  searchTerm,
  page,
}: {
  searchTerm: string
  page: string
}) => {
  const res = await axios.get(`${baseUrl}/browse/search?searchTerm=${searchTerm}&page=${page}`)
  return res
}

export const getResult = async (identifier: string) => {
  const res = await axios.get(`${baseUrl}/browse/application?identifier=${identifier}`)
  return res
}
