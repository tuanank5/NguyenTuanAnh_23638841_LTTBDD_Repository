export class Bai04 {
  public getRandomNumber(): Promise<number> {
    return new Promise<number>((resolve: (value: number) => void, reject: (reason?: Error) => void) => {
      const value: number = Math.random();
      setTimeout(() => {
        if (value >= 0) {
          resolve(value);
        } else {
          reject(new Error("Invalid random number"));
        }
      }, 500);
    });
  }

  public execute(): Promise<void> {
    return this.getRandomNumber()
      .then((value: number) => {
        console.log("Random number:", value);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error(String(error));
        }
      });
  }
}

new Bai04().execute();
