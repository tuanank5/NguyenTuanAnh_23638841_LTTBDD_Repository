export interface User {
  id: number;
  name: string;
  email: string;
}

export class Bai18 {
  public async fetchUser(id: number): Promise<User> {
    try {
      const user: User = await new Promise<User>((resolve: (value: User) => void, reject: (reason?: Error) => void) => {
        setTimeout(() => {
          if (id <= 0) {
            reject(new Error(`Invalid user id: ${id}`));
            return;
          }
          resolve({
            id,
            name: `User ${id}`,
            email: `user${id}@example.com`,
          });
        }, 1000);
      });
      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai18 fetchUser error:", error.message);
      } else {
        console.error("Bai18 fetchUser error:", String(error));
      }
      throw error;
    }
  }

  public async execute(id: number = 1): Promise<User> {
    try {
      const user: User = await this.fetchUser(id);
      console.log("Fetched user:", user);
      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai18 execute error:", error.message);
      } else {
        console.error("Bai18 execute error:", String(error));
      }
      throw error;
    }
  }
}

new Bai18().execute();