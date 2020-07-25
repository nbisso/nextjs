const CleanLayout = ({ children }) => (
  <div className="bg-white antialiased">
    <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>
  </div>
);
export const getLayout = (page) => <CleanLayout>{page}</CleanLayout>;

export default CleanLayout;
