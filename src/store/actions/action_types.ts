import { AnyActionCoordinator } from './coordinator';

export type ActionType<COORDINATOR extends AnyActionCoordinator> = ReturnType<COORDINATOR['creator']['action']>;
export type ActionTypes<ACTIONS extends { [key: string]: AnyActionCoordinator }> = ActionType<ACTIONS[keyof ACTIONS]>;
