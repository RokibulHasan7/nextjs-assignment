import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#FFFFFF",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop: 10,
    textAlign: "Center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#FFFFFF",
    textTransform: "initial",
  },
  transparentBackground: {
    backgroundColor: "transparent",
    marginTop: 20,
  },
  error: {
    color: "#f04040",
  },
  fullWidth: {
    width: "100%",
  },
  user: {
    backgroundColor: "#203040",
    color: "#FFFFFF",
    textDecoration: "underline",
  },
  link: {
    textDecoration: "underline",
  },
});

export default useStyles;
