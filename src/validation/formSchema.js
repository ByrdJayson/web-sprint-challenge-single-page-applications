import * as yup from 'yup';

const formSchema = yup.object().shape({
   name: yup
       .string()
       .trim()
       .required('name is a required field')
       .min(2, 'name must be at least 2 characters'),
   size: yup
       .string()
       .oneOf(['Small', 'Medium', 'Large', 'X-Large'])
       .required('size is a required field'),
   special: yup
       .string(),
   mushroom: yup
       .boolean(),
   olive: yup
      .boolean(),
   pineapple: yup
      .boolean(),
   banana: yup
      .boolean()


})

export default formSchema
