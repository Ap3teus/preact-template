import { ParameterizedContext } from 'koa';
import HelloworldService from '../services/helloworld.service';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ApplicationState {}

export type ApplicationContext = ParameterizedContext<ApplicationState>;
