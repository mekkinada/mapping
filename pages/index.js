import dynamic from "next/dynamic";
import Layout from "../component/doc-layout/Layout";
import InfoButton from "../component/app-inforamtion/InfoButton";
import Loader from "../component/doc-loader/Loader";

const Map = dynamic(() => import("../component/doc-map/Map"), {
  loading: () => <Loader message="" />,
  ssr: false
});

export default function IndexPage() {
  return (
    <Layout>
      <Map />
      <InfoButton />
    </Layout>
  );
}
