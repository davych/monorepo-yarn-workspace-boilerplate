import Joi from 'joi'
export const get = {
  params: {
    name: Joi.string()
      .required()
      .description('welcome name')
  }
}
