import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
const Dashboard: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Main />
      </Box>

      <Footer />
    </Box>
  );
};

export default Dashboard;
