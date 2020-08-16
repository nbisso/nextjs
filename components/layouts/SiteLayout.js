import Link from "next/link";
import Header from "../Header";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "../ui/Typography";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1170px;
`;
const SiteLayout = ({ children }) => (
  <div className="bg-white antialiased">
    <div>
      <div>
        <Header />

        <div className="max-w-xl mx-auto px-8">
          <nav>
            <Toolbar>
              <Typography>
                <Link href="/login">
                  <a className="ml-8 font-medium text-gray-900">Login</a>
                </Link>
              </Typography>
              <Typography>
                <Link href="/">
                  <a className="ml-8 font-medium text-gray-900">Home</a>
                </Link>
              </Typography>

              <Typography>
                <Link href="/feed">
                  <a className="ml-8 font-medium text-gray-900">Feed </a>
                </Link>
              </Typography>

              <Typography>
                <Link href="/about">
                  <a className="ml-8 font-medium text-gray-900">About</a>
                </Link>
              </Typography>
            </Toolbar>
            <div className="py-4 flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src="/logo.svg" alt="" />
            </div>
          </nav>
        </div>
      </div>
    </div>
    <Container>{children}</Container>
  </div>
);

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
