import { model } from '@project/db'
export const getWelcome = async function () {
  const res = await model.account.find()
  console.log(res)
  return res
}
