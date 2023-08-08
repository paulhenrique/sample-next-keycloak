"use client";
import MainApp from "@/components/MainApp";
import { useKeycloak } from "@react-keycloak/web";
import Link from "next/link";

const App = () => {
  const {
    keycloak: { tokenParsed },
  } = useKeycloak();

  return (
    <>
      <MainApp />
      <Link href="/settings">Configurações</Link>
      <pre>
        {JSON.stringify(
          {
            tokenParsed,
          },
          null,
          2
        )}
      </pre>
    </>
  );
};

export default App;
