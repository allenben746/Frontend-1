import React, {useState} from "react";
import { withFormik, Form, Field } from "formik";
import FormikAddItemForm from './AddItemForm';

function AddAuction({values, addAuctionItem}) {
  const [showForm, setShowForm] = useState(false);

  if(!showForm){return(
    <button onClick={() => setShowForm(true)}>Add an Auction</button>
  )}
  return (
    <>
    <h3>Create an Auction</h3>
    <Form>
      <div>
        <label>Name: </label>
        <Field name="name" type="text" placeholder="Company Name/Your Name" />
      </div>
      <div>
        <label>Purpose: </label>
        <Field name="purpose" type="text" placeholder="Purpose" />
      </div>
      <FormikAddItemForm values={values} addAuctionItem={addAuctionItem} />
      <button type="submit">Add Auction</button>
    </Form>
    </>
  );
}

const FormikAddAuction = withFormik({
  mapPropsToValues({ name, purpose, items }) {
    return {
      name: name || "",
      purpose: purpose || "",
      items: items || [],
    };
  },
  handleSubmit(values, { resetForm, props }) {
    console.log('values', values);
    props.addAuction(values);
    resetForm();
  }
})(AddAuction);

export default FormikAddAuction;