import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
function Formik() {

    let schema = Yup.object().shape({
        email: Yup.string().min(10, "must be moro than 10").
            email().required("must be required"),
        password: Yup.string().max(20, 'must be lower then 20'),
    })
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    console.log(formik.errors)
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                    type="email"
                    name='email'
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={formik.handleChange}
                />
                {formik.errors.email && <small id="emailHelp" style={{ color: "red" }}>
                    {formik.errors.email}
                </small>}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name='password'
                    onChange={formik.handleChange}
                />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>

    )
}

export default Formik