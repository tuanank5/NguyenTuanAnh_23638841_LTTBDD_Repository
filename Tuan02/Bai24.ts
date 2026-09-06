export interface PostPayload {
  title: string;
  body: string;
  userId: number;
}

export interface CreatedPost extends PostPayload {
  id: number;
}
export class Bai24 {
  private readonly postUrl: string = "https://jsonplaceholder.typicode.com/posts";

  public async postData(payload: PostPayload): Promise<CreatedPost> {
    try {
      const response: Response = await fetch(this.postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const created: CreatedPost = (await response.json()) as CreatedPost;
      return created;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai24 error:", error.message);
      } else {
        console.error("Bai24 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<CreatedPost> {
    try {
      const result: CreatedPost = await this.postData({
        title: "Async Exercise 24",
        body: "Posted by NguyenTuanAnh - 23638841",
        userId: 1,
      });
      console.log("Created post:", result);
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai24 execute error:", error.message);
      } else {
        console.error("Bai24 execute error:", String(error));
      }
      throw error;
    }
  }
}

new Bai24().execute();
