import React, {useState} from "react";
import { Field, FieldArray } from "formik";

function AddItemForm({values}) {
  const [showItemForm, setShowItemForm] = useState(false);

  if(!showItemForm){return(
    <button onClick={() => setShowItemForm(true)}>Add Items</button>
  )}

  return (
    <>
    <h5>Add Items to Auction</h5>
      <FieldArray
            name="items"
            render={arrayHelpers => (
              <div>
                {values.items && values.items.length > 0 ? (
                  values.items.map((item, index) => (
                    <div key={index}>
                      <div>
                        <Field name={`items.${index}`} placeholder="Item" />
                      </div>
                      <div>
                        <Field name="initialprice" type="text" placeholder="Initial Price"/>
                      </div>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')}
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add an Item
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
    </>
  );
}

export default AddItemForm;