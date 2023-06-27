import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  customer_name: yup.string().required(),
  contact_information: yup.string().required(),
  date: yup.date().required(),
  time: yup.date().required(),
  number_of_guests: yup.number().integer().required(),
  table_id: yup.string().nullable().required(),
});
