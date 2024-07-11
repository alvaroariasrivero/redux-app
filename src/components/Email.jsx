import { useSelector, useDispatch } from "react-redux";
import { changeEmail } from "../redux/userSlice";

const Email = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        const newData = {
            name: e.target.elements.firstname.value,
            username: e.target.elements.username.value,
            email: e.target.elements.useremail.value
        }
        dispatch(changeEmail(newData));
    }

    return (
        <form onSubmit={handleChange}>
            <input type="text" defaultValue={user.name} placeholder="Email" name="firstname" />
            <input type="email" defaultValue={user.email} placeholder="Email" name="useremail"/>
            <input type="text" defaultValue={user.username} placeholder="Username" name="username"/>
            <input type="submit" value="Send changes" />
        </form>
    )
};

export default Email;