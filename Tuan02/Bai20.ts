import { Bai18, User } from "./Bai18";

export class Bai20 {
  private readonly userApi: Bai18 = new Bai18();

  private withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
    return new Promise<T>((resolve: (value: T) => void, reject: (reason?: Error) => void) => {
      const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
        reject(new Error(`Timeout after ${timeoutMs}ms`));
      }, timeoutMs);

      promise
        .then((value: T) => {
          clearTimeout(timer);
          resolve(value);
        })
        .catch((error: unknown) => {
          clearTimeout(timer);
          if (error instanceof Error) {
            reject(error);
          } else {
            reject(new Error(String(error)));
          }
        });
    });
  }

  public slowFetchUser(id: number, delayMs: number = 3000): Promise<User> {
    return new Promise<User>((resolve: (value: User) => void) => {
      setTimeout(() => {
        resolve({
          id,
          name: `Slow User ${id}`,
          email: `slow${id}@example.com`,
        });
      }, delayMs);
    });
  }

  public async fetchUserWithTimeout(id: number, timeoutMs: number = 2000): Promise<User> {
    try {
      const user: User = await this.withTimeout(this.userApi.fetchUser(id), timeoutMs);
      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai20 error:", error.message);
      } else {
        console.error("Bai20 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<void> {
    try {
      const okUser: User = await this.fetchUserWithTimeout(1, 2000);
      console.log("Within timeout:", okUser);

      await this.withTimeout(this.slowFetchUser(99, 3000), 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Expected timeout case:", error.message);
      } else {
        console.error("Expected timeout case:", String(error));
      }
    }
  }
}

new Bai20().execute();
