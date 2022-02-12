import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import Menu from "../components/Menu"
import Sidebar from "../components/Sidebar"
import DropdownMenu from "../components/charts/DropdownMenu"
import { motion, AnimatePresence } from 'framer-motion';


const AuthenticatedComponent = ({ children }: any) => {
  const { isLoading, isAuthenticated, loginWithRedirect, user, logout }: any = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated]);


  if (isLoading || !user) {
    return null;
  }

  return (
    <>
      <Menu setMenuOpen={setMenuOpen} setDropdownMenuOpen={setDropdownMenuOpen} user={user} logout={logout} />
      <Sidebar logout={logout} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <DropdownMenu dropdownMenuOpen={dropdownMenuOpen} />
      <AnimatePresence>
        {menuOpen && <motion.div style={{ backdropFilter: "blur(8px)", background: "transparent" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-screen w-screen z-30 fixed top-0 left-0 right-0" />}
      </AnimatePresence>
      <div style={{ marginTop: 65 }}>
        {user.email.split("@")[1] === "ember.co" && user.email_verified ? (
          children
        ) : (
          <h3>
            Nope. You have to login with an Ember email to view this page.
          </h3>
        )}
      </div>
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }


  return <Auth0Provider
    domain="ember-auth.eu.auth0.com"
    clientId="emiStQFI7eV61U9udQ0ChvPgwv9ra7bz"
    redirectUri={window.location.origin}
  >
    <AuthenticatedComponent>
      <Component {...pageProps} />
    </AuthenticatedComponent>
  </Auth0Provider>
}

export default MyApp
