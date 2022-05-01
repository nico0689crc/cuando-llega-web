import Typography from "@mui/material/Typography";

const Title = ({ children, ...props }) => {
  return (
    <Typography align="center" variant="h4" gutterBottom={true} sx={{ padding: "0.5em 0" }}>
      {children}
    </Typography>
  );
};

export default Title;
