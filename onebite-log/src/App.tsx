import RoteRoute from "@/root-route";
import SessionProvider from "./provider/session-provider";

export default function App() {
  return (
    <SessionProvider>
      <RoteRoute />
    </SessionProvider>
  );
}
