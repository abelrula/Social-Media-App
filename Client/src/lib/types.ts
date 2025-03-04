
declare type postedContentsDataType= {
    owner: string;
    titleDescription: string;
    image: string[];
    reactions: {
        like: number;
        unliked: number;
        hot: number;
        cry: number;
        laugh: number;
    };
    comments: {
        owner: string;
        profileImg: string;
        comment: string;
    }[];
    share: number;
    postedTime: Date;
    commentes?: undefined;
}

// declare type imagesPostedByTheOwner = {
//   titleDescription: string,
//   image: string[];
//     reactions: {
//         hate: number;
//         love: number;
//     };
//     comments: {
//         owner: string;
//         profileImg: string;
//         comment: string;
//     }[];
// }
declare type groupData= {
    groupName: string;
    ProfileImg: string;
    CoverImg: string;
  unseenTopics: number;
  followers: number;
    posetdContents: {
        owner: string;
        titleDescription: string;
        image: string[];
        reactions: {
            like: number;
            unliked: number;
            hot: number;
            cry: number;
            laugh: number;
        };
        comments: {
            owner: string;
       profileImg: string;
      comment: string;
        }[];
        share: number;
        postedTime: Date;
    }[];
}
declare type groupType = {
   to?:string;
   name: string;
   unseenTopics:number; 
   img: string;
   }
  declare type  onlineContactsType= {
  name: string;
  profile: string;
}
declare type SuggestedGroupsType= {
  id: number,
  owner: string;
  image: string;
   joined:boolean
 }
declare type menuLinksType={
  title: string;
  to: string;
  icon: JSX.Element;
}
declare  type profileNameType={
  profileName :string
}
  declare type friendsType ={
    id: number,
       name: string
       profile:string;
     mutualFriendes: number;
} 
declare type postedPhoto = {
  image: string,
  reactions: {
    hate: number,
    love: number
  }
}
declare type commentType= {
        owner: string;
        profileImg: string;
        comment: string;
}
declare type storiesType = {
  owner: string;
    ProfileImage: string;
    image: string;
    reactions: {
        hate: number;
        love: number;
    };
}
declare type MessageConvoType= {
  id: number,
  name: string,
  profile: string,
  message:{
    sender:string|number,
    reciever: string | number
  }[]
}
declare type postedContenetsByFriendsType = {
      id: number;
    name: string;
    profile: string;
    postedContents: {
         titleDescription: string;
        image: string[] | string;
        reactions: {
            like: number;
            unliked: number;
            hot: number;
            cry: number;
            laugh: number;
        };
        comment: number;
        share: number;
        postedTime: Date;
    }[];
 }
  declare type reactionsType={
    fire: number;
    dislike: number;
    love: number;
    cry: number;
    like: number;
}
