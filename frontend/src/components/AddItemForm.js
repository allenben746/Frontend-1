import React from "react";
import { withFormik, Form, Field } from "formik";

function AddItemForm() {
  return (
    <>
    <h5>Add Items to Auction</h5>
    <Form>
      {/* <div>
        <Field name="image" type="text" placeholder="Upload Image" />
      </div> */}
      <div>
        <Field name="name" type="text" placeholder="Name" required/>
      </div>
      <div>
        <Field name="initialprice" type="text" placeholder="Initial Price" required/>
      </div>

      <button type="submit">Add Item</button>
    </Form>
    </>
  );
}

const FormikAddItemForm = withFormik({
  mapPropsToValues({ image, name, initialprice }) {
    return {
    //   image: image || "",
      name: name || "",
      initialprice: initialprice || ""
    };
  },
  handleSubmit(values, { resetForm, props }) {
    props.addAuctionItem(values);
    resetForm();
  }
})(AddItemForm);

export default FormikAddItemForm;