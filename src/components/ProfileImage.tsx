 type profileNameType={
  profileName :string
  }
 const ProfileImage = ({profileName}:profileNameType)=> {
    
  const nameParts:string[] = profileName?.split(" ");
  console.log(nameParts);
    const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
    const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";
    console.log(firstNameInitial);
    console.log(lastNameInitial);
  
    return (
      <div className="flex justify-center items-center w-6 h-6 bg-indigo-700 text-white text-sm rounded-full lett">
        {firstNameInitial}
        {lastNameInitial}
      </div>
    );
}

export default ProfileImage