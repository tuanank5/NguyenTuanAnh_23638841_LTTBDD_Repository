export class Bai01 {
  public createHelloAsync(): Promise<string> {
    return new Promise<string>((resolve: (value: string) => void) => {
      setTimeout(() => {
        resolve("Hello Async");
      }, 2000);
    });
  }

  public async execute(): Promise<string> {
    const result: string = await this.createHelloAsync();
    console.log(result);
    return result;
  }
}

new Bai01().execute();