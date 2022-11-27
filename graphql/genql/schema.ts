import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
}

export interface Card {
    id: Scalars['ID']
    title: Scalars['String']
    __typename: 'Card'
}

export interface Mutation {
    createCard: Card
    __typename: 'Mutation'
}

export interface Query {
    card: Card
    cards: Card[]
    __typename: 'Query'
}

export interface CardRequest{
    id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    createCard?: [{title: Scalars['String']},CardRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    card?: [{cardID: Scalars['String']},CardRequest]
    cards?: CardRequest
    __typename?: boolean | number
    __scalar?: boolean | number
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


export interface CardPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface CardObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface MutationPromiseChain{
    createCard: ((args: {title: Scalars['String']}) => CardPromiseChain & {get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>) => Promise<FieldsSelection<Card, R>>})
}

export interface MutationObservableChain{
    createCard: ((args: {title: Scalars['String']}) => CardObservableChain & {get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>) => Observable<FieldsSelection<Card, R>>})
}

export interface QueryPromiseChain{
    card: ((args: {cardID: Scalars['String']}) => CardPromiseChain & {get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>) => Promise<FieldsSelection<Card, R>>}),
    cards: ({get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>[]) => Promise<FieldsSelection<Card, R>[]>})
}

export interface QueryObservableChain{
    card: ((args: {cardID: Scalars['String']}) => CardObservableChain & {get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>) => Observable<FieldsSelection<Card, R>>}),
    cards: ({get: <R extends CardRequest>(request: R, defaultValue?: FieldsSelection<Card, R>[]) => Observable<FieldsSelection<Card, R>[]>})
}