import { Box, Modal } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street Address is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "Pincode must be 6 digits"),
  city: Yup.string().required("City is required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 4,
};

const NewAddress = ({ open, handleClose }) => {
  const location = useLocation();

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted:", values);
    resetForm();
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="streetAddress"
                  as={TextField}
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("streetAddress")}
                  helperText={
                    <ErrorMessage name="streetAddress">
                      {(msg) => <span className="text-red-600">{msg}</span>}
                    </ErrorMessage>
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="state"
                  as={TextField}
                  label="State"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("state")}
                  helperText={
                    <ErrorMessage name="state">
                      {(msg) => <span className="text-red-600">{msg}</span>}
                    </ErrorMessage>
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="pincode"
                  as={TextField}
                  label="Pincode"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("pincode")}
                  helperText={
                    <ErrorMessage name="pincode">
                      {(msg) => <span className="text-red-600">{msg}</span>}
                    </ErrorMessage>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="city"
                  as={TextField}
                  label="City"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("city")}
                  helperText={
                    <ErrorMessage name="city">
                      {(msg) => <span className="text-red-600">{msg}</span>}
                    </ErrorMessage>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Deliver Here
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
};

export default NewAddress;
