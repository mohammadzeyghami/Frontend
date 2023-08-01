import { useEffect, useRef, useState } from "react";

const Register = () => {
  const useRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validation, setValidation] = useState(false);
  const [userFocous, setUserFocous] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocous, setPwdFocous] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    useRef.current.focous();
  }, []);
  return <div>Register</div>;
};

export default Register;
