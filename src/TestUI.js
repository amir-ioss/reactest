import React, { useState, useEffect } from "react";
// import socketIOClient from 'socket.io-client'
import Form from "./comps/Form";

var config = {
  required: true,
};
var description =
  "In CodePen, whatever you write in the HTML editor is what goes within the days";
const options = [
  { title: "India", value: "india", description },
  { title: "Africa", value: "africa", description },
  { title: "Other", value: "other", description },
];

var data = [
  {
    id: "name",
    name: "name",
    validate: (field, ctx) => {
      // console.log('CUSTOM VALIDATING....', field, ctx.getField('email'))
      if (field.value == "testname") {
        return "testname is not valid name";
      }
    },
    value: "",
    style:{
        backgroundColor:'red'
    }
  },
];

export default function TestUI() {
  return (
    <div>
      <Form data={data} />
    </div>
  );
}
