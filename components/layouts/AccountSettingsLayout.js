import Link from "next/link";
import { getLayout as getSiteLayout } from "./SiteLayout";
import { useRouter } from "next/router";
import ActiveLink from "../ActiveLink";
const AccountSettingsLayout = ({ children }) => {
  return (
    <div className="max-w-xl mx-auto px-8">
      <h1 className="text-2xl text-gray-900 font-semibold">Account Settings</h1>

      <div
        className="mt-6 flex overflow-x-auto scrollbar-none"
        style={{ boxShadow: "inset 0 -2px 0 #edf2f7" }}
      >
        <ActiveLink href="/account-settings/basic">
          Basic Information
        </ActiveLink>
        <ActiveLink href="/account-settings/basic2">
          Basic Information 2
        </ActiveLink>
      </div>

      <div>{children}</div>
    </div>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<AccountSettingsLayout>{page}</AccountSettingsLayout>);

export default AccountSettingsLayout;
