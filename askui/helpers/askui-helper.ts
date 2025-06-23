import { UiControlClient } from 'askui';
import { AskUIAllureStepReporter } from '@askui/askui-reporters';

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  aui = await UiControlClient.build({
    credentials: {
      token: "O2y-SVbeGYgyioiStkSu",
      workspaceId: "5bcd557d-d742-4288-b5cd-424add1f66b5"
    },
    reporter: new AskUIAllureStepReporter(),
  });

  await aui.connect();
});

beforeEach(async () => {
  /* Uncomment to enable video recording
  await aui.startVideoRecording();
  */
});

afterEach(async () => {
  /* Uncomment to enable video recording
  await aui.stopVideoRecording();
  const video = await aui.readVideoRecording();
  await AskUIAllureStepReporter.attachVideo(video);
  */
});

afterAll(async () => {
  aui.disconnect();
});

export { aui };
