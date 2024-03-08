import { UserObj } from "./types";
import blueCheck from "./blue_check.png";

interface UserProps {
    user: UserObj
    select: any
  }

const UserCard = ({user, select}: UserProps) => {
    return(
        <div className = "card message">
            <div className = "card-body">
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <h3>Compatability Score: {user.score}</h3>
                <button onClick={() => select(user)}>
                    <img
                        src={blueCheck}
                        style={{ width: '20px', height: '20px' }}
                    />
                </button>
            </div>
        </div>
    )
}
export default UserCard;