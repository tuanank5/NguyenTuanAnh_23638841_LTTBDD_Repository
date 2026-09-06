export class Bai03 {
  public rejectAfterOneSecond(): Promise<never> {
    return new Promise<never>((_resolve, reject: (reason?: Error) => void) => {
      setTimeout(() => {
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }

  public execute(): Promise<void> {
    return this.rejectAfterOneSecond()
      .then(() => {
        // Unreachable on success path for this exercise
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

new Bai03().execute();
