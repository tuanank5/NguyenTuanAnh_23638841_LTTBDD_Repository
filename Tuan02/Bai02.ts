export class Bai02 {
  public getNumberTen(): Promise<number> {
    return new Promise<number>((resolve: (value: number) => void) => {
      setTimeout(() => {
        resolve(10);
      }, 1000);
    });
  }

  public async execute(): Promise<number> {
    const result: number = await this.getNumberTen();
    console.log(result);
    return result;
  }
}

new Bai02().execute();