export class Bai08 {
  public square(value: number): Promise<number> {
    return Promise.resolve(value * value);
  }

  public double(value: number): Promise<number> {
    return Promise.resolve(value * 2);
  }

  public addFive(value: number): Promise<number> {
    return Promise.resolve(value + 5);
  }

  public runChain(initial: number = 2): Promise<number> {
    return this.square(initial)
      .then((squared: number) => this.double(squared))
      .then((doubled: number) => this.addFive(doubled));
  }

  public async execute(): Promise<number> {
    try {
      const result: number = await this.runChain(2);
      console.log("Chain result:", result);
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai08 error:", error.message);
      } else {
        console.error("Bai08 error:", String(error));
      }
      throw error;
    }
  }
}

new Bai08().execute();
