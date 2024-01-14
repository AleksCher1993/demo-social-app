export const required = value => value ? undefined : 'Поле обязательное для заполнения.'

export const maxLength = max => value =>
value && value.length > max ? `Должно быть меньше ${max} символов.` : undefined

export const minValue = min => value =>
value && value < min ? `Must be at least ${min}` : undefined

