import type { Principal } from '@dfinity/principal';
export interface Comment {
  'id' : string,
  'isArtificial' : boolean,
  'content' : string,
  'user' : string,
  'likes' : bigint,
  'moment' : string,
}
export interface _SERVICE {
  'deleteComment' : (arg_0: string) => Promise<undefined>,
  'newComment' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: bigint,
      arg_5: boolean,
    ) => Promise<undefined>,
  'readComments' : () => Promise<Array<Comment>>,
}
