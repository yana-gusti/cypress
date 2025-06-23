import { UiControlClient } from 'askui';
import { AskUIAllureStepReporter } from '@askui/askui-reporters';

let aui: UiControlClient | null = null;
jest.setTimeout(60 * 1000 * 60);

export async function getAui(): Promise<UiControlClient> {
  if (!aui) {
    aui = await UiControlClient.build({
      credentials: {
        token: "O2y-SVbeGYgyioiStkSu",
        workspaceId: "5bcd557d-d742-4288-b5cd-424add1f66b5"
      },
      reporter: new AskUIAllureStepReporter(),
    });

    await aui.connect();
  }

  return aui;
}

export async function shutdownAui() {
  if (aui) {
    await aui.disconnect();
    aui = null;
  }
}

afterAll(async () => {
  await shutdownAui();
});
