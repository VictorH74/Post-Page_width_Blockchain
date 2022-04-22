import List "mo:base/List";

actor PostPage {
  public type Comment = {
    id: Text;
    user: Text;
    content: Text;
    moment: Text;
    likes: Nat;
    isArtificial: Bool;
  };

  stable var comments: List.List<Comment> = List.nil<Comment>();

  public func newComment(idHash: Text, userName: Text, contentText:Text, momentData:Text, likesNumber:Nat, isArtificialCond:Bool){

    let comment: Comment = {
      id = idHash;
      user = userName;
      content = contentText;
      moment = momentData;
      likes = likesNumber;
      isArtificial = isArtificialCond;
    };

    comments := List.push(comment, comments);
  };

  public func deleteComment(id: Text){
    /*
    let provList: List.List<Comment> = List.take(comments, id);
    let provList2: List.List<Comment> = List.drop(comments, id + 1);
    comments := List.append(provList, provList2);
    */
    comments := List.filter<Comment>(comments, func get(comment: Comment) : Bool = comment.id != id );
  };

  public query func readComments() : async [Comment] {
    return List.toArray<Comment>(comments);
  };
}
