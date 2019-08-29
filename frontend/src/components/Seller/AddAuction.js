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
        <Field name="auction_name" type="text" placeholder="Auction Name" />
      </div>
      <div>
        <label>Description: </label>
        <Field name="auction_description" type="text" placeholder="Description" />
      </div>
      <div>
        <label>Start Time: </label>
        <Field name="start_time" type="date"  />
      </div>
      <div>
        <label>End Time: </label>
        <Field name="end_time" type="date" />
      </div>
      <div>
      <label>Starting Bid: $</label>
        <Field name="starting_bid" type="number" placeholder="Price" />
      </div>
      <FormikAddItemForm values={values} addAuctionItem={addAuctionItem} />
      <button type="submit">Add Auction</button>
    </Form>
    </>
  );
}

const FormikAddAuction = withFormik({
  mapPropsToValues({ auction_name, auction_description, start_time, end_time, starting_bid }) {
    return {
      auction_name: auction_name || "",
      auction_description: auction_description || "",
      start_time: start_time || "",
      end_time: end_time || "",
      starting_bid: starting_bid || 0, //st
    };
  },
  handleSubmit(values, { resetForm, props }) {
    console.log('values', values);
    props.addAuction(values);
    resetForm();
  }
})(AddAuction);

export default FormikAddAuction;