import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
}

export interface Article {
    id: Scalars['ID']
    title: Scalars['String']
    url: Scalars['String']
    __typename: 'Article'
}

export interface Card {
    boardID: Scalars['String']
    columnID: Scalars['String']
    id: Scalars['ID']
    title: Scalars['String']
    userID: Scalars['String']
    __typename: 'Card'
}

export interface Mutation {
    createArticle: Article
    createCard: Card
    __typename: 'Mutation'
}

export interface Query {
    article: Article
    articles: Article[]
    card: Card
    __typename: 'Query'
}

export interface ArticleRequest{
    id?: boolean | number
    title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CardRequest{
    boardID?: boolean | number
    columnID?: boolean | number
    id?: boolean | number
    title?: boolean | number
    userID?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    createArticle?: [{title: Scalars['String'],url: Scalars['String']},ArticleRequest]
    createCard?: [{title: Scalars['String']},CardRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    article?: [{articleID: Scalars['String']},ArticleRequest]
    articles?: ArticleRequest
    card?: [{cardID: Scalars['String']},CardRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Article_possibleTypes: string[] = ['Article']
export const isArticle = (obj?: { __typename?: any } | null): obj is Article => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isArticle"')
  return Article_possibleTypes.includes(obj.__typename)
}



const Card_possibleTypes: string[] = ['Card']
export const isCard = (obj?: { __typename?: any } | null): obj is Card => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCard"')
  return Card_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}


export interface ArticlePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ArticleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface CardPromiseChain{
    boardID: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    columnID: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    userID: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface CardObservableChain{
    boardID: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    columnID: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    userID: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface MutationPromiseChain{
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>}),
    createCard: ((args: {title: Scalars['String']}) => CardPromiseChain & {get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>) => Promise<FieldsSelection<Card, R>>})
}

export interface MutationObservableChain{
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>}),
    createCard: ((args: {title: Scalars['String']}) => CardObservableChain & {get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>) => Observable<FieldsSelection<Card, R>>})
}

export interface QueryPromiseChain{
    article: ((args: {articleID: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>}),
    articles: ({get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>[]) => Promise<FieldsSelection<Article, R>[]>}),
    card: ((args: {cardID: Scalars['String']}) => CardPromiseChain & {get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>) => Promise<FieldsSelection<Card, R>>})
}

export interface QueryObservableChain{
    article: ((args: {articleID: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>}),
    articles: ({get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>[]) => Observable<FieldsSelection<Article, R>[]>}),
    card: ((args: {cardID: Scalars['String']}) => CardObservableChain & {get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>) => Observable<FieldsSelection<Card, R>>})
}