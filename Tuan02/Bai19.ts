import { Bai18, User } from "./Bai18";

export class Bai19 {
  private readonly userApi: Bai18 = new Bai18();

  public async fetchUsers(ids: number[]): Promise<User[]> {
    try {
      const users: User[] = await Promise.all(
        ids.map((id: number) => this.userApi.fetchUser(id))
      );
      return users;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai19 error:", error.message);
      } else {
        console.error("Bai19 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(ids: number[] = [1, 2, 3]): Promise<User[]> {
    try {
      const users: User[] = await this.fetchUsers(ids);
      console.log("Fetched users:", users);
      return users;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai19 execute error:", error.message);
      } else {
        console.error("Bai19 execute error:", String(error));
      }
      throw error;
    }
  }
}

new Bai19().execute();
