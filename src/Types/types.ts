
declare type postedContentsDataType= {
  owner: string;
  titleDescription: string;
  image: string[] 
  reactions: {
      like: number;
      unliked: number;
      hot: number;
      cry: number;
      laugh: number;
  };
  comment: number;
  share: number;
  postedTime?: Date;
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
declare type freindsType= {
  name: string;
  profile: string;
}
declare type eventsType= {
  event: string;
  place: string;
  time: string;
}
declare type menuLinksType={
  title: string;
  to: string;
  icon: JSX.Element;
}
declare  type profileNameType={
  profileName :string
  }