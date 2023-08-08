"use client";
import { useKeycloak } from "@react-keycloak/web";
import Link from "next/link";
import React from "react";

const Page = () => {
  const {
    keycloak: { tokenParsed },
  } = useKeycloak();

  return (
    <div>
      <p>Settings</p>
      <p>
        Dados do usuário:
        <pre>
          {JSON.stringify(
            {
              tokenParsed,
            },
            null,
            2
          )}
        </pre>
      </p>
      <Link href="/">Ir para o início</Link>
    </div>
  );
};

export default Page;
