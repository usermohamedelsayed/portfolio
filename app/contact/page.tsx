import { Metadata } from "next";
import Contact from "./Contact";
export const metadata: Metadata = {
  title: "Contact | Mohammed Elsayed",
  description: "Mohammed elsayed frontend developer",
};
function Page() {
  return <Contact />;
}

export default Page;
