import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { Text } from "@gnosis.pm/safe-react-components"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  border: {
    borderBottom: "2px solid lightgray",
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  }
}));

interface IProps {
  label: string
}

export const DividerWithText: FC<IProps> = ({ label }) => {
 const classes = useStyles();
 return (
  <div className={classes.container}>
    <div className={classes.border} />
    <Text size="md" className={classes.content} color="secondaryLight">{label}</Text>
    <div className={classes.border} />
  </div>
 );
};
