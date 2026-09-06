import { Bai05 } from "./Bai05";

export class Bai28 {
  private readonly taskSimulator: Bai05 = new Bai05();

  public async batchProcess(delays: number[] = [500, 700, 900, 1100, 1300]): Promise<string[]> {
    try {
      const tasks: Array<Promise<string>> = delays.map((delay: number, index: number) =>
        this.taskSimulator.simulateTask(delay).then((result: string) => {
          const labeled: string = `Task ${index + 1}: ${result}`;
          console.log(labeled);
          return labeled;
        })
      );
      const results: string[] = await Promise.all(tasks);
      console.log("batchProcess complete:", results);
      return results;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai28 error:", error.message);
      } else {
        console.error("Bai28 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<string[]> {
    return this.batchProcess();
  }
}

new Bai28().execute();
