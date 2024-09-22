import React from "react";
import { useTheme } from "../context/themeContext";
import { useForm } from "react-hook-form";
import { addAddress } from "../apiCalls/apiCalls";
import { useAuth } from "../context/userContext";

export default function AddAddress() {
  const { theme } = useTheme();
  const { register, handleSubmit, reset } = useForm();
  const { user, saveUser } = useAuth();

  const onSubmit = async (data) => {
    try {
      const resp = await addAddress(data, user.data.email);
      saveUser(resp);
      reset({
        addressName: "",
        address: "",
        addressCity: "",
        addressState: "",
        addressZipCode: "",
      });
      alert("Address added successfully");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div style={styles.container}>
      <div>
        <h1 style={{ color: theme.text }}>Location</h1>
        <p style={{ color: theme.text, opacity: "0.8" }}>Add your location</p>
      </div>
      <div style={{ height: "auto" }}>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={{ color: theme.text, opacity: "0.9" }}>Name of Location</label>
            <input {...register("addressName")} style={styles.input(theme)} />
          </div>
          <div style={styles.inputGroup}>
            <label style={{ color: theme.text, opacity: "0.9" }}>Address</label>
            <input {...register("address")} style={styles.input(theme)} />
          </div>
          <div style={styles.inputGroup}>
            <label style={{ color: theme.text, opacity: "0.9" }}>State</label>
            <input {...register("addressState")} style={styles.input(theme)} />
          </div>
          <div style={styles.flexRow}>
            <div style={styles.inputGroup}>
              <label style={{ color: theme.text, opacity: "0.9" }}>City</label>
              <input {...register("addressCity")} style={styles.smallInput(theme)} />
            </div>
            <div style={styles.inputGroup}>
              <label style={{ color: theme.text, opacity: "0.9" }}>Zip Code</label>
              <input {...register("addressZipCode")} style={styles.smallInput(theme)} />
            </div>
          </div>
          <div>
            <input type="submit" value="Submit" style={styles.submitButton(theme)} />
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    padding: "20px",
    margin: "auto auto",
    background: "#2E3B4E", // Darker background
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: (theme) => ({
    color: '#424056',
    outline: "none",
    border: "1px solid #6C757D", // Gray border
    height: "40px",
    width: "100%",
    background: "#e0e0e0", // Lighter gray
    borderRadius: "8px",
    paddingInline: "10px",
    transition: "border-color 0.3s",
    ':focus': {
      borderColor: theme.buttonColor, // Highlight border on focus
    },
  }),
  smallInput: (theme) => ({
    color: '#424056',
    outline: "none",
    border: "1px solid #6C757D",
    height: "40px",
    width: "100%",
    background: "#e0e0e0",
    borderRadius: "8px",
    paddingInline: "10px",
  }),
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "10px",
    flexWrap: "wrap",
  },
  submitButton: (theme) => ({
    backgroundColor: theme.buttonColor,
    color: theme.buttonText,
    outline: "none",
    border: "none",
    height: "40px",
    width: "100%",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background-color 0.3s",
    ':hover': {
      backgroundColor: theme.buttonHoverColor, // Darker shade on hover
    },
  }),
};
