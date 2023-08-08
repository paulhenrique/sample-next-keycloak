"use client";
import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
export const keycloak = new Keycloak("keycloak.json");

export { AuthProvider } from "@/config/auth/AuthProvider";
export default keycloak;
