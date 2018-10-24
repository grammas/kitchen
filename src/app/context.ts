import { Stitch } from 'mongodb-stitch-browser-sdk';

const AppContext = (clientAppId: string) => Stitch.initializeDefaultAppClient(clientAppId);
interface AppContext extends ReturnType<typeof AppContext> {}

export default AppContext;
