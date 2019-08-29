import React, {useState} from "react";
import { withFormik, Form, Field } from "formik";

function AddItemForm() {
  const [showForm, setShowForm] = useState(false);

  if(!showForm){return(
    <button onClick={() => setShowForm(true)}>Add a Product</button>
  )}
  return (
    <>
    <h3>Add a Product</h3>
    <Form>
      <div>
        <label>Name: </label>
        <Field name="product_name" type="text" placeholder="Product Name" />
      </div>
      <button type="submit">Add Product</button>
    </Form>
    </>
  );
}

const FormikAddItemForm = withFormik({
  mapPropsToValues({ product_name }) {
    return {
      product_name: product_name || "",
    };
  },
  handleSubmit(values, { resetForm, props }) {
    console.log('values', values);
    props.addProduct(values);
    resetForm();
  }
})(AddItemForm);

export default FormikAddItemForm;