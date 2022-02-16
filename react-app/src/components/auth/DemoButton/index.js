import { useDispatch } from "react-redux";
import { login } from '../../../store/session'
import './DemoButton.css';

function DemoButton() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        const email = 'demouser@aa.io';
        const password = 'password';
        return dispatch(login(email, password)).catch(
            async (res) => {
                await res.json();
            }
        )
    }

    return (
        <button className='demo-button' onClick={handleClick}>
            Demo as Guest
        </button>
    )
}

export default DemoButton;
