import React from "react";
import { withFormik, Form, Field } from "formik";
import FormikAddItemForm from './AddItemForm';

function AddAuction(props) {
  return (
    <>
    <h2>Create an Auction</h2>
    <Form>

      <div>
        <label>Name: </label>
        <Field name="name" type="text" placeholder="Company Name/Your Name" required/>
      </div>
      <div>
        <label>Purpose: </label>
        <Field name="purpose" type="text" placeholder="Purpose" required/>
      </div>
      <FormikAddItemForm addAuctionItem={props.addAuctionItem} />
      <button type="submit">Add Auction</button>
    </Form>
    </>
  );
}

const FormikAddAuction = withFormik({
  mapPropsToValues({ name, purpose }) {
    return {
      name: name || "",
      purpose: purpose || ""
    };
  },
  handleSubmit(values, { resetForm, props }) {
    props.addAuction(values);
    resetForm();
  }
})(AddAuction);

export default FormikAddAuction;