import {encode as base64Encode} from 'base-64'

import {getItem} from './storeData'

const url = 'https://454c-92-50-180-214.ngrok-free.app'

const createFetchRequest = async (path, code = '') => {
  const storedServerAddress = await getItem('serverAddress')
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      `${storedServerAddress}/apimobile/hs/mobile/${path}${code}`,
      requestOptions,
    )

    if (!response.ok) {
      throw new Error(`Error from fetch${path}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchBalance = async () => createFetchRequest('balance')
const fetchReceipts = async () => createFetchRequest('receipts')
const fetchConsumption = async () => createFetchRequest('consumption')
const fetchSales = async () => createFetchRequest('sales')
const fetchBalanceOrgs = async () => createFetchRequest('balance', '?code=all')
const fetchReceiptsOrgs = async () =>
  createFetchRequest('receipts', '?code=all')
const fetchConsumptionOrgs = async () =>
  createFetchRequest('consumption', '?code=all')
const fetchSalesOrgs = async () => createFetchRequest('sales', '?code=all')
const fetchSalesChart = async () => createFetchRequest('sales', '?chart=1')

const fetchLicense1 = async () => {
  const username = 'admin'
  const password = '12345An'

  const id = await getItem('deviceUniqueId')
  console.log('deviceID:', id)

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(`${username}:${password}`)}`,
    },
  }

  try {
    const response = await fetch(
      `${url}/servLic/hs/licensing/info/${id}`,
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchLicense1')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchLicense2 = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(
      `${url}/servLic/hs/licensing/info/2`,
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Error from fetchLicense2')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const fetchRetailOrgs = async () => {
  const username = 'admin'

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${base64Encode(username)}`,
    },
  }

  try {
    const response = await fetch(`${url}/ut/hs/mobile/orp`, requestOptions)
    if (!response.ok) {
      throw new Error('Error from fetchRetailOrgs')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export {
  fetchBalance,
  fetchReceipts,
  fetchConsumption,
  fetchSales,
  fetchBalanceOrgs,
  fetchReceiptsOrgs,
  fetchConsumptionOrgs,
  fetchSalesOrgs,
  fetchSalesChart,
  fetchLicense1,
  fetchLicense2,
  fetchRetailOrgs,
}
