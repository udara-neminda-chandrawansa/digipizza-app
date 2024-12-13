function CustomerDash({uid, userType, email}){
    return(
        <div>
            Hi! Welcome {uid}!
            {userType}
            {email}
        </div>
    );
}

export default CustomerDash;