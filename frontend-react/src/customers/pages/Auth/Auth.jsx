import { Alert, Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RegistrationForm from "../../components/Register/Register";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/Login/Login";
import ResetPasswordRequest from "./ResetPaswordRequest";
import { useDispatch, useSelector } from "react-redux";
import ResetPasswordForm from "./ResetPasswordForm";
import { resetPassword } from "../../../State/Authentication/Action";

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

const Auth = ({ open, handleClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const [openSnackBar,setOpenSnackBar]=useState(false);

useEffect(()=>{
if(auth.success || auth.error)setOpenSnackBar(true)
},[auth.success, auth.error])

const handleCloseSnackBar=()=>{
  setOpenSnackBar(false)
}

  return (
    <>
      <Modal
        open={
          location.pathname === "/account/register" ||
          location.pathname === "/account/login" ||
          location.pathname === "/account/reset-password-request" ||
          location.pathname === "/account/reset-password"
        }
        onClose={handleClose}
      >
        <Box sx={style}>
          {location.pathname === "/account/register" ? (
            <RegistrationForm />
          ) : location.pathname === "/account/login" ? (
            <LoginForm />
          ) : location.pathname === "/account/reset-password" ? <ResetPasswordForm/>: (
            <ResetPasswordRequest />
          )}
          <div className="flex justify-center mt-5">
            {location.pathname === "/account/reset-password-request" || location.pathname === "/account/reset-password"  ? (
              <Button onClick={() => navigate("/account/login")}>
                Go Back To Login
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/account/reset-password-request")}
              >
                Forgot Pasword
              </Button>
            )}
            <Snackbar
              sx={{ zIndex: 50 }}
              open={openSnackBar}
              autoHideDuration={3000}
              onClose={handleCloseSnackBar}
              // handleClose={handleCloseSnackBar}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert severity={auth.error?"error":"success"} sx={{ width: "100%" }}>
                {auth.success || auth.error}
              </Alert>
            </Snackbar>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Auth;
