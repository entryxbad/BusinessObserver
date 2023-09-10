import {encode as base64Encode} from 'base-64'

const fetchBalance = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      'http://192.168.64.140/test/hs/test/osv',
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchBalance')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export {fetchBalance}
