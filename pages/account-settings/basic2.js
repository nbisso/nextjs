import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";
import { getLayout } from "../../components/AccountSettingsLayout";

const AccountSettingsBasicInformation2 = () => (
  <div>
    <div className="pt-6 pb-8 sm:pt-8">
      <p className="text-sm text-gray-700">
        Set your login preferences, help us personalize your experience and make
        big account changes here.
      </p>
    </div>
    <div className="border-t-2 border-gray-200 px-0 py-5 flex justify-end">
      <button
        type="button"
        className="px-4 py-3 leading-none font-semibold rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
      >
        Cancel
      </button>
      <button
        type="button"
        className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
      >
        Save
      </button>
    </div>
  </div>
);

AccountSettingsBasicInformation2.getLayout = getLayout;

export default AccountSettingsBasicInformation2;
