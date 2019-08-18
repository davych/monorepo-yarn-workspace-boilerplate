import Joi from 'joi'
export const login = {
  username: Joi.string().required(),
  password: Joi.string().required()
}
