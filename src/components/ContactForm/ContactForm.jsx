import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short")
        .max(50, "Too long")
        .required("Required")
        .trim(),
    number: Yup.string()
        .min(3, "Too short")
        .max(50, "Too long")
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid! Number format: xxx-xx-xx")
        .required("Required")
        .trim()
})

export default function ContactForm({onAdd}) {

    const nameId = useId();
    const numberId = useId();
    
    const handleSabmit = (values, actions) => {
        const id = nanoid();
        values.id = id;
        actions.resetForm();
        onAdd(values)
    }

    
    return (
        <Formik
            initialValues={{
            name: " ",
            number: " ",
            id: " "
            }}
            validationSchema={UserSchema}
            onSubmit={handleSabmit}>
            <Form className={css.form}>
                <div className={css.container}>
                    <label className={css.label} htmlFor={nameId}>Name</label>
                    <Field className={css.field}  name="name" id={nameId} />
                    <ErrorMessage  className={css.error}  name="name"  component="span"/>
                </div>
                <div className={css.container}>
                    <label className={css.label}  htmlFor={numberId}>Number</label>
                    <Field className={css.field} name="number" id={numberId} />
                    <ErrorMessage  className={css.error} name="number" component="span"/>
                </div>
                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}