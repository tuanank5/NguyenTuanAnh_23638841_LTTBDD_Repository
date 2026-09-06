import { Bai05 } from "./Bai05";

export class Bai12 {
  private readonly taskSimulator: Bai05 = new Bai05();

  public async runSimulateTask(): Promise<string> {
    try {
      const result: string = await this.taskSimulator.simulateTask(2000);
      console.log(result);
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai12 error:", error.message);
      } else {
        console.error("Bai12 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<string> {
    return this.runSimulateTask();
  }
}

new Bai12().execute();
