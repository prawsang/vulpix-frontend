/* eslint-disable no-console */

import axios from 'axios'

const url = `${process.env.NEXT_PUBLIC_TESTING_BACKEND_URL}/api`

export const sendTestingRequest = async (identifier: string, email: string) => {
  const res = await axios
    .post(`${url}/tests`, {
      application_id: identifier,
      requester_email: email,
      forced: false,
    })
    .catch((err) => console.log(err))
  return res
}
