import React, {useState} from "react";
import { withFormik, Form, Field } from "formik";

function AddAuction() {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [auctionToEdit, setAuctionToEdit] = useState("");

  const saveEdit = auction => {
      setEditing(true);
      setAuctionToEdit(auction);
    
  };

  if(!showForm){return(
    <button onClick={() => setShowForm(true)}>Edit Auction</button>
  )}
  return (
    <>
    {editing && (
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
          <button type="submit">Save Auction</button>
        </Form>
    )}
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
      starting_bid: starting_bid || 0,
    };
  },
  handleSubmit(values, { resetForm, props }) {
    console.log('values', values);
    props.editAuction({...values, auction_id: props.auctionId});
    resetForm();
  }
})(AddAuction);

export default FormikAddAuction;