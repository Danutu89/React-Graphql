export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type Query = {
  __typename?: 'Query';
  tags?: Maybe<TagNodeConnection>;
  likes?: Maybe<LikeNodeConnection>;
  users?: Maybe<UserNodeConnection>;
  /** The ID of the object */
  user?: Maybe<UserNode>;
  posts?: Maybe<PostNodeConnection>;
  _service?: Maybe<_Service>;
};


export type QueryTagsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_Icontains?: Maybe<Scalars['ID']>;
};


export type QueryLikesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_Icontains?: Maybe<Scalars['ID']>;
};


export type QueryUsersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  title_Icontains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_Icontains?: Maybe<Scalars['ID']>;
  tags_Id?: Maybe<Scalars['ID']>;
  tags_Id_Icontains?: Maybe<Scalars['ID']>;
};

export type TagNodeConnection = {
  __typename?: 'TagNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TagNodeEdge>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** A Relay edge containing a `TagNode` and its cursor. */
export type TagNodeEdge = {
  __typename?: 'TagNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TagNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TagNode = Node & {
  __typename?: 'TagNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  color: Scalars['String'];
  count: Scalars['Int'];
  createdOn: Scalars['DateTime'];
  updatedOn: Scalars['DateTime'];
  postSet: PostNodeConnection;
  createdOnTimestamp?: Maybe<Scalars['String']>;
  updatedOnTimestamp?: Maybe<Scalars['String']>;
};


export type TagNodePostSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  title_Icontains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_Icontains?: Maybe<Scalars['ID']>;
  tags_Id?: Maybe<Scalars['ID']>;
  tags_Id_Icontains?: Maybe<Scalars['ID']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type PostNodeConnection = {
  __typename?: 'PostNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PostNodeEdge>>;
};

/** A Relay edge containing a `PostNode` and its cursor. */
export type PostNodeEdge = {
  __typename?: 'PostNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PostNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PostNode = Node & {
  __typename?: 'PostNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  body: Scalars['String'];
  author: UserNode;
  createdOn: Scalars['DateTime'];
  updatedOn: Scalars['DateTime'];
  likes?: Maybe<PostLikeNodeConnection>;
  likesCount: Scalars['Int'];
  tags?: Maybe<TagNodeConnection>;
  tagsCount: Scalars['Int'];
  likeSet: PostLikeNodeConnection;
  createdOnTimestamp?: Maybe<Scalars['String']>;
  updatedOnTimestamp?: Maybe<Scalars['String']>;
};


export type PostNodeLikesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['ID']>;
};


export type PostNodeTagsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_Icontains?: Maybe<Scalars['ID']>;
};


export type PostNodeLikeSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['ID']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  email: Scalars['String'];
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  isSuperuser: Scalars['Boolean'];
  createdOn: Scalars['DateTime'];
  updatedOn: Scalars['DateTime'];
  postSet: PostNodeConnection;
  likeSet: PostLikeNodeConnection;
  fullName?: Maybe<Scalars['String']>;
  createdOnTimestamp?: Maybe<Scalars['String']>;
  updatedOnTimestamp?: Maybe<Scalars['String']>;
};


export type UserNodePostSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  title_Icontains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_Icontains?: Maybe<Scalars['ID']>;
  tags_Id?: Maybe<Scalars['ID']>;
  tags_Id_Icontains?: Maybe<Scalars['ID']>;
};


export type UserNodeLikeSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['ID']>;
};

export type PostLikeNodeConnection = {
  __typename?: 'PostLikeNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PostLikeNodeEdge>>;
};

/** A Relay edge containing a `PostLikeNode` and its cursor. */
export type PostLikeNodeEdge = {
  __typename?: 'PostLikeNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PostLikeNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PostLikeNode = Node & {
  __typename?: 'PostLikeNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  author: UserNode;
  type: LikeNode;
  post: PostNode;
  createdOn: Scalars['DateTime'];
  createdOnTimestamp?: Maybe<Scalars['String']>;
};

export type LikeNode = Node & {
  __typename?: 'LikeNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  icon: Scalars['String'];
  createdOn: Scalars['DateTime'];
  updatedOn: Scalars['DateTime'];
  postSet: PostNodeConnection;
  likeSet: PostLikeNodeConnection;
  createdOnTimestamp?: Maybe<Scalars['String']>;
  updatedOnTimestamp?: Maybe<Scalars['String']>;
};


export type LikeNodePostSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  title_Icontains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_Icontains?: Maybe<Scalars['ID']>;
  tags_Id?: Maybe<Scalars['ID']>;
  tags_Id_Icontains?: Maybe<Scalars['ID']>;
};


export type LikeNodeLikeSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['ID']>;
};

export type LikeNodeConnection = {
  __typename?: 'LikeNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LikeNodeEdge>>;
};

/** A Relay edge containing a `LikeNode` and its cursor. */
export type LikeNodeEdge = {
  __typename?: 'LikeNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<LikeNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  revokeToken?: Maybe<Revoke>;
  deleteTokenCookie?: Maybe<DeleteJsonWebTokenCookie>;
  deleteRefreshTokenCookie?: Maybe<DeleteRefreshTokenCookie>;
  addTag?: Maybe<AddTagMutationPayload>;
  addLikeType?: Maybe<AddLikeTypeMutationPayload>;
  removeLikeType?: Maybe<RemoveLikeTypeMutationPayload>;
  /** The ID of the object */
  likes?: Maybe<LikeNode>;
  updateUser?: Maybe<UpdateUserMutationPayload>;
  updatePost?: Maybe<UpdatePostMutationPayload>;
  addPost?: Maybe<AddPostMutationPayload>;
  addPostLike?: Maybe<PostLikeMutationPayload>;
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationRevokeTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationAddTagArgs = {
  input: AddTagMutationInput;
};


export type MutationAddLikeTypeArgs = {
  input: AddLikeTypeMutationInput;
};


export type MutationRemoveLikeTypeArgs = {
  input: RemoveLikeTypeMutationInput;
};


export type MutationLikesArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserMutationInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostMutationInput;
};


export type MutationAddPostArgs = {
  input: AddPostMutationInput;
};


export type MutationAddPostLikeArgs = {
  input: PostLikeMutationInput;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};


export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Revoke = {
  __typename?: 'Revoke';
  revoked: Scalars['Int'];
};

export type DeleteJsonWebTokenCookie = {
  __typename?: 'DeleteJSONWebTokenCookie';
  deleted: Scalars['Boolean'];
};

export type DeleteRefreshTokenCookie = {
  __typename?: 'DeleteRefreshTokenCookie';
  deleted: Scalars['Boolean'];
};

export type AddTagMutationPayload = {
  __typename?: 'AddTagMutationPayload';
  tag?: Maybe<TagNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddTagMutationInput = {
  tagData: AddTagInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddTagInput = {
  name: Scalars['String'];
  color?: Maybe<Scalars['String']>;
};

export type AddLikeTypeMutationPayload = {
  __typename?: 'AddLikeTypeMutationPayload';
  like?: Maybe<LikeNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddLikeTypeMutationInput = {
  likeData: AddLikeTypeInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddLikeTypeInput = {
  name: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
};

export type RemoveLikeTypeMutationPayload = {
  __typename?: 'RemoveLikeTypeMutationPayload';
  message?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveLikeTypeMutationInput = {
  likeData: RemoveLikeTypeInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveLikeTypeInput = {
  id?: Maybe<Scalars['ID']>;
};

export type UpdateUserMutationPayload = {
  __typename?: 'UpdateUserMutationPayload';
  user?: Maybe<UserNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserMutationInput = {
  userData: UpdateUserInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type UpdatePostMutationPayload = {
  __typename?: 'UpdatePostMutationPayload';
  post?: Maybe<PostNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePostMutationInput = {
  postData: UpdatePostInput;
  tagsList?: Maybe<Array<Maybe<Scalars['ID']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePostInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type AddPostMutationPayload = {
  __typename?: 'AddPostMutationPayload';
  post?: Maybe<PostNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPostMutationInput = {
  postData: AddPostInput;
  tagsList: Array<Maybe<Scalars['ID']>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type PostLikeMutationPayload = {
  __typename?: 'PostLikeMutationPayload';
  message?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  count?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type PostLikeMutationInput = {
  likeData: AddPostLikeInput;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddPostLikeInput = {
  postId: Scalars['ID'];
  likeId: Scalars['ID'];
};

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<(
    { __typename?: 'PostNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PostNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'PostNode' }
        & Pick<PostNode, 'id' | 'title' | 'body' | 'createdOn'>
        & { author: (
          { __typename?: 'UserNode' }
          & Pick<UserNode, 'fullName'>
        ) }
      )> }
    )>> }
  )> }
);
