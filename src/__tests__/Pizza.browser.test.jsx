import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alst text renders on image", async () => {
  const name = "My favorite pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} image={src} description="cool browswer stuff" />,
  );

  const image = await screen.getByRole("img");
  await expect.element(image).toBeInTheDocument();
  await expect.element(image).toHaveAttribute("src", src);
  await expect.element(image).toHaveAttribute("alt", name);
});
