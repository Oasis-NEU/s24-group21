import { supabase } from './supabase';
import React, { useState, useEffect, FunctionComponent } from "react";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Session } from "@supabase/gotrue-js/src/lib/types"
import PartnerForm from './partnerForm';

const Register: FunctionComponent = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log(session);
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]}/>)
  } else {
    return (<PartnerForm user = {session.user}/>)
  }
}

export default Register;