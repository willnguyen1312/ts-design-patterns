import { Singleton } from "./singleton"

test("Singleton should work as expected", () => {
  const instance1 = Singleton.getInstance()
  const instance2 = Singleton.getInstance()

  expect(instance1).toBe(instance2)
})
