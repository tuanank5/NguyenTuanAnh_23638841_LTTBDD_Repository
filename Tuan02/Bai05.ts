export class Bai05 {
  public simulateTask(time: number): Promise<string> {
    return new Promise<string>((resolve: (value: string) => void) => {
      setTimeout(() => {
        resolve("Task done");
      }, time);
    });
  }

  public async execute(time: number = 1000): Promise<string> {
    const result: string = await this.simulateTask(time);
    console.log(result);
    return result;
  }
}

new Bai05().execute();