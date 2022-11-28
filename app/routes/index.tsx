import { MainContentPadded } from "~/features/layout/AppLayout";
import { useEnvVars } from "~/toolkit/remix/useEnvVar";

export default function Index() {
  let config = useEnvVars();
  return (
    <MainContentPadded>
      <h1 className="text-secondary/90">I Need Your List!</h1>
    </MainContentPadded>
  );
}
