import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainerDiv } from "./authentication.styles";


const Authentication = () => {
  return (
    <AuthenticationContainerDiv>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainerDiv>
  );
};

export default Authentication;
