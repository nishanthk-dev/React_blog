import { useSelector } from "react-redux";

const Contact = () => {
  const userlogin = useSelector((state) => state.user.currentUser);
  console.log(userlogin);
  return <div>Contact</div>;
};

export default Contact;
