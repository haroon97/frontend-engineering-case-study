import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { UserDetailsContext } from "../../context/user-details.context";

export const UserDetails = () => {
  const theme = useTheme();
  const params = useParams();

  const { users } = useContext(UserDetailsContext);

  const user = useRef(localStorage.getItem("userDetails") || "");

  useEffect(() => {
    const selectedUser = users.find((user) => user.login.uuid === params.id);
    if (selectedUser) {
      localStorage.setItem("user", JSON.stringify(selectedUser));
    }
  }, [params.id, users]);

  const { email, location, dob } = JSON.parse(user.current);

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      height="100vh"
      overflow="hidden"
    >
      <Header />
      <Box
        bgcolor={theme.colors.surfaceBasic}
        borderRadius={3}
        marginX={3}
        my={2}
      >
        <Box ml={3} my={2} height="100%">
          <Typography variant="h5" color="primary.dark">
            User Details
          </Typography>
          <Box display="flex" flexDirection="column" mt={3}>
            <Typography
              variant="bodyMediumBold"
              color={theme.colors.highEmphasis}
            >
              Email
            </Typography>
            <Typography variant="bodyMedium" color={theme.colors.highEmphasis}>
              {email}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" mt={3}>
            <Typography
              variant="bodyMediumBold"
              color={theme.colors.highEmphasis}
            >
              Country
            </Typography>
            <Typography variant="bodyMedium" color={theme.colors.highEmphasis}>
              {location.country}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" mt={3}>
            <Typography
              variant="bodyMediumBold"
              color={theme.colors.highEmphasis}
            >
              Address
            </Typography>
            <Typography variant="bodyMedium" color={theme.colors.highEmphasis}>
              {`${location.street.number}, ${location.street.name}`}
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" mt={3}>
            <Typography
              variant="bodyMediumBold"
              color={theme.colors.highEmphasis}
            >
              Date of birth / Age
            </Typography>
            <Typography variant="bodyMedium" color={theme.colors.highEmphasis}>
              {`${new Date(dob.date).toDateString()} / ${dob.age}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
